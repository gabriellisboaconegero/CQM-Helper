import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { convertDate } from "../../utils/dateConverter";
import { NewClient } from "./NewClient";

type Sessions = Record<string, number>;

export const Profile: React.FC = (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  const {user} = useAuth();

  const [userSessions, setUserSessions] = useState<Sessions>({} as Sessions);

  useEffect(() => {
    database.ref(`users/${user?.id}/sessions`).get().then((data) => {setUserSessions(data.val() as Sessions)});
  }, []);

  return (
    <main>
      <div className="user-profile">
        <div className="user-informations">
          <img src="" alt="Avatar" />
          <p><strong>Nome:</strong> Erika</p>
          <p><strong>Email:</strong> erikanlisboa@gmail.com</p>
        </div>
        <Switch>
          <Route path={`${match.path}/selectfile`}></Route>
          <Route path={`${match.path}/client/:clientId`}></Route>
          <Route path={`${match.path}/newclient`}>
            <NewClient />
          </Route>
          <Route path={`${match.path}/`}>
            <ol>
              {Object.entries(userSessions).map(([key, value]) => {
                return (
                  <li key={key}><Link to={`${match.url}/selectfile?clientId=${key}`}>{convertDate(value)}</Link></li>
                );
              })}
            </ol>
          </Route>
        </Switch>
        <Button >Arquivos</Button>
        <Button onClick={e => history.push(`${match.url}/newclient`)}>Novo consulente</Button>
      </div>
    </main>
  );
}