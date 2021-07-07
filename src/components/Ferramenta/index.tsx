import React from "react";
import { Link, useParams } from "react-router-dom";
import { Decreto } from "../Decreto";

type ParamsProps = {
  portalId: string;
  ferramentaId: string;
}

export const Ferramenta: React.FC = (props) => {

  const params = useParams<ParamsProps>();

  return(
    <footer>
      <span><strong>Id: </strong>{params.ferramentaId}</span>
      <img src="" alt="Ferramenta" />
      <table>
        <tr>
          <td>id/atributos</td>
          <td>alguma coisa</td>
          <td>outra coisa</td>
          <td>aleatorio</td>
        </tr>
        <tr>
          <td>1</td>
          <td>pedro</td>
          <td>melancia</td>
          <td>aleatorio cell 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>lucas</td>
          <td>mamão</td>
          <td>aleatorio cell 2</td>
        </tr>
      </table>
      <Decreto />
      <Link to={`/portais/${params.portalId}`}>
        <img src="" alt="Portal da ferramenta" />
      </Link>
    </footer>
  );
}