import React, { FunctionComponent } from 'react'

import { AuthProvider } from './hooks/AuthContext'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'

const App: FunctionComponent = () => (
  <>
    <GlobalStyle />
    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
)

export default App
