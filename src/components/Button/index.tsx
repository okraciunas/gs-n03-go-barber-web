import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'

import { Container } from './styles'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

const Button: FunctionComponent<Props> = props => (
  <Container {...props}>{props.children}</Container>
)

export default Button
