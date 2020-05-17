import React from 'react'
import PropTypes from 'prop-types'

import {
  useStyle,
  useId,
  useBinaryState,
  withEnhancedProps,
  useForm,
} from 'behaviors'

import style from './InputPin.style'

const InputPin = ({ length, ...props }) => {
  const styled = useStyle('InputPin', props)

  const styledInput = useStyle('InputPin_input')

  const inputs = new Array(length).fill(0).map((v, index) => index)

  console.log('inputs', inputs)

  return (
    <div {...styledInput} className={`${style.InputPin} ${styled.className}`}>
      {inputs.map(i => (
        <input
          key={i}
          type="text"
          {...styledInput}
          className={`${style.InputPin} ${styled.className}`}
        />
      ))}
    </div>
  )
}

InputPin.defaultProps = {
  length: 4,
}

InputPin.propTypes = {
  length: PropTypes.number,
}

export default InputPin
