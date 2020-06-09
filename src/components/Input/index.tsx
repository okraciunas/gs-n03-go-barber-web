import React, {
  FunctionComponent,
  InputHTMLAttributes,
  ComponentType,
  useRef,
  useEffect,
  useState,
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
  const [isFocused, setIsFocused] = useState(false)
  const { registerField, fieldName, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [registerField, fieldName])

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  )
}

export default Input
