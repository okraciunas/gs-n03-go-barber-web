import React, { FunctionComponent, useCallback } from 'react'
import { Form } from '@unform/web'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'
import * as validation from 'yup'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

const SignUp: FunctionComponent = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
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
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Backgorund />

      <Content>
        <img src={logo} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
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

        <a href="signin">
          <FiArrowLeft />
          Criar conta
        </a>
      </Content>
    </Container>
  )
}

export default SignUp
