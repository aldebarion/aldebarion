import React from 'react'

import { useStyle } from 'behaviors'

const Box = props => {
  const styled = useStyle('Box', props)

  return <div {...props} {...styled} />
}

export default Box
