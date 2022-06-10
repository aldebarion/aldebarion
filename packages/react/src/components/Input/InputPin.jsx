import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useStyle, withEnhancedProps } from 'behaviors'

import style from './InputPin.style'

const usePin = length =>
  new Array(length)
    .fill(null)
    .map((a, index) => ({ ref: useRef(), key: index }))

const empty = length => new Array(length).fill('')
const split = value => (v, index) => value[index] || ''

const InputPin = ({
  size,
  length,
  value,
  authorizedCharacters,
  onChange,
  ...props
}) => {
  const styled = useStyle('InputPin', props, [size])

  const styledInput = useStyle('InputPin_input', {}, [size])
  const [values, setValues] = useState(empty(length).map(split(value)))

  const inputs = usePin(length)

  const focus = newIndex => {
    if (newIndex < length && newIndex >= 0) {
      inputs[newIndex].ref.current.focus()
    }
  }

  const cleanValue = v => (authorizedCharacters.test(v) ? v : '')
  const changeValues = newValues => {
    setValues(newValues)
    onChange(newValues.join(''))
  }

  const changeValue = (index, newValue) => {
    const newValues = [...values]
    newValues[index] = newValue
    changeValues(newValues)
  }

  const handleChange = index => event => {
    const previousValue = values[index]
    const defaultValue = event.target.value
    const newValue = cleanValue(defaultValue)

    changeValue(index, newValue)

    if (previousValue.length < newValue.length) {
      focus(index + 1)
    }
  }

  const onKeyDown = index => event => {
    if (event.key === 'Backspace') {
      changeValue(index, '')

      if (index > 0) {
        focus(index - 1)
      }
      event.stopPropagation()
      event.preventDefault()
    } else if (event.key === 'Delete') {
      changeValue(index, '')
      event.stopPropagation()
      event.preventDefault()
    } else if (event.key === 'ArrowLeft') {
      focus(index - 1)
    } else if (event.key === 'ArrowRight') {
      focus(index + 1)
    } else if (values[index] !== '') {
      focus(index + 1)
    }
  }

  const onPaste = index => event => {
    const data = event.clipboardData.getData('text/plain')

    const cleanedValues = data
      .split('')
      .map(c => cleanValue(c))
      .slice(0, length - index)

    const newValues = [...values]
    newValues.splice(index, cleanedValues.length, ...cleanedValues)

    changeValues(newValues)

    event.stopPropagation()
    event.preventDefault()
  }

  useEffect(() => setValues(empty(length)), [length])

  return (
    <div {...styledInput} className={`${style.InputPin} ${styled.className}`}>
      {inputs.map(({ ref, key }, index) => (
        <input
          maxLength={1}
          key={key}
          ref={ref}
          type="text"
          {...styledInput}
          onChange={handleChange(index)}
          onKeyDown={onKeyDown(index)}
          value={values[index]}
          onPaste={onPaste(index)}
        />
      ))}
    </div>
  )
}

InputPin.defaultProps = {
  length: 4,
  onChange: () => {},
  size: 'normal',
  value: '',
  authorizedCharacters: /[0-9a-zA-Z]/,
}

InputPin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(sizes),
  value: PropTypes.string,
  authorizedCharacters: PropTypes.instanceOf(RegExp),
}

export default withEnhancedProps(InputPin)
