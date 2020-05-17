import React from 'react'

import Button from 'components/Button'

import { useForm } from 'behaviors'

const FormSubmit = props => {
  const { errors } = useForm()

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
