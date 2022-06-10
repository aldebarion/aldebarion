import { useState, useRef } from 'react'

import { isEmail } from 'utils/email'

const predefinedRulesEval = {
  required: () => value => Boolean(value),
  minLength: rule => value =>
    typeof value === 'string' && value.length >= parseInt(rule.value, 10),
  email: () => value => isEmail(value),
}

const getEval = rule => {
  if (predefinedRulesEval[rule.type]) {
    return predefinedRulesEval[rule.type](rule)
  }

  if (typeof rule.partialEval === 'function') {
    return rule.partialEval
  }

  if (typeof rule.eval === 'function') {
    return rule.eval
  }

  return () => true
}

const evalRules = (rules, value) =>
  rules
    .map(rule => (getEval(rule)(value) ? false : rule))
    .filter(r => Boolean(r))

export default () => {
  const inputs = useRef({})
  const [errors, setErrors] = useState([])
  const currentErrors = useRef([])

  const updateErrors = (id, value) => {
    const { rules = [] } = inputs.current[id]

    const newErrorsForItem = evalRules(rules, value, id)
    const allErrors = [
      ...currentErrors.current.filter(error => error.id !== id),
      ...newErrorsForItem,
    ]

    currentErrors.current = allErrors

    setErrors(allErrors)
  }

  const register = (id, type, rules, value) => {
    const aggregatedRules = [
      ...rules,
      ...rules
        .filter(rule => rule.partialEval)
        .map(rule => ({ ...rule, partialEval: false })),
    ].map(rule => ({ ...rule, id }))

    inputs.current[id] = {
      type,
      rules: aggregatedRules,
    }

    updateErrors(id, value, rules)
  }

  const handleSubmit = onSubmit => event => {
    event.preventDefault()

    if (errors.length === 0) {
      onSubmit(event)
    }
  }

  const handleChange = (id, value) => {
    updateErrors(id, value)
  }

  return {
    handleSubmit,
    handleChange,
    register,
    errors,
  }
}
