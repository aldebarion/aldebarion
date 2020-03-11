import React from 'react'
import PropTypes from 'prop-types'

import { useStyle } from 'behaviors'

const Form = React.forwardRef(({ onSubmit, ...props }, ref) => {
  const styled = useStyle('Form', props)

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(event)
  }

  return <form {...props} {...styled} onSubmit={handleSubmit} ref={ref} />
})

Form.defaultProps = {
  onSubmit: () => {},
}

Form.propTypes = {
  onSubmit: PropTypes.func,
}

export default Form
