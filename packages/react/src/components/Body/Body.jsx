import React from 'react'

import { useStyle } from 'behaviors'

const Box = props => {
  const styled = useStyle('Body', props)

  return <div {...props} {...styled} />
}

export default Box
