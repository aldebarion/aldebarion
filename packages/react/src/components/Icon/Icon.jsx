import React from 'react'
import PropTypes from 'prop-types'

import { useStyle, useTheme } from 'behaviors'

import style from './Icon.style'

const Icon = ({ className, src, type, ...props }) => {
  const styled = useStyle('Icon', props)

  const { icons } = useTheme()

  const icon = src || icons[type]

  return (
    <span
      {...styled}
      className={`${style.Icon} ${className} ${styled.className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
}

Icon.defaultProps = {
  className: '',
  src: '',
  type: '',
}

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
}

export default Icon
