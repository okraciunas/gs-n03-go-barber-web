import React, {
  createContext,
  FunctionComponent,
  useCallback,
  useState,
} from 'react'

import api from './../services/api'

interface AuthContextData {
  user: object
  signIn(email: string, password: string): Promise<void>
}

interface AuthState {
  token: string
  user: object
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: FunctionComponent = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token')
    const user = localStorage.getItem('@GoBarber:user')

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { data } = await api.post('sessions', { email, password })

      localStorage.setItem('@GoBarber:token', data.token)
      localStorage.setItem('@GoBarber:user', JSON.stringify(data.user))

      setData({
        token: data.token,
        user: data.user,
      })
    } catch (error) {
      // todo
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
