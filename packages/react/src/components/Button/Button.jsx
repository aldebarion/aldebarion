import React from 'react'
import PropTypes from 'prop-types'

import { sizes, types } from 'config'

import { useStyle, withEnhancedProps } from 'behaviors'

const ButtonProgress = ({ progress }) => {
  const styledProgress = useStyle('Button_progress')

  return (
    <div
      data-testid="buttonProgress"
      {...styledProgress}
      style={{ width: `${progress}%` }}
    />
  )
}

ButtonProgress.defaultProps = {
  progress: 0,
}

ButtonProgress.propTypes = {
  progress: PropTypes.number,
}

const isProgress = (progress, type) =>
  typeof progress === 'number' && type !== types.link

const Button = ({ size, type, htmlType, progress, children, ...props }) => {
  const styled = useStyle('Button', props, [
    size,
    type,

    isProgress(progress, type) ? 'containsProgress' : 'noProgress',
  ])

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={htmlType} {...props} {...styled}>
      {isProgress(progress, type) ? (
        <ButtonProgress progress={progress} />
      ) : null}
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'normal',
  type: 'basic',
  htmlType: 'button',
  progress: null,
  children: [],
}

Button.propTypes = {
  size: PropTypes.oneOf(sizes),
  type: PropTypes.oneOf(types),
  htmlType: PropTypes.oneOf(['button', 'submit']),
  progress: (props, propName, componentName) => {
    if (props[propName] === null) {
      return null
    }

    if (typeof props[propName] !== 'number') {
      return new Error(
        `Invalid type of '${propName}' supplied to '${componentName}'. Validation failed`
      )
    }

    if (props[propName] < 0 || props[propName] > 100) {
      return new Error(
        `Invalid type of '${propName}' supplied to '${componentName}'. Validation failed`
      )
    }
  },
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default withEnhancedProps(Button)
