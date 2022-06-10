import React from 'react'

export default React.createContext({
  errors: [],
  size: null,
  rules: [],
  register: () => {},
  handleChange: () => {},
  errorsById: {},
  statusById: {},
})
