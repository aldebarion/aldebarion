import React from 'react'

export default React.createContext({
  classNames: {},
  styles: {},
  components: {},
  behaviors: {
    labelRequired: text => `${text}*`,
  },
  icons: {},
})
