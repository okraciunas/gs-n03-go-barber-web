import React, { FunctionComponent } from 'react'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import AppProvider from './hooks/'
import Routes from './routes'

const App: FunctionComponent = () => (
  <BrowserRouter>
    <GlobalStyle />
    <AppProvider>
      <Routes />
    </AppProvider>
  </BrowserRouter>
)

export default App
