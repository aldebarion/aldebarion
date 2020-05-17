import { useContext, useRef } from 'react'

import LabelContext from 'contexts/label'

import useForm from './useForm'

let nextId = 0

const getNextId = () => {
  nextId += 1
  return nextId
}

export default () => {
  const { id } = useContext(LabelContext)

  const form = useForm()

  const inheritedId = id || form.id

  const ref = useRef(inheritedId || getNextId())

  return ref.current
}
