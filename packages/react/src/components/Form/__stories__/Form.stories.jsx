import React from 'react'

import Input from 'components/Input'
import Button from 'components/Button'
import ThemeProvider from 'components/ThemeProvider'

import style from './style'

import Form from '../index'

export default {
  component: Form,
  title: 'Components/Form',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return (
    <Form>
      <Input type="email" placeholder="Email" />
      <Input
        type="password"
        placeholder="Password"
        passwordVisibilityToggable
      />
      <Button type="submit">Sign in</Button>
    </Form>
  )
}

export const WithTheme = () => {
  return (
    <ThemeProvider classNames={style}>
      <Form>
        <Input type="email" placeholder="Email" />
        <Input
          type="password"
          placeholder="Password"
          passwordVisibilityToggable
        />
        <Button type="submit">Sign in</Button>
      </Form>
    </ThemeProvider>
  )
}
