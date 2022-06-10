import { useContext, useRef } from 'react'

import FormContext from 'contexts/form'

let nextId = 0

const getNextId = () => {
  nextId += 1
  return nextId
}

export default () => {
  const { id } = useContext(FormContext)

  const ref = useRef(id || getNextId())

  return ref.current
}
