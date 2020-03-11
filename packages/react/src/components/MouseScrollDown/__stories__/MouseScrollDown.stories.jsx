import React from 'react'

import MouseScrollDown from '../index'
import style from './style'

export default {
  component: MouseScrollDown,
  title: 'Components|MouseScrollDown',
}

export const Default = () => {
  return (
    <div className={style.main}>
      <MouseScrollDown className={style.scrollDown} />
    </div>
  )
}
