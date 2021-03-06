import React, {
  FunctionComponent,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { uuid } from 'uuidv4'

import ToastTypes from './../components/Toast/ToastTypes'
import ToastContainer from './../components/Toast/Container'

export interface ToastData {
  id: string
  type?: ToastTypes
  title: string
  message?: string
}

interface ToastContextData {
  addToast(message: Omit<ToastData, 'id'>): void
  removeToast(id: string): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: FunctionComponent = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast = useCallback((message: Omit<ToastData, 'id'>) => {
    const id = uuid()
    const toast = { id, ...message }

    setToasts(state => [...state, toast])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts(state => state.filter(toast => toast.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (context) return context

  throw new Error('useToast must be use within a ToastProvider')
}
