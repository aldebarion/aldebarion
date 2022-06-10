import { useState } from 'react'

export default () => {
  const [isFocused, setFocus] = useState(false)

  const onBlur = () => {
    setFocus(false)
  }

  const onFocus = () => {
    setFocus(true)
  }

  return { isFocused, detectFocus: { onBlur, onFocus } }
}
