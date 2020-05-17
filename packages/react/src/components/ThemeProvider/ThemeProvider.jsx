import React from 'react'
import PropTypes from 'prop-types'

import ThemeContext from 'contexts/theme'

const ThemeProvider = ({ theme, classNames, styles, ...props }) => (
  <ThemeContext.Provider value={{ classNames, styles, ...theme }} {...props} />
)

ThemeProvider.defaultProps = {
  theme: {},
  classNames: {},
  styles: {},
}

ThemeProvider.propTypes = {
  theme: PropTypes.shape({
    classNames: PropTypes.object,
    styles: PropTypes.object,
    components: PropTypes.object,
    behaviors: PropTypes.object,
  }),
  classNames: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  styles: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

export default ThemeProvider
