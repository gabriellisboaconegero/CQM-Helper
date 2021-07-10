import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import { ClientPath } from "../../components/ClientPath";
import { PrivateComponent } from "../../components/PrivateComponent";

import {BsInfoCircle} from "react-icons/bs";
import {TiFlowChildren} from 'react-icons/ti';
import {FiSave} from "react-icons/fi";

import styles from "./styles.module.scss";
import { useClient } from "../../hooks/useClient";

import {fields} from './Fields';
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import { convertDateAndTime } from "../../utils/dateConverter";
import { ClientFirebaseData } from "../../contexts/ClientContex";

function fileNameParser(clientName: string, timestamp: number): string{
  let dateString = convertDateAndTime(timestamp);
  dateString =clientName + dateString.replace(':', 'h').replace('/', '-').replace('/', '-').concat('min');
  return dateString;
}

export const ClientEditor: React.FC = (props) => {

  const [viewPath, setViewPath] = useState(false);
  const {client} = useClient();
  const {user} = useAuth();

  async function saveCloseClient(){
    try{
      if (!window.confirm("O arquivo do consulente vai ser baixado na sua maquina e excluido do sistema,depois voce pode colocar esse arquivo na area de arquivos para vizualizar e editar os dados desse consulente, tem certeza disso?")) return 
      const clientId = (await database.ref(`/users/${user?.id}/current`).get()).val();
      const currentClientRef = database.ref(`/sessions/open/${clientId}`);
      const firebaseClient:ClientFirebaseData = (await currentClientRef.get()).val();
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(firebaseClient.data));
      var downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href",     dataStr);
      downloadAnchorNode.setAttribute("download", fileNameParser(firebaseClient.data.name.first,firebaseClient.timestamp)  + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();

      database.ref(`/sessions/open/${clientId}`).remove();
      await database.ref(`/users/${user?.id}/current`).remove();
    }catch(err){
      console.error(err);
    }
    
  }

  return (
    <PrivateComponent>
      <aside className={styles.clientEditor}>
        <nav>
          <button 
            className={viewPath? '': styles.active} 
            onClick={e => setViewPath(false)}
          > 
            <BsInfoCircle/> 
          </button>
          <button 
            className={!viewPath? '': styles.active} 
            onClick={e => setViewPath(true)}
          > 
            <TiFlowChildren /> 
          </button>
        </nav>
        {client? (
          <>
            <button onClick={e => saveCloseClient()}>
              <FiSave aria-label="Fechar e salvar consulente"/>
            </button>
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
        ): (
          <h2>Sem cliente no momento</h2>
        )}  
        <Button>Adicionar ao resumo</Button>
      </aside>
    </PrivateComponent>
  );
}