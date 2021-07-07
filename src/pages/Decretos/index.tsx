import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { Decreto } from "../../components/Decreto";
import { useAuth } from "../../hooks/useAuth";

export const Decretos: React.FC = (props) => {

  const match = useRouteMatch();
  const {user} = useAuth();

  return (
    <div>
      <h1>Decretos</h1>
      <ul>
        <li><Link to={`${match.url}/12345`}>Decreto de inicio</Link></li>
        <li><Link to={`${match.url}/12346`}>Decreto de fim</Link></li>
        <li><Link to={`${match.url}/12347`}>Decreto de lançamento de portal</Link></li>
        <li><Link to={`${match.url}/12348`}>Decreto de ancoragem</Link></li>
        <li><Link to={`${match.url}/12349`}>Decreto de protocolo de proteção</Link></li>
      </ul>
      <Route exact path={`${match.path}/:decretoId`}>
        <Decreto />
      </Route>
      <Route exact path={match.path}>
        <p>Ativação da mesa pelo(a) {user?.name}</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias labore perferendis perspiciatis, sit deleniti doloribus corrupti dicta, doloremque minima explicabo ad et. Esse, soluta fugit. Deserunt ipsam autem molestiae, aperiam aliquam, sed eos, illum ratione labore nisi quos veniam. Ipsa, sapiente amet. Expedita totam, modi fugit {user?.name}, iste nostrum velit adipisci cupiditate corrupti veritatis dolore recusandae repellat suscipit! Dolores consequuntur aliquid eius voluptates minus earum. Sunt earum, dignissimos praesentium dolores obcaecati molestiae repellat porro aperiam iste hic placeat atque delectus ab, in ea deserunt esse, perferendis provident dicta modi eveniet ad. Ea, quia tenetur. Repudiandae magnam temporibus nesciunt corrupti assumenda.</p>
      </Route>
    </div>
  );
}