import React, {
  FunctionComponent,
  createContext,
  useCallback,
  useContext,
} from 'react'

import ToastContainer from './../components/ToastContainer'

interface ToastContextData {
  addToast(): void
  removeToast(): void
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData)

export const ToastProvider: FunctionComponent = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast')
  }, [])

  const removeToast = useCallback(() => {
    console.log('removeToast')
  }, [])

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast(): ToastContextData {
  const context = useContext(ToastContext)

  if (context) return context

  throw new Error('useToast must be use within a ToastProvider')
}
