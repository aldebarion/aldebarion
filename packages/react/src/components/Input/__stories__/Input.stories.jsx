import React from 'react'

import Input from '../index'

export default {
  component: Input,
  title: 'Components|Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Text = () => {
  return <Input type="text" placeholder="Username" />
}

export const Password = () => {
  return <Input type="password" value="!2td&6cc0" passwordVisibilityToggable />
}
