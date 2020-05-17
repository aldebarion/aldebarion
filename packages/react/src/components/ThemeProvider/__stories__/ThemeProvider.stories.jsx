import React from 'react'

import flatTheme from 'themes/flat.theme'
import neumorphismTheme from 'themes/neumorphism.theme'
import tronTheme from 'themes/tron.theme'
import spaceTheme from 'themes/space.theme'
import basicTheme from 'themes/basic'

import Button from 'components/Button'
import Box from 'components/Box'
import Body from 'components/Body'
import ThemeProvider from '../index'
import customizedClassNames from './customized.style'

import style from './main.style'

export default {
  component: ThemeProvider,
  title: 'Components/ThemeProvider',
}

const withTheme = theme => () => (
  <ThemeProvider classNames={theme}>
    <Box className={style.body}>
      <Button>Button</Button>
    </Box>
  </ThemeProvider>
)

export const Customized = withTheme(customizedClassNames)

export const Flat = withTheme(flatTheme)

export const Neumorphism = withTheme(neumorphismTheme)

export const Tron = withTheme(tronTheme)

export const Space = withTheme(spaceTheme)

export const Basic = () => (
  <ThemeProvider theme={basicTheme}>
    <Body className={style.body}>
      <Box className={style.box}>
        <Button className={style.button} large>
          Hello
        </Button>
        <Button className={style.button} primary large>
          Hello
        </Button>
        <Button className={style.button} secondary large>
          Hello
        </Button>

        <Button className={style.button}>Hello</Button>
        <Button className={style.button} primary>
          Hello
        </Button>
        <Button className={style.button} secondary>
          Hello
        </Button>

        <Button className={style.button} small>
          Hello
        </Button>
        <Button className={style.button} primary small>
          Hello
        </Button>
        <Button className={style.button} secondary small>
          Hello
        </Button>
      </Box>
    </Body>
  </ThemeProvider>
)
