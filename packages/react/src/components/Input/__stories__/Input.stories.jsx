import React from 'react'

import basicTheme from 'themes/basic'
import ThemeProvider from 'components/ThemeProvider'
import Box from 'components/Box'
import Body from 'components/Body'

import style from './style'

import Input from '../index'

export default {
  component: Input,
  title: 'Components/Input',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Text = () => {
  return <Input placeholder="Username" />
}

export const Password = () => {
  return <Input.Password value="!2td&6cc0" passwordVisibilityToggable />
}

export const Basic = () => {
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
