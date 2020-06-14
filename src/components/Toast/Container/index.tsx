import React, { FunctionComponent } from 'react'

import ToastMessage from './../Message'

import { ToastData } from './../../../hooks/toast'
import { Container } from './styles'

interface ToastContainerProps {
  toasts: ToastData[]
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  return (
    <Container>
      {toasts.map(toast => (
        <ToastMessage key={toast.id} data={toast} />
      ))}
    </Container>
  )
}

export default ToastContainer
