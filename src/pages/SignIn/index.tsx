import React, { FunctionComponent } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

import Button from './../../components/Button'
import Input from './../../components/Input'

const SignIn: FunctionComponent = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />

      <form>
        <Input name="email" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="signup">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Backgorund />
  </Container>
)

export default SignIn
