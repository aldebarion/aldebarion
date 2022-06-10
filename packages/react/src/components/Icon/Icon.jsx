import React from 'react'
import PropTypes from 'prop-types'

import { useStyle, useTheme } from 'behaviors'

import style from './Icon.style'

const Icon = ({ className, src, type, ...props }) => {
  const styled = useStyle('Icon', props)

  const { icons } = useTheme()

  const icon = src || icons[type]

  const { 'aria-label': ariaLabel } = props

  return (
    <span
      role="img"
      aria-label={ariaLabel}
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
  'aria-label': '',
}

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  type: PropTypes.string,
  'aria-label': PropTypes.string,
}

export default Icon
