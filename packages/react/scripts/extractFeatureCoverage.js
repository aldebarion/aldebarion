import { promises as fs } from 'fs'
import path from 'path'

const filename = path.join(__dirname, '../.output.json')

// https://jestjs.io/docs/en/configuration#testresultsprocessor-string

const INTERNAL = '[INT]'

fs.readFile(filename, 'utf8')
  .then(content => JSON.parse(content))
  .then(tests => {
    const features = {}
    console.log('tests', tests)

    tests.testResults.forEach(({ assertionResults }) => {
      assertionResults.forEach(
        ({ fullName, ancestorTitles = [], ...other }) => {
          console.log('other', other)
          if (ancestorTitles.length >= 1) {
            const [name] = ancestorTitles

            const scenario = { name: fullName }

            if (name.includes(INTERNAL) || scenario.name.includes(INTERNAL)) {
              return
            }
            if (!features[name]) {
              features[name] = { name, scenarios: [] }
            }

            features[name].scenarios.push(scenario)
          }
        }
      )
    })

    return features
  })
  .then(features => Object.values(features))
  .then(features => console.log('features', JSON.stringify(features, null, 2)))
