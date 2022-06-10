import React, { useContext } from 'react'

import Button from 'components/Button'
import FormContext from 'contexts/form'

const FormSubmit = props => {
  const { errors } = useContext(FormContext)

  return (
    <Button
      htmlType="submit"
      disabled={errors.length > 0}
      type="secondary"
      {...props}
    />
  )
}

export default FormSubmit
