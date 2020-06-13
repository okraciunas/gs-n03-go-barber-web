import React, { FunctionComponent } from 'react'
import { FiAlertCircle, FiXCircle } from 'react-icons/fi'

import { Container, Toast, ToastTypes } from './styles'

const ToastContainer: FunctionComponent = () => {
  return (
    <Container>
      <Toast hasMessage>
        <FiAlertCircle />
        <div>
          <strong>Informação</strong>
          <p>Mensagem de informação</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast type={ToastTypes.success} hasMessage={false}>
        <FiAlertCircle />
        <div>
          <strong>Sucesso</strong>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>

      <Toast type={ToastTypes.error} hasMessage>
        <FiAlertCircle />
        <div>
          <strong>Erro</strong>
          <p>Mensagem de erro</p>
        </div>
        <button type="button">
          <FiXCircle />
        </button>
      </Toast>
    </Container>
  )
}

export default ToastContainer
