import { useState } from 'react'

import useEventListener from './useEventListener'

const domains = ['gmail.com', 'outlook.com']

const completionByType = {
  email: value => {
    const partialDomain = value.replace(/.*@/, '')
    if (
      value.includes('@') &&
      partialDomain.length >= 1 &&
      !domains.includes(partialDomain)
    ) {
      const fullDomain = domains.find(d => d.includes(partialDomain))
      if (fullDomain) {
        return value.replace(partialDomain, fullDomain)
      }
    }

    return ''
  },
}

const complete = (type, value) => {
  if (completionByType[type]) {
    return completionByType[type](value)
  }

  return ''
}

const forceValue = (target, value) => {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set
  nativeInputValueSetter.call(target, value)
}

const triggerOnChange = target => {
  const newEvent = new Event('input', { bubbles: true })
  target.dispatchEvent(newEvent)
}

export default (type, ref, clean = v => v) => {
  const [completionValue, setCompletionValue] = useState('')

  const target = ref.current

  const onChange = value => {
    setCompletionValue(complete(type, value))
  }

  // useEventListener(
  //   'keyDown',
  //   event => {
  //     if (event.key === 'Tab' && completionValue.length > 0) {
  //       const value = complete(type, clean(target.value))
  //       forceValue(target, value)
  //       triggerOnChange(target)
  //     }
  //   },
  //   target
  // )

  return { value: completionValue, detectCompletion: { onChange } }
}
