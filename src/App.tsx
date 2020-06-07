import React, { FunctionComponent } from 'react'

import GlobalStyle from './styles/global'
import SignIn from './pages/SignIn'

const App: FunctionComponent = () => (
  <>
    <GlobalStyle />
    <SignIn />
  </>
)

export default App
