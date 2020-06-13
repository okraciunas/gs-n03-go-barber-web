import React, { FunctionComponent } from 'react'

import GlobalStyle from './styles/global'
import AppProvider from './hooks/'
import SignIn from './pages/SignIn'

const App: FunctionComponent = () => (
  <>
    <GlobalStyle />
    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
)

export default App
