import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Button from "../../components/Button";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { convertDateAndTime } from "../../utils/dateConverter";
import { FileSelector } from "./FileSelector";
import { NewClient } from "./NewClient";
import { UserClient } from "./UserClient";

import styles from "./styles.module.scss"
import {BsFillPersonFill, BsEnvelopeFill} from "react-icons/bs";


type Sessions = Record<string, number>;

export const Profile: React.FC = (props) => {
  const match = useRouteMatch();
  const history = useHistory();
  const {user} = useAuth();

  const [userSessions, setUserSessions] = useState<Sessions>({} as Sessions);

  useEffect(() => {
    database.ref(`users/${user?.id}/sessions`).get().then((data) => {setUserSessions(data.val() as Sessions)});
  }, [user]);

  return (
    <main>
      <div className={styles.userInformation}>
        <div>
          <BsFillPersonFill />
          <span>{user?.name}</span>
        </div>
        <div>
          <BsEnvelopeFill />
          <span>{user?.email}</span>
        </div>
      </div>
      <Switch>
        <Route path={`${match.path}/selectfile`}>
          <FileSelector />
        </Route>
        <Route path={`${match.path}/client/:clientId`}>
          <UserClient />
        </Route>
        <Route path={`${match.path}/newclient`}>
          <NewClient />
        </Route>
        <Route path={`${match.path}/`}>
          <ol>
            {Object.entries(userSessions).map(([key, value]) => {
              return (
                <li key={key}><Link to={`${match.url}/selectfile?clientId=${key}`}>{convertDateAndTime(value)}</Link></li>
              );
            })}
          </ol>
        </Route>
      </Switch>
      <Button >Arquivos</Button>
      <Button onClick={e => history.push(`${match.url}/newclient`)}>Novo consulente</Button>
    </main>
  );
}