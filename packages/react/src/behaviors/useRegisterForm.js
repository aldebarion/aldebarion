import { useEffect } from 'react'

import useForm from './useForm'

export default (type, value) => {
  const { onRegisterItem } = useForm()

  const registerForm = (newType, newValue) => {
    if (typeof onRegisterItem === 'function') {
      onRegisterItem(newType, newValue)
    }
  }

  useEffect(() => registerForm(type, value), [value])

  return registerForm
}
