import React from 'react'

import { useStyle } from 'behaviors'

export default props => {
  const styled = useStyle('BoxSection', props)

  return <div {...props} {...styled} />
}
