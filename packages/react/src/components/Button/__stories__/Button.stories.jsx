import React from 'react'

import basicTheme from 'themes/basic'
import Box from 'components/Box'
import Body from 'components/Body'
import ThemeProvider from 'components/ThemeProvider'

import Button from '../index'

import style from './main.style'

export default {
  component: Button,
  title: 'Components/Button',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => {
  return <Button>Button</Button>
}

export const Basic = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <div classNames={style.line}>
            <Button className={style.button} huge>
              Basic
            </Button>
            <Button className={style.button} primary huge>
              Primary
            </Button>
            <Button className={style.button} secondary huge>
              Secondary
            </Button>
            <Button className={style.button} danger huge>
              Danger
            </Button>
          </div>
          <div classNames={style.line}>
            <Button className={style.button} large>
              Basic
            </Button>
            <Button className={style.button} primary large>
              Primary
            </Button>
            <Button className={style.button} secondary large>
              Secondary
            </Button>
            <Button className={style.button} danger large>
              Danger
            </Button>
          </div>
          <div classNames={style.line}>
            <Button className={style.button}>Basic</Button>
            <Button className={style.button} primary>
              Primary
            </Button>
            <Button className={style.button} secondary>
              Secondary
            </Button>
            <Button className={style.button} danger>
              Danger
            </Button>
          </div>

          <div classNames={style.line}>
            <Button className={style.button} small>
              Basic
            </Button>
            <Button className={style.button} primary small>
              Primary
            </Button>
            <Button className={style.button} secondary small>
              Secondary
            </Button>
            <Button className={style.button} danger small>
              Danger
            </Button>
          </div>

          <div classNames={style.line}>
            <Button className={style.button} disabled>
              Disabled
            </Button>
            <Button className={style.button} primary disabled>
              Disabled
            </Button>
            <Button className={style.button} secondary disabled>
              Disabled
            </Button>
            <Button className={style.button} danger disabled>
              Disabled
            </Button>
          </div>

          <div classNames={style.line}>
            <Button className={style.button} progress={30}>
              Progressing
            </Button>
            <Button className={style.button} primary progress={30}>
              Progressing
            </Button>
            <Button className={style.button} secondary progress={30}>
              Progressing
            </Button>
            <Button className={style.button} danger progress={30}>
              Progressing
            </Button>
          </div>

          <div classNames={style.line}>
            <Button className={style.button} link>
              Link style
            </Button>
          </div>
        </Box>
      </Body>
    </ThemeProvider>
  )
}
