import React from "react";
import { useParams } from "react-router-dom";

type ParamsProps = {
  decretoId: string;
}

export const Decreto: React.FC = (props) => {

  const {decretoId} = useParams<ParamsProps>();

  return (
    <div>
      <p><strong>Id: </strong>{decretoId}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam animi dolorem ducimus perferendis aliquid possimus eius aut eos minima, corrupti aliquam incidunt officia excepturi provident labore quidem, voluptas facere magni reiciendis accusantium debitis? Harum quam iste delectus nostrum recusandae odio tenetur ex fuga, vero unde deserunt quasi omnis similique assumenda doloremque! Labore autem, qui id temporibus quaerat quo libero molestias dolorum iure quia nihil esse at sed, dolore minima aliquam animi! Tenetur repellendus nihil expedita laborum tempora dolores asperiores sint, ipsum in vel illum commodi nostrum aperiam corporis. Accusamus necessitatibus repellat minima accusantium, delectus totam nemo. Laudantium dolorum amet quos!</p>
    </div>
  );
}