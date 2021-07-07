import React from "react";
import {
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Portal } from "../../components/Portal";

export const Portais: React.FC = (props) => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Portais</h1>
      <main>
        <ul>
          <li>
            <Link to={`${match.url}/12345`}>Portal 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/ff3ff`}>Portal 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/314r5`}>Portal 3</Link>
          </li>
          <li>
            <Link to={`${match.url}/11fff`}>Portal 4</Link>
          </li>
          <li>
            <Link to={`${match.url}/fjdp2`}>Portal 5</Link>
          </li>
        </ul>
      </main>
      <hr />
      <Route exact path={`${match.path}/:portalId`}>
        <Portal />
      </Route>
      <Route exact path={match.path}>
        <footer>
          <p>Descricção e resumo do portal</p>
          <ul>
            <li>Ferramenta 1</li>
            <li>Ferramenta 2</li>
            <li>Ferramenta 3</li>
            <li>Ferramenta 4</li>
            <li>Ferramenta 5</li>
            <li>Ferramenta 6</li>
            <li>Ferramenta 7</li>
            <li>Ferramenta 8</li>
          </ul>
        </footer>
      </Route>
    </div>
  );
};
