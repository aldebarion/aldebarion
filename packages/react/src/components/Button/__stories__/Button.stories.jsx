import React from 'react'

import Button from '../index'

export default {
  component: Button,
  title: 'Components|Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return <Button>Button</Button>
}
