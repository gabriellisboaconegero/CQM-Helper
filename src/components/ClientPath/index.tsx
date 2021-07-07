import React from "react";

type ClientPathProps = {
  path: string;
}

export const ClientPath: React.FC<ClientPathProps> = ({path, ...props}) =>{
  return (
    <div>
      {path}
    </div>
  );
}