import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import {
  useStyle,
  useId,
  useBinaryState,
  withEnhancedProps,
  useRegisterForm,
  useForm,
} from 'behaviors'

const cleanersValue = {
  email: value =>
    `${value}`
      .replace(/[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.@]/g, '')
      .replace(/\.\./g, '.')
      .replace(/@(.*)@/g, '@$1')
      .replace(/[ ]/g, '')
      .trim(),
}

const cleanValue = (type, value) => {
  if (cleanersValue[type]) {
    return cleanersValue[type](value)
  }

  return value
}

const domains = ['gmail.com', 'outlook.com']

const completedDomains = {
  email: value => {
    const partialDomain = value.replace(/.*@/, '')
    if (
      value.includes('@') &&
      partialDomain.length >= 1 &&
      !domains.includes(partialDomain)
    ) {
      const fullDomain = domains.find(d => d.includes(partialDomain))
      if (fullDomain) {
        return value.replace(partialDomain, fullDomain)
      }
    }

    return ''
  },
}

const completedDomain = (type, value) => {
  if (completedDomains[type]) {
    return completedDomains[type](value)
  }

  return ''
}

const Input = React.forwardRef(
  ({ onChange, children, size, value, type, readOnly, ...props }, ref) => {
    const [isFocused, onFocus, onBlur] = useBinaryState(false)
    const [completion, setCompletion] = useState('')

    const { itemStatus } = useForm()

    const styled = useStyle('Input', props, [
      size,
      itemStatus,
      isFocused ? 'focus' : 'unfocus',
      readOnly ? 'readOnly' : 'notReadOnly',
    ])
    const styledInput = useStyle('Input_input')
    const styledCompletion = useStyle('Input_completion')

    const id = useId()

    const [cleanedValue, setCleanedValue] = useState(cleanValue(type, value))
    const registerForm = useRegisterForm(type, cleanedValue)

    useEffect(() => setCleanedValue(cleanValue(type, value)), [value])

    const handleChange = event => {
      const newValue = cleanValue(type, event.target.value)
      setCleanedValue(newValue)
      onChange(newValue, event)
      setCompletion(completedDomain(type, newValue))
      registerForm(type, newValue)
    }

    const onKeyDown = event => {
      if (event.key === 'Tab' && completion.length > 0) {
        handleChange({ target: { value: completion } })
      }
    }

    return (
      <div {...styled}>
        {isFocused ? <div {...styledCompletion}>{completion}</div> : null}
        <input
          type={type}
          {...props}
          {...styledInput}
          ref={ref}
          onChange={handleChange}
          id={id}
          onFocus={onFocus}
          onBlur={onBlur}
          value={cleanedValue}
          onKeyDown={event => {
            onKeyDown(event)
            if (typeof props.onKeyDown === 'function') {
              props.onKeyDown(event)
            }
          }}
        />
        {children}
      </div>
    )
  }
)

Input.defaultProps = {
  onChange: () => {},
  children: [],
  size: 'normal',
  value: '',
  type: 'text',
  readOnly: false,
}

Input.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(sizes),
  type: PropTypes.string,
  readOnly: PropTypes.bool,
}

export default withEnhancedProps(Input)
