import React from "react";
import { Link, useParams } from "react-router-dom";

type ParamsProps = {
  portalId: string;
}

export const Portal: React.FC = (props) => {

  const {portalId} = useParams<ParamsProps>();

  return (
    <div>
      <p><strong>Id: </strong>{portalId}</p>
      <p>Portal total description</p>
      <img src="" alt="Portal img" />
      <ul>
        <li>
          <Link to={`/ferramentas/${portalId}/qqqqq`}>Ferramenta 1</Link>
        </li>
      </ul>
    </div>
  );
}