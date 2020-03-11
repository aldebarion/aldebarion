import React from 'react'

import flatTheme from 'themes/flat.theme'
import neumorphismTheme from 'themes/neumorphism.theme'
import tronTheme from 'themes/tron.theme'
import spaceTheme from 'themes/space.theme'

import Button from 'components/Button'
import Box from 'components/Box'
import ThemeProvider from '../index'
import customizedClassNames from './customized.style'

import style from './main.style'

export default {
  component: ThemeProvider,
  title: 'Components|ThemeProvider',
}

const withTheme = theme => () => (
  <ThemeProvider classNames={theme}>
    <Box className={style.box}>
      <Button>Button</Button>
    </Box>
  </ThemeProvider>
)

export const Customized = withTheme(customizedClassNames)

export const Flat = withTheme(flatTheme)

export const Neumorphism = withTheme(neumorphismTheme)

export const Tron = withTheme(tronTheme)

export const Space = withTheme(spaceTheme)
