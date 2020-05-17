import React from 'react'

export default React.createContext({
  errors: [],
  onFormItemErrors: () => {},
  onRegisterItem: () => {},
  size: null,
  id: null,
  itemStatus: 'partial',
})
