import React from 'react'
import PropTypes from 'prop-types'

import { useStyle, useId } from 'behaviors'

import style from './InputDefault.style'

const Input = React.forwardRef(({ onChange, children, ...props }, ref) => {
  const styled = useStyle('Input', props, style.Input)

  const styledInput = useStyle('Input_input', props)

  const id = useId()

  return (
    <div {...styled}>
      <input
        {...props}
        {...styledInput}
        ref={ref}
        onChange={event => onChange(event.target.value, event)}
        id={id}
      />
      {children}
    </div>
  )
})

Input.defaultProps = {
  onChange: () => {},
  children: [],
}

Input.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Input
