import React from 'react'

import { useStyle } from 'behaviors'

const Button = props => {
  const styled = useStyle('Button', props)

  return <button type="button" {...props} {...styled} />
}

Button.defaultProps = {}

Button.propTypes = {}

export default Button
