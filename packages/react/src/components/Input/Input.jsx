import React, { useState, useEffect, useRef, useContext } from 'react'
import PropTypes from 'prop-types'

import { sizes } from 'config'
import { merge } from 'utils/props'

import {
  useStyle,
  useInheritedId,
  withEnhancedProps,
  useFocus,
  useFormInput,
  useStatus,
} from 'behaviors'

const Input = React.forwardRef(
  (
    { children, size, id: initialId, readOnly, completion, ...props },
    userRef
  ) => {
    const alterRef = useRef()
    const ref = userRef || alterRef

    const inheritedId = useInheritedId()
    const id = initialId || inheritedId

    const { isFocused, detectFocus } = useFocus()

    const input = useFormInput({ id, ...props })

    const status = useStatus(id, isFocused, input.value)

    const styled = useStyle('Input', props, [
      size,
      status,
      isFocused ? 'focus' : 'unfocus',
      readOnly ? 'readOnly' : 'notReadOnly',
    ])
    const styledInput = useStyle('Input_input')

    return (
      <div {...styled}>
        {completion}
        <input
          {...merge(props, { id: inheritedId }, detectFocus)}
          {...styledInput}
          {...input}
          ref={ref}
        />
        {children}
      </div>
    )
  }
)

Input.defaultProps = {
  onChange: () => {},
  children: [],
  size: 'normal',
  value: '',
  type: 'text',
  readOnly: false,
  id: '',
  completion: [],
}

Input.propTypes = {
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(sizes),
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  id: PropTypes.string,
  completion: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}

export default withEnhancedProps(Input)
