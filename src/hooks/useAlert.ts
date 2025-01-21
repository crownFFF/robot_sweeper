import { useState } from 'react'
import { AlertProps } from '@/lib'

const useAlert = () => {
  const [alert, setAlert] = useState({ show: false, type: 'success' })

  const showAlert = ({  type = 'danger' }: AlertProps) => setAlert({
    show: true,
    type
  })
  const hideAlert = () => setAlert({
    show: false,
    type: 'danger'
  })

  return { alert, showAlert, hideAlert }
}

export default useAlert