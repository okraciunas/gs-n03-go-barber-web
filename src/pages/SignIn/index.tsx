import React, { FunctionComponent, useRef, useCallback } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as validation from 'yup'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

import getValidationErrors from './../../utils/get-validation-errors'

const SignIn: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = validation.object().shape({
        email: validation
          .string()
          .email('Digite um e-mail válido')
          .required('E-mail é um campo obrigatório'),
        password: validation.string().required('Senha é um campo obrigatório'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })
    } catch (error) {
      const errors = getValidationErrors(error)
      formRef.current?.setErrors(errors)
    }
  }, [])

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="signup">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Backgorund />
    </Container>
  )
}

export default SignIn
