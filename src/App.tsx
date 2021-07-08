import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import { AuthProvider } from './contexts/AuthProvider';
import { PrivateRoute } from './routes/PrivateRoute';

import Login from './pages/Login';
import { Portais } from './pages/Portais';
import { Ferramentas } from './pages/Ferramentas';
import { Profile } from './pages/Profile';
import SideMenu from './tabs/SideMenu';
import { Decretos } from './pages/Decretos';
import { Client } from './pages/Client';
import { ClientEditor } from './tabs/ClientEditor';
import { ClientProvider } from './contexts/ClientContex';

const App: React.FC = (props) => {
  return (
    <AuthProvider>
      <ClientProvider>
        <Router>
          <SideMenu />
          <Switch>
            <Route path="/login" >
              <Login />
            </Route>
            <PrivateRoute path="/clients/:clientId">
              <Client />
            </PrivateRoute>
            <PrivateRoute path="/portais">
              <Portais />
            </PrivateRoute>
            <PrivateRoute path="/ferramentas">
              <Ferramentas />
            </PrivateRoute>
            <PrivateRoute path="/decretos">
              <Decretos />
            </PrivateRoute>
            <PrivateRoute path="/profile">
              <Profile />
            </PrivateRoute>
            <Route>
              <Redirect to="/profile" />
            </Route>
          </Switch>
          <ClientEditor />
        </Router>
      </ClientProvider>
    </AuthProvider>
  );
}

export default App;