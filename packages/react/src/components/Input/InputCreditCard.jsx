import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'

import { useLang, useStyle, withEnhancedProps } from 'behaviors'

import Input from './Input'
import { useEffect } from 'react'

const InputCreditCard = React.forwardRef(({ value, ...props }, ref) => {
  // const [cardNumber, setCardNumber] = useState('')

  const cardNumberRef = ref || useRef()
  const cardNumber = useRef(value)

  const { tr } = useLang()

  const defaultPlaceholder = tr('Card Number')
  const ariaLabel = tr('Debit or Credit Card Number')

  useEffect(() => {
    cardNumberRef.current.value = value
    cardNumber.current = value
  }, [value])

  const onChange = (newValue, event) => {
    const { target } = event
    const position = target.selectionEnd
    const { length } = newValue

    const previousPosition = event.target.selectionEnd

    console.log('position', previousPosition)

    // https://stackoverflow.com/questions/17260238/how-to-insert-space-every-4-characters-for-iban-registering
    const cleanValue = newValue
      .replace(/\D/g, '')
      .replace(/(.{4})/g, '$1 ')
      .substring(0, 19)

    cardNumber.current = cleanValue

    // setCardNumber(cleanValue)
    // props.onChange(cleanValue)

    cardNumberRef.current.value = cleanValue

    const offset = cleanValue.charAt(previousPosition) === ' ' ? 1 : 0

    cardNumberRef.current.selectionStart = previousPosition + offset
    cardNumberRef.current.selectionEnd = previousPosition + offset

    // const newOffset =
    //   cleanValue.charAt(previousPosition) === ' ' &&
    //   cleanValue.charAt(previousPosition) !== newValue.charAt(previousPosition)
    //     ? 1
    //     : 0

    // console.log('newOffset', newOffset)

    // localRef.current.selectionEnd = previousPosition + newOffset

    // localRef.current.selectionEnd =
    //   previousPosition + cleanValue.charAt(previousPosition - 1) === ' ' &&
    //   cleanValue.charAt(length - 1) === ' ' &&
    //   length !== cleanValue.length
    //     ? 1
    //     : 0
  }

  // if (localRef.current) {
  //   console.log(localRef.current.selectionEnd)
  // }

  console.log('rerender')

  return (
    <Input
      aria-label={ariaLabel}
      placeholder={defaultPlaceholder}
      maxLength={19}
      {...props}
      // value={cardNumber}
      onChange={onChange}
      ref={cardNumberRef}
    />
  )
})

InputCreditCard.defaultProps = {
  size: 'normal',
  onChange: () => {},
  value: '',
}

InputCreditCard.propTypes = {
  size: PropTypes.oneOf(sizes),
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default withEnhancedProps(InputCreditCard)
