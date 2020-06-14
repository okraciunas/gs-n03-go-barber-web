import React, { ComponentType, FunctionComponent } from 'react'
import {
  Route as RouterDOMRoute,
  RouteProps as RouterDOMRouteProps,
  Redirect,
} from 'react-router-dom'

import { useAuth } from './../hooks/auth'

interface RouteProps extends RouterDOMRouteProps {
  isPrivate?: boolean
  component: ComponentType
}

const Route: FunctionComponent<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth()

  return (
    <RouterDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        )
      }}
    />
  )
}

export default Route
