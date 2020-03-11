import React from 'react'
import PropTypes from 'prop-types'
import InputDefault from './InputDefault'
import InputPassword from './InputPassword'

const Input = React.forwardRef((props, ref) => {
  const Component = props.type === 'password' ? InputPassword : InputDefault
  return <Component {...props} ref={ref} />
})

Input.defaultProps = {
  type: '',
}

Input.propTypes = {
  type: PropTypes.string,
}

export default Input
