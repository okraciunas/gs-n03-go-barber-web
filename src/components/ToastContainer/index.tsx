import React, { FunctionComponent } from 'react'

import Toast from './Toast'

import { ToastMessage } from './../../hooks/toast'
import { Container } from './styles'

interface ToastContainerProps {
  toasts: ToastMessage[]
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  return (
    <Container>
      {toasts.map(toast => (
        <Toast key={toast.id} data={toast} />
      ))}
    </Container>
  )
}

export default ToastContainer
