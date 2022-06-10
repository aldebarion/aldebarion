import React from 'react'

import { useStyle, withEnhancedProps } from 'behaviors'

const Box = props => {
  const styled = useStyle('Box', props)

  return <div {...props} {...styled} />
}

export default withEnhancedProps(Box)
