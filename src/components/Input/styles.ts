import styled, { css } from 'styled-components'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 16px;
  color: #666360;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  display: flex;
  align-items: center;

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`
