import React, { useState } from 'react'

import ThemeProvider from 'components/ThemeProvider'
import Box from 'components/Box'
import flatTheme from 'themes/flat.theme'
import tronTheme from 'themes/tron.theme'
import neumorphismTheme from 'themes/neumorphism.theme'
import spaceTheme from 'themes/space.theme'

import NavigationIndicators from '../index'
import style from './style'

export default {
  component: NavigationIndicators,
  title: 'Components/NavigationIndicators',
}

const pages = [
  { id: 'page1', label: 'Page 1' },
  { id: 'page2', label: 'Page 2' },
  { id: 'page3', label: 'Page 3' },
  { id: 'page4', label: 'Page 4' },
]

const withTheme = theme => () => {
  const [active, setActive] = useState(pages[0])

  const onClick = page => setActive(page)
  return (
    <ThemeProvider classNames={theme}>
      <Box className={style.box}>
        <NavigationIndicators
          pages={pages}
          active={active}
          className={style.indicators}
          onClick={onClick}
        />
      </Box>
    </ThemeProvider>
  )
}

export const Flat = withTheme(flatTheme)

export const Tron = withTheme(tronTheme)

export const Neumorphism = withTheme(neumorphismTheme)

export const Space = withTheme(spaceTheme)
