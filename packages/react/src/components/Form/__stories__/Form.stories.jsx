import React, { useState } from 'react'

import basicTheme from 'themes/basic'
import Input from 'components/Input'
import Button from 'components/Button'
import ThemeProvider from 'components/ThemeProvider'
import Box from 'components/Box'
import Body from 'components/Body'

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

export const SignIn = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.signin}>
          <Form huge>
            <Form.Item required>
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item required>
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Form.Submit primary>Sign In</Form.Submit>
            </Form.Item>
          </Form>
          <div className={style.forgotPassword}>
            <Button link small>
              Already an account?
            </Button>
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const SignUp = () => {
  const [password, setPassword] = useState('')

  console.log('password', password)

  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.signin}>
          <Form huge>
            <Form.Item required>
              <Input type="email" placeholder="Email" />
            </Form.Item>
            <Form.Item required minLength={8}>
              <Input.Password
                placeholder="Password (min 8 characters)"
                onChange={setPassword}
                hideForgot
              />
            </Form.Item>
            <Form.Item
              required
              rules={[Input.Password.Rules.confirmation(password)]}
            >
              <Input.Password placeholder="Confirm password" hideForgot />
            </Form.Item>
            <Form.Item>
              <Form.Submit secondary>Sign Up</Form.Submit>
            </Form.Item>
          </Form>
          <div className={style.forgotPassword}>
            <Button link small>
              No account?
            </Button>
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}
