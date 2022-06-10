import { useEffect, useState, useContext } from 'react'

import FormContext from '../contexts/form'

const hasNoErrors = errors => errors.length === 0
const hasPartialErrors = errors => errors.filter(e => e.partialEval).length > 0

export default (id, isFocused, value) => {
  const { errors } = useContext(FormContext)

  const errorsForInput = errors.filter(error => error.id === id)

  console.log('errors', id, errorsForInput, errors)

  let status = 'error'
  if (hasNoErrors(errorsForInput)) {
    status = 'success'
  } else if (!hasPartialErrors(errorsForInput) && (isFocused || !value)) {
    status = 'partialSuccess'
  }

  return status
}
