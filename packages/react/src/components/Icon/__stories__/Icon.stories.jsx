import React, { useState } from 'react'

import basicTheme from 'themes/basic'
import ThemeProvider from 'components/ThemeProvider'

// import style from './style'

import Icon from '../index'

export default {
  component: Icon,
  title: 'Components/Icon',
}

export const Basic = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Icon type="eye" />
    </ThemeProvider>
  )
}
