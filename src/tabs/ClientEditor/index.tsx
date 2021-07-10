import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import { ClientPath } from "../../components/ClientPath";
import { PrivateComponent } from "../../components/PrivateComponent";

import {BsInfoCircle} from "react-icons/bs";
import {TiFlowChildren} from 'react-icons/ti';

import styles from "./styles.module.scss";
import { useClient } from "../../hooks/useClient";

import {fields} from './Fields';

export const ClientEditor: React.FC = (props) => {

  const [viewPath, setViewPath] = useState(false);
  const {client} = useClient();

  return (
    <PrivateComponent>
      <aside className={styles.clientEditor}>
        <nav>
          <button className={viewPath? '': styles.active} onClick={e => setViewPath(false)}> <BsInfoCircle /> </button>
          <button className={!viewPath? '': styles.active} onClick={e => setViewPath(true)}> <TiFlowChildren /> </button>
        </nav>
        {client.firstName1 && (
          <>
            {viewPath? <ClientPath path="path" /> : (
            <form>
              {fields.map(({label, ...props}, id) => {
                const Inpt = <input {...props} />;
                const Lbl = <label htmlFor={props.id}>{label}</label>
                return props.type === 'radio'? (
                  <div key={`${id}_${props.id}`}>
                    {Inpt}
                    {Lbl}
                  </div>
                ) : (
                  <div key={`${id}_${props.id}`}>
                    {Lbl}
                    {Inpt}
                  </div>
                )}
              )}
            </form>
            )}
          </>
        )}  
        <Button>Adicionar ao resumo</Button>
      </aside>
    </PrivateComponent>
  );
}