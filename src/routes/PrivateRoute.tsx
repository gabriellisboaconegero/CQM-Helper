import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";



export const PrivateRoute: React.FC<RouteProps> = ({children, ...props}) => {
  const {user} = useAuth();
  return (
    <Route 
      {...props} 
      render={() => 
        user ? children : <Redirect to="/login" />
      }
    >
    </Route>
  );
}