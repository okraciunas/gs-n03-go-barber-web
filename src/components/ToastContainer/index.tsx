import React, { FunctionComponent } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { ToastMessage } from './../../hooks/toast'
import { Container, Toast } from './styles'

interface ToastContainerProps {
  toasts: ToastMessage[]
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  return (
    <Container>
      {toasts.map(toast => (
        <Toast key={toast.id} type={toast.type} hasMessage={!!toast.message}>
          <FiAlertCircle />
          <div>
            <strong>{toast.title}</strong>
            {toast.message && <p>{toast.message}</p>}
          </div>
          <button type="button">
            <FiXCircle />
          </button>
        </Toast>
      ))}
    </Container>
  )
}

export default ToastContainer
