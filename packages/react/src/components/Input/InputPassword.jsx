import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useLang, useStyle, withEnhancedProps } from 'behaviors'
import Icon from 'components/Icon'

import Input from './Input'

const confirmation = password => ({
  type: 'confirmation',
  eval: value => value === password,
  partialEval: value => password.includes(value),
})

const ToggleVisibilityButton = ({ onClick, isVisible }) => {
  const styled = useStyle('Input_ToggleVisibityButton')
  const styledIcon = useStyle('Input_ToggleVisibityButtonIcon')
  const { tr } = useLang()

  const label = isVisible ? tr('Hide password') : tr('Show passord')

  const type = isVisible ? 'eyeOff' : 'eye'

  return (
    <button
      {...styled}
      aria-label={label}
      type="button"
      onClick={onClick}
      tabIndex="-1"
    >
      <Icon {...styledIcon} type={type} />
    </button>
  )
}

ToggleVisibilityButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
}

const ForgotButton = ({ onClick }) => {
  const styled = useStyle('Input_ForgotButton')
  const { tr } = useLang()

  return (
    <button {...styled} type="button" onClick={onClick} tabIndex="-1">
      {tr('Forgot?')}
    </button>
  )
}

ForgotButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

const InputPassword = React.forwardRef(
  ({ hidePasswordVisibility, hideForgot, onForgot, ...props }, ref) => {
    const [isVisible, toggleVisibility] = useState(false)
    const { tr } = useLang()

    const [value, setValue] = useState(props.value || '')

    useEffect(() => setValue(props.value), [props.value])

    const onChange = newValue => {
      setValue(newValue)
      props.onChange(newValue)
    }

    return (
      <>
        <Input
          placeholder={tr('Password')}
          {...props}
          onChange={onChange}
          type={isVisible ? 'text' : 'password'}
          ref={ref}
        >
          {!hideForgot && !value && !props.value ? (
            <ForgotButton onClick={onForgot} />
          ) : null}
          {!hidePasswordVisibility && (props.value || value) ? (
            <ToggleVisibilityButton
              onClick={() => toggleVisibility(!isVisible)}
              isVisible={isVisible}
            />
          ) : null}
        </Input>
      </>
    )
  }
)

InputPassword.defaultProps = {
  size: 'normal',
  onChange: () => {},
  value: '',
  onForgot: () => {},
  hidePasswordVisibility: false,
  hideForgot: false,
}

InputPassword.propTypes = {
  size: PropTypes.oneOf(sizes),
  onChange: PropTypes.func,
  value: PropTypes.string,
  onForgot: PropTypes.func,
  hidePasswordVisibility: PropTypes.bool,
  hideForgot: PropTypes.bool,
}

const ExternalInputPassword = withEnhancedProps(InputPassword)

ExternalInputPassword.Rules = { confirmation }

export default ExternalInputPassword
