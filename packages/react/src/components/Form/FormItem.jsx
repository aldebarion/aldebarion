import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { useStyle, useId, useForm, withEnhancedProps } from 'behaviors'
import FormContext from 'contexts/form'
import { isEmail } from 'utils/email'

const checkInputType = (type, value, id) => {
  if (type === 'email' && !isEmail(value)) {
    return { type: 'email', value, id }
  }

  return false
}

const FormItem = ({ rules, ...props }) => {
  const styled = useStyle('FormItem', props)

  const id = useId()
  const parentForm = useForm()
  const [status, setStatus] = useState('normal')

  const onRegisterItem = (type, value) => {
    let newStatus = 'partial'

    if (typeof parentForm.onFormItemErrors !== 'function') {
      return
    }

    const aggregatedRules = [
      ...rules.map(r => ({ ...r, partialEval: false })),
      ...rules,
      { type: 'inputType', inputType: type },
    ]

    const errors = aggregatedRules
      .map(rule => {
        if (rule.type === 'required') {
          return value ? false : { type: rule.type, id }
        }

        if (rule.type === 'minLength') {
          return typeof value === 'string' &&
            value.length >= parseInt(rule.value, 10)
            ? false
            : { type: rule.type, id }
        }

        if (rule.type === 'inputType') {
          return checkInputType(rule.inputType, value, id)
        }

        if (typeof rule.partialEval === 'function') {
          return rule.partialEval(value)
            ? false
            : { type: 'custom', id, ...rule }
        }

        if (typeof rule.eval === 'function') {
          return rule.eval(value) ? false : { type: 'custom', id, ...rule }
        }

        return false
      })
      .filter(r => Boolean(r))

    if (errors.length === 0) {
      newStatus = 'success'
    } else if (errors.filter(e => e.partialEval).length > 0) {
      newStatus = 'error'
      console.log('errors', errors)
    }

    setStatus(newStatus)

    parentForm.onFormItemErrors(id, errors)
  }

  return (
    <FormContext.Provider
      value={{ ...parentForm, onRegisterItem, id, itemStatus: status }}
    >
      <div {...props} {...styled} />
    </FormContext.Provider>
  )
}

FormItem.defaultProps = {
  rules: [],
}

FormItem.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
    })
  ),
}

export default withEnhancedProps(FormItem)
