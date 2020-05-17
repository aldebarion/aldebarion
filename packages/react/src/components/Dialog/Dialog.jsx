import React from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

import Box from 'components/Box'

import { usePortal, useStyle } from 'behaviors'

import classNames from './Dialog.style'

const Modal = ({ id, isVisible, onClose, children, ...props }) => {
  const target = usePortal(id)
  const styledContainer = useStyle('DialogContainer')
  const styled = useStyle('Dialog', props)

  if (!isVisible) {
    return null
  }

  return createPortal(
    <div
      role="dialog"
      {...styledContainer}
      className={`${classNames.Dialog} ${styledContainer.className}`}
    >
      <Box {...styled}>{children}</Box>
    </div>,
    target
  )
}

Modal.defaultProps = {
  isVisible: false,
  id: 'default',
  onClose: () => {},
  children: [],
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  id: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default Modal
