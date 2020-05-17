import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useLang, useStyle, withEnhancedProps, useBinaryState } from 'behaviors'

import Input from './Input'

const CopyButton = ({ onClick, label }) => {
  const styledInput = useStyle('Input_CopyClipboardButton', {})

  return (
    <button {...styledInput} aria-label={label} type="button" onClick={onClick}>
      {label}
    </button>
  )
}

CopyButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

const InputPassword = React.forwardRef((props, ref) => {
  const [isCopied, startCopying, stopCopying] = useBinaryState(false)
  const localRef = ref || useRef()
  const { tr } = useLang()

  const label = isCopied ? tr('Copied') : tr('Copy')

  const copyInClipboard = () => {
    localRef.current.focus()
    localRef.current.setSelectionRange(0, localRef.current.value.length)
    document.execCommand('copy')
    startCopying()
    setTimeout(stopCopying, 1500)
  }

  return (
    <Input
      {...props}
      readOnly
      ref={localRef}
      onFocus={copyInClipboard}
      onClick={copyInClipboard}
    >
      <CopyButton onClick={copyInClipboard} label={label} />
    </Input>
  )
})

InputPassword.defaultProps = {}

InputPassword.propTypes = {}

export default withEnhancedProps(InputPassword)
