import React, { FunctionComponent } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { ToastMessage } from './../../hooks/toast'
import { Container, Toast } from './styles'

import { useToast } from './../../hooks/toast'

interface ToastContainerProps {
  toasts: ToastMessage[]
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  const { removeToast } = useToast()

  return (
    <Container>
      {toasts.map(toast => (
        <Toast key={toast.id} type={toast.type} hasMessage={!!toast.message}>
          <FiAlertCircle />
          <div>
            <strong>{toast.title}</strong>
            {toast.message && <p>{toast.message}</p>}
          </div>
          <button onClick={() => removeToast(toast.id)} type="button">
            <FiXCircle />
          </button>
        </Toast>
      ))}
    </Container>
  )
}

export default ToastContainer
