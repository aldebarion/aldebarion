import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useFocus, useStyle, useFormInput } from 'behaviors'
import { merge, chain } from 'utils/props'

import Input from './Input'

const cleanEmail = value =>
  `${value}`
    .replace(/[^a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.@]/g, '')
    .replace(/\.\./g, '.')
    .replace(/@(.*)@/g, '@$1')
    .replace(/[ ]/g, '')
    .trim()

const InputEmail = React.forwardRef(
  ({ completion: completionEnabled, ...props }, ref) => {
    const { isFocused, detectFocus } = useFocus()
    // const { value } = useCompletion(ref, cleanEmail)

    // const styledCompletion = useStyle('Input_completion')

    // // const completion = useCompletion(type, ref, cleanValue(type))

    // const value = useFormInput(
    //   initialValue,
    //   chain(onChange, completion.onChange),
    //   cleanValue(type)
    // )

    // const Completion = () =>
    //   isFocused && completionEnabled ? (
    //     <div {...styledCompletion}>{value}</div>
    //   ) : null

    return <Input {...merge(props, detectFocus)} type="email" />
  }
)

InputEmail.defaultProps = {
  completion: true,
}

InputEmail.propTypes = {
  completion: PropTypes.bool,
}

export default InputEmail
