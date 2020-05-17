import React from 'react'

import ThemeProvider from 'components/ThemeProvider'
import flatTheme from 'themes/flat.theme'
import ScrollDown from '../index'
import style from './style'

export default {
  component: ScrollDown,
  title: 'Components/ScrollDown',
}

export const Flat = () => {
  return (
    <ThemeProvider classNames={flatTheme}>
      <div className={style.main}>
        <ScrollDown className={style.scrollDown} />
      </div>
    </ThemeProvider>
  )
}
