import React from 'react'
import PropTypes from 'prop-types'

import ThemeContext from 'contexts/theme'

const ThemeProvider = ({ classNames, styles, ...props }) => (
  <ThemeContext.Provider value={{ classNames, styles }} {...props} />
)

ThemeProvider.defaultProps = {
  classNames: {},
  styles: {},
}

ThemeProvider.propTypes = {
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  styles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

export default ThemeProvider
