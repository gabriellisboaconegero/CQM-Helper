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
import { ClientEditor } from './tabs/ClientEditor';
import { ClientProvider } from './contexts/ClientContex';

import './styles/global.scss';
import './styles/app.scss';
import { Main } from './tabs/Main';

const App: React.FC = (props) => {
  return (
    <AuthProvider>
      <ClientProvider>
        <Router>
          <div className="app">
            <SideMenu />
            <Switch>
              <Route path="/login" >
                <Main>
                  <Login />
                </Main>
              </Route>
              <PrivateRoute path="/portais">
                <Main>
                  <Portais />
                </Main>
              </PrivateRoute>
              <PrivateRoute path="/ferramentas">
                <Main>
                  <Ferramentas />
                </Main>
              </PrivateRoute>
              <PrivateRoute path="/decretos">
                <Main>
                  <Decretos />
                </Main>
              </PrivateRoute>
              <PrivateRoute path="/profile">
                <Main>
                  <Profile />
                </Main>
              </PrivateRoute>
              <Route>
                <Redirect to="/profile" />
              </Route>
            </Switch>
            <ClientEditor />
          </div>
        </Router>
      </ClientProvider>
    </AuthProvider>
  );
}

export default App;