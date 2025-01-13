import { useState } from 'react'

interface AlertProps {
  show: boolean
  type: string
}

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