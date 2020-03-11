import React from 'react'
// import PropTypes from 'prop-types'

import { useStyle, useLang } from 'behaviors'
import style from './ScrollDown.style'

const ScrollDown = props => {
  const styled = useStyle('ScrollDown', props, style.ScrollDown)

  const { tr } = useLang()

  return <div {...styled}>{tr('scrolldown')}</div>
}

ScrollDown.defaultProps = {}

ScrollDown.propTypes = {}

export default ScrollDown
