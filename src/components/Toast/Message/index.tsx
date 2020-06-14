import React, { FunctionComponent, useEffect } from 'react'
import { FiInfo, FiCheckCircle, FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Container } from './styles'

import { ToastData, useToast } from './../../../hooks/toast'

interface ToastProps {
  data: ToastData
}

const typeIcon = {
  info: <FiInfo size={24} />,
  success: <FiCheckCircle size={24} />,
  error: <FiAlertCircle size={24} />,
}

const ToastMessage: FunctionComponent<ToastProps> = ({ data }) => {
  const { removeToast } = useToast()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(data.id)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [removeToast, data.id])

  return (
    <Container type={data.type} hasMessage={!!data.message}>
      {typeIcon[data.type || 'info']}
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
