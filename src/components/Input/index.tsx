import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ComponentType,
  useRef,
  useEffect,
} from 'react'
import { useField } from '@unform/core'
import { IconBaseProps } from 'react-icons'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: ComponentType<IconBaseProps>
}

const Input: FunctionComponent<Props> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef(null)
  const { registerField, fieldName, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [registerField, fieldName])

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={inputRef} {...rest} />
    </Container>
  )
}

export default Input
