import React, { useContext } from 'react'

import { sizes, types, ruleTypes } from 'config'
import FormContext from 'contexts/form'

const enhance = props => {
  return Object.keys(props).reduce((newProps, propertyName) => {
    if (sizes.includes(propertyName) && props[propertyName]) {
      if (props[propertyName]) {
        return {
          ...newProps,
          size: propertyName,
        }
      }
      return newProps
    }

    if (types.includes(propertyName)) {
      if (props[propertyName]) {
        return {
          ...newProps,
          type: propertyName,
        }
      }
      return newProps
    }

    if (ruleTypes.includes(propertyName)) {
      if (props[propertyName]) {
        return {
          ...newProps,
          rules: [
            ...(newProps.rules || []),
            { type: propertyName, value: props[propertyName] },
          ],
        }
      }
      return newProps
    }

    if (propertyName === 'rules') {
      return {
        ...newProps,
        rules: [...(props.rules || []), ...(newProps.rules || [])],
      }
    }

    return {
      ...newProps,
      [propertyName]: props[propertyName],
    }
  }, {})
}

export default Component =>
  React.forwardRef((props, ref) => {
    const { size } = useContext(FormContext)

    const formProps = size ? { size } : {}

    const allProps = enhance({ ...formProps, ...props })

    return <Component {...allProps} ref={ref} />
  })
