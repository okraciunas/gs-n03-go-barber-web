import React, { FunctionComponent, useRef, useCallback } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as validation from 'yup'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import { useAuth } from './../../hooks/auth'
import { useToast } from './../../hooks/toast'

import { ToastTypes } from './../../components/ToastContainer/Toast/styles'
import Button from './../../components/Button'
import Input from './../../components/Input'

import getValidationErrors from './../../utils/get-validation-errors'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = validation.object().shape({
          email: validation
            .string()
            .email('Digite um e-mail válido')
            .required('E-mail é um campo obrigatório'),
          password: validation
            .string()
            .required('Senha é um campo obrigatório'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await signIn(data.email, data.password)
      } catch (error) {
        if (error instanceof validation.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
        }

        addToast({
          type: ToastTypes.error,
          title: 'Erro na autenticação',
          message: 'Ocorreu um erro ao fazer login, cheque as credenciais.',
        })
      }
    },
    [signIn, addToast],
  )

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
