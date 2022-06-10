import React from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useStyle, withEnhancedProps, useForm } from 'behaviors'

import FormContext from 'contexts/form'

const Form = React.forwardRef(({ onSubmit, size, ...props }, ref) => {
  const styled = useStyle('Form', props)
  const { handleSubmit, ...context } = useForm()

  return (
    <FormContext.Provider value={{ size, ...context }}>
      <form
        {...props}
        {...styled}
        onSubmit={handleSubmit(onSubmit)}
        ref={ref}
      />
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
