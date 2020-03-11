import React from 'react'

export default React.createContext({
  classNames: {},
  styles: {},
  customize: {
    labelRequired: text => `${text}*`,
  },
})
