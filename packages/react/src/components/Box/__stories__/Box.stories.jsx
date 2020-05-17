import React from 'react'

import basicTheme from 'themes/basic'
import ThemeProvider from 'components/ThemeProvider'
import Box from 'components/Box'
import Body from 'components/Body'

import style from '__stories__/global.style'

export default {
  component: Box,
  title: 'Components/Box',
}

export const Basic = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <Body className={style.body}>
        <Box className={style.box}>
          <Box.Title>Box title</Box.Title>
          <Box.Section>Section 1</Box.Section>
          <Box.Section>Section 1</Box.Section>
          <Box.Section>Section 1</Box.Section>
        </Box>
      </Body>
    </ThemeProvider>
  )
}
