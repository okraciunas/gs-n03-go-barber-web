import React, { FunctionComponent, useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import * as validation from 'yup'
import { Link, useHistory } from 'react-router-dom'

import logo from './../../assets/logo.svg'
import { Container, Content, ContentAnimated, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

import { createUser } from './../../services/api'
import { useToast } from './../../hooks/toast'
import ToastTypes from './../../components/Toast/ToastTypes'
import getValidationErrors from './../../utils/get-validation-errors'

interface SignUpFormData {
  name: string
  email: string
  password: string
}

const SignUp: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = validation.object().shape({
          name: validation.string().required('Nome é um campo obrigatório.'),
          email: validation
            .string()
            .email('Digite um e-mail válido')
            .required('E-mail é um campo obrigatório'),
          password: validation
            .string()
            .min(6, 'Mínimo de 6 caracteres para a senha.'),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        await createUser(data.name, data.email, data.password)

        addToast({
          type: ToastTypes.success,
          title: 'Cadastro realizado',
          message: 'Você já pode realizar seu login',
        })

        history.push('/')
      } catch (error) {
        if (error instanceof validation.ValidationError) {
          const errors = getValidationErrors(error)
          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: ToastTypes.error,
          title: 'Erro no cadastro',
          message: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
        })
      }
    },
    [addToast, history],
  )

  return (
    <Container>
      <Backgorund />

      <Content>
        <ContentAnimated>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="name" placeholder="Nome" icon={FiUser} />
            <Input name="email" placeholder="E-mail" icon={FiMail} />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              icon={FiLock}
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Criar conta
          </Link>
        </ContentAnimated>
      </Content>
    </Container>
  )
}

export default SignUp
