import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { useStyle, useRandomId, withEnhancedProps } from 'behaviors'
import FormContext from 'contexts/form'

const FormItem = ({ rules, ...props }) => {
  const styled = useStyle('FormItem', props)

  const id = useRandomId()

  const context = useContext(FormContext)

  return (
    <FormContext.Provider value={{ id, rules, ...context }}>
      <div {...props} {...styled} />
    </FormContext.Provider>
  )
}

FormItem.defaultProps = {
  rules: [],
}

FormItem.propTypes = {
  rules: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
    })
  ),
}

export default withEnhancedProps(FormItem)
