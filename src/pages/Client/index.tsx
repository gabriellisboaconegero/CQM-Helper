import React from "react";
import { Link, useParams } from "react-router-dom";

type ParamsProps = {
  clientId: string;
}

export const Client: React.FC = (props) => {

  const {clientId} = useParams<ParamsProps>();

  return (
    <div>
      <span><strong>Id: </strong>{clientId}</span>
      <p><strong>Nome: </strong>Pedro</p>
      <p><strong>Idade: </strong>28</p>
      <p><strong>Portais: </strong><Link to="/portais/12345">Interior</Link></p>
      <ul>
        <li><strong>Decretos</strong></li>
        <li><Link to="/ferramentas/12345/qqqqq">Cromoterapia</Link> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni asperiores temporibus accusantium numquam nulla incidunt in, totam facere tenetur.</li>
        <li><Link to="/ferramentas/ff3ff/wwwww">Outra ferramenta</Link> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni asperiores temporibus accusantium numquam nulla incidunt in, totam facere tenetur.</li>
        <li><Link to="/ferramentas/314r5/fffff">oponopono</Link> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni asperiores temporibus accusantium numquam nulla incidunt in, totam facere tenetur.</li>
        <li><Link to="/ferramentas/11fff/hhhhh">Amem</Link> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni asperiores temporibus accusantium numquam nulla incidunt in, totam facere tenetur.</li>
        <li><Link to="/ferramentas/fjdp2/jjjjj">Bruxaria braba</Link> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis magni asperiores temporibus accusantium numquam nulla incidunt in, totam facere tenetur.</li>
      </ul>

    </div>
  );
}