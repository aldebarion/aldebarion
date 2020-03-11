import { useContext } from 'react'

import LabelContext from 'contexts/label'

export default () => useContext(LabelContext).id
