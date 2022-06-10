import { useRef } from 'react'

let nextId = 0

const getNextId = () => {
  nextId += 1
  return nextId
}

export default () => {
  const ref = useRef(getNextId())

  return ref.current
}
