import React, { useContext } from 'react'

import { useStyle } from 'behaviors'

export const Context = React.createContext({
  completion: '',
  enabled: true,
})

const InputCompletion = () => {
  const styledCompletion = useStyle('Input_completion')

  const { completion, enabled } = useContext(Context)

  return <>{enabled ? <div {...styledCompletion}>{completion}</div> : null}</>
}

export default InputCompletion
