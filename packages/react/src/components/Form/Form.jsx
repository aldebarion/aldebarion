import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useStyle, withEnhancedProps } from 'behaviors'

import FormContext from 'contexts/form'

const Form = React.forwardRef(({ onSubmit, size, ...props }, ref) => {
  const styled = useStyle('Form', props)
  const errors = useRef([])
  const [displayedErrors, setErrors] = useState([])

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(event)
  }

  const onFormItemErrors = (id, addedErrors) => {
    const newErrors = [
      ...errors.current.filter(e => e.id !== id),
      ...addedErrors,
    ]

    errors.current = newErrors
    setErrors(newErrors)
  }

  return (
    <FormContext.Provider
      value={{ size, onFormItemErrors, errors: displayedErrors }}
    >
      <form {...props} {...styled} onSubmit={handleSubmit} ref={ref} />
    </FormContext.Provider>
  )
})

Form.defaultProps = {
  onSubmit: () => {},
  size: null,
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  size: PropTypes.oneOf(sizes),
}

export default withEnhancedProps(Form)
