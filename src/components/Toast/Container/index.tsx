import React, { FunctionComponent } from 'react'
import { useTransition } from 'react-spring'

import ToastMessage from './../Message'

import { ToastData } from './../../../hooks/toast'
import { Container } from './styles'

interface ToastContainerProps {
  toasts: ToastData[]
}

const ToastContainer: FunctionComponent<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransition = useTransition(toasts, toast => toast.id, {
    from: { right: '-120%' },
    enter: { right: '0%' },
    leave: { right: '-120%' },
  })

  return (
    <Container>
      {toastsWithTransition.map(({ key, item, props }) => (
        <ToastMessage key={key} data={item} style={props} />
      ))}
    </Container>
  )
}

export default ToastContainer
