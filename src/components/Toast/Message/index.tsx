import React, { FunctionComponent } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Container } from './styles'

import { ToastData, useToast } from './../../../hooks/toast'

interface ToastProps {
  data: ToastData
}

const ToastMessage: FunctionComponent<ToastProps> = ({ data }) => {
  const { removeToast } = useToast()

  return (
    <Container type={data.type} hasMessage={!!data.message}>
      <FiAlertCircle />
      <div>
        <strong>{data.title}</strong>
        {data.message && <p>{data.message}</p>}
      </div>
      <button onClick={() => removeToast(data.id)} type="button">
        <FiXCircle />
      </button>
    </Container>
  )
}

export default ToastMessage
