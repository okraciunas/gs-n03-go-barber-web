import React, { FunctionComponent } from 'react'
import { Form } from '@unform/web'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

const SignUp: FunctionComponent = () => {
  function handleSubmit(data: object): void {
    console.log(data)
  }

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
