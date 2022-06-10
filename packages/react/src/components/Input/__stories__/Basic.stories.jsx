import React from 'react'

import basicTheme from 'themes/basic'
import ThemeProvider from 'components/ThemeProvider'
import Box from 'components/Box'
import Body from 'components/Body'

import style from './style'

import Input from '../index'

export default {
  component: Input,
  title: 'Components/Input/BasicTheme',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Text = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input placeholder="Name" huge />
          </div>
          <div className={style.line}>
            <Input placeholder="Name" large />
          </div>
          <div className={style.line}>
            <Input placeholder="Name" />
          </div>
          <div className={style.line}>
            <Input placeholder="Name" small />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const Email = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input placeholder="Email" type="email" huge />
          </div>
          <div className={style.line}>
            <Input placeholder="Email" type="email" large />
          </div>
          <div className={style.line}>
            <Input placeholder="Email" type="email" />
          </div>
          <div className={style.line}>
            <Input placeholder="Email" type="email" small />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const Password = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input.Password huge />
          </div>
          <div className={style.line}>
            <Input.Password large />
          </div>
          <div className={style.line}>
            <Input.Password />
          </div>
          <div className={style.line}>
            <Input.Password small />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const Clipboard = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input.CopyClipboard
              className={style.clipboard}
              value="http://copyclipboard.com"
              huge
            />
          </div>
          <div className={style.line}>
            <Input.CopyClipboard
              className={style.clipboard}
              value="http://copyclipboard.com"
              large
            />
          </div>
          <div className={style.line}>
            <Input.CopyClipboard
              className={style.clipboard}
              value="http://copyclipboard.com"
            />
          </div>
          <div className={style.line}>
            <Input.CopyClipboard
              className={style.clipboard}
              value="http://copyclipboard.com"
              small
            />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const CreditCard = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input.CreditCard huge />
          </div>
          <div className={style.line}>
            <Input.CreditCard large />
          </div>
          <div className={style.line}>
            <Input.CreditCard />
          </div>
          <div className={style.line}>
            <Input.CreditCard small />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}

export const Pin = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div className={style.line}>
            <Input.Pin huge />
          </div>
          <div className={style.line}>
            <Input.Pin large />
          </div>
          <div className={style.line}>
            <Input.Pin />
          </div>
          <div className={style.line}>
            <Input.Pin small />
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}
