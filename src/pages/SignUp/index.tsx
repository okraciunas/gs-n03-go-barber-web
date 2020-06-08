import React, { FunctionComponent } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

const SignUp: FunctionComponent = () => (
  <Container>
    <Backgorund />

    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
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
      </form>

      <a href="signin">
        <FiArrowLeft />
        Criar conta
      </a>
    </Content>
  </Container>
)

export default SignUp
