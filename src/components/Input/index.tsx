import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ComponentType,
} from 'react'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: ComponentType<IconBaseProps>
}

const Input: FunctionComponent<Props> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
)

export default Input
