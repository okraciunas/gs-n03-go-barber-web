import React, { FunctionComponent } from 'react'
import { FiLogIn } from 'react-icons/fi'

import logo from './../../assets/logo.svg'
import { Container, Content, Backgorund } from './styles'

const SignIn: FunctionComponent = () => (
  <Container>
    <Content>
      <img src={logo} alt="" />

      <form>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
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
