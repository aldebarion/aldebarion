import React from 'react'

import { useStyle } from 'behaviors'

export default props => {
  const styled = useStyle('BoxTitle', props)

  return <h2 {...props} {...styled} />
}
