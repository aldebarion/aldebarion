import { useState, useEffect, useContext } from 'react'
import FormContext from 'contexts/form'

const cleanByType = {
  email: value =>
    `${value}`
      .replace(/[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.@]/g, '')
      .replace(/\.\./g, '.')
      .replace(/@(.*)@/g, '@$1')
      .replace(/[ ]/g, '')
      .trim(),
}

const clean = (type, value) => {
  if (cleanByType[type]) {
    return cleanByType[type](value)
  }

  return value
}

export default ({ id, type, value, onChange }) => {
  const [cleanedValue, setValue] = useState(clean(type, value))

  const { register, handleChange: handleChangeForForm, rules } = useContext(
    FormContext
  )

  const handleChange = event => {
    const newCleanValue = clean(type, event.target.value)
    setValue(newCleanValue)
    onChange(newCleanValue)
    handleChangeForForm(id, newCleanValue)
  }

  useEffect(() => {
    register(id, type, [...rules, { type }], value)
  }, [])

  // useEffect(() => {
  //   console.log('cleanValue')
  //   const cleanedValue = clean(initialValue)
  //   setValue(cleanedValue)
  // }, [initialValue, clean])

  return { value: cleanedValue, onChange: handleChange }
}
