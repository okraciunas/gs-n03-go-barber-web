import styled from 'styled-components'
import { shade } from 'polished'

import background from './../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      padding: 16px;
      color: #f4ede8;
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      height: 56px;

      color: #312e38;
      font-weight: 500;

      margin-top: 16px;
      padding: 0 16px;

      background: #ff9000;
      border: 0;
      border-radius: 10px;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;

    margin-top: 24px;

    color: #ff9000;
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`

export const Backgorund = styled.div`
  flex: 1;

  background: url(${background}) no-repeat center;
  background-size: cover;
`
