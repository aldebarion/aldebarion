import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useLang, useStyle } from 'behaviors'

import InputDefault from './InputDefault'

const ToggleVisibilityButton = ({ onClick, label, isVisible }) => {
  const { tr } = useLang()

  const styledInput = useStyle('Input_ToggleVisibityButton', {})

  const labelShort = isVisible ? tr('Hide') : tr('Show')

  return (
    <button {...styledInput} aria-label={label} type="button" onClick={onClick}>
      {labelShort}
    </button>
  )
}

ToggleVisibilityButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
}

const InputPassword = React.forwardRef(
  ({ passwordVisibilityToggable, passwordVisible, ...props }) => {
    const [isVisible, toggleVisibility] = useState(passwordVisible)

    const { tr } = useLang()

    const label = isVisible ? tr('Hide password') : tr('Show passord')

    return (
      <>
        <InputDefault {...props} type={isVisible ? 'text' : 'password'}>
          {passwordVisibilityToggable ? (
            <ToggleVisibilityButton
              onClick={() => toggleVisibility(!isVisible)}
              label={label}
              isVisible={isVisible}
            />
          ) : null}
        </InputDefault>
      </>
    )
  }
)

InputPassword.defaultProps = {
  passwordVisibilityToggable: true,
  passwordVisible: false,
}

InputPassword.propTypes = {
  passwordVisibilityToggable: PropTypes.bool,
  passwordVisible: PropTypes.bool,
}

export default InputPassword
