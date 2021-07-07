import React from "react";
import {
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Ferramenta } from "../../components/Ferramenta";

export const Ferramentas: React.FC = (props) => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Ferramentas</h1>
      <main>
        <ul>
          <li>
            <Link to={`${match.url}/12345/qqqqq`}>Ferramenta 1</Link>
          </li>
          <li>
            <Link to={`${match.url}/ff3ff/wwwww`}>Ferramenta 2</Link>
          </li>
          <li>
            <Link to={`${match.url}/314r5/fffff`}>Ferramenta 3</Link>
          </li>
          <li>
            <Link to={`${match.url}/11fff/hhhhh`}>Ferramenta 4</Link>
          </li>
          <li>
            <Link to={`${match.url}/fjdp2/jjjjj`}>Ferramenta 5</Link>
          </li>
        </ul>
      </main>
      <hr />
      <Route exact path={`${match.path}/:portalId/:ferramentaId`}>
        <Ferramenta />
      </Route>
      <Route exact path={match.path}>
        <p>Escolha uma Ferramenta</p>
      </Route>
    </div>
  );
};
