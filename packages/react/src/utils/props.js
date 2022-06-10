import mergeWith from 'lodash/mergeWith'

export const chain = (...funcs) => (...args) =>
  funcs.forEach(func => {
    func(...args)
  })

const mergeFunctionProps = (propA, propB) => {
  if (typeof propA === 'function' && typeof propB === 'function') {
    return chain(propA, propB)
  }

  return propA
}

export const merge = (...propsArray) =>
  propsArray.reduce((props, newProps) => {
    mergeWith(props, newProps, mergeFunctionProps)

    return props
  }, {})
