import React from 'react'

import Input from 'components/Input'
import Label from '../index'

export default {
  component: Label,
  title: 'Components/Label',
}

export const Default = () => {
  return (
    <Label label="Email">
      <Input placeholder="foo@bar.com" type="email" />
    </Label>
  )
}

export const Required = () => {
  return (
    <Label label="Email" required>
      <Input placeholder="foo@bar.com" type="email" />
    </Label>
  )
}
