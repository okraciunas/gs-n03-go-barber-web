import React, { FunctionComponent } from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './../pages/SignIn'
import SignUp from './../pages/SignUp'

const Routes: FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
)

export default Routes
