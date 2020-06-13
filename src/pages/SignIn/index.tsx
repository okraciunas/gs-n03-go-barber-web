import React, { FunctionComponent, useRef, useCallback } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as validation from 'yup'

import { useAuth } from './../../hooks/auth'
import { useToast } from './../../hooks/toast'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

import getValidationErrors from './../../utils/get-validation-errors'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)

  const auth = useAuth()
  const toast = useToast()

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

        auth.signIn(data.email, data.password)
      } catch (error) {
        if (error instanceof validation.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)
        }

        toast.addToast()
      }
    },
    [auth, toast],
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
