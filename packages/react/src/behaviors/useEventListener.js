import { useEffect } from 'react'

export default (eventName, callback = () => {}, target = document) => {
  useEffect(() => {
    target.addEventListener(eventName, callback)

    return () => target.removeEventListener(eventName, callback)
  }, [eventName, callback, target])
}
