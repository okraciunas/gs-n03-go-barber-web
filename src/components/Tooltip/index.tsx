import React, { FunctionComponent } from 'react'

import { Container } from './styles'

interface Props {
  message: string
  className?: string
}

const Tooltip: FunctionComponent<Props> = ({
  message,
  className,
  children,
}) => (
  <Container className={className}>
    {children}
    <span>{message}</span>
  </Container>
)

export default Tooltip
