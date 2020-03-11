import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useStyle, useCustomize } from 'behaviors'
import LabelContext from 'contexts/label'

const Label = ({ children, required, label, ...props }) => {
  const styled = useStyle('Label', props)

  const [id, setId] = useState('')
  useEffect(() => {
    setId(Math.random().toString(36))
  }, [])

  const styledSpan = useStyle('Label_span', {})
  const { labelRequired } = useCustomize()

  const realLabel =
    required && typeof label === 'string' ? labelRequired(label) : label

  return (
    <label htmlFor={id} {...props} {...styled}>
      <LabelContext.Provider value={{ id }}>
        <span {...styledSpan}>{realLabel}</span>
        {children}
      </LabelContext.Provider>
    </label>
  )
}

Label.defaultProps = {
  children: [],
  required: false,
  label: '',
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  required: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

export default Label
