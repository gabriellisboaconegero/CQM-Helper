import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { EditSvg } from "../../assets/EditSvg";
import { useClient } from "../../hooks/useClient";
import { database } from "../../services/firebase";
import { convertDateAndTime, convertDate, getYearsOld } from "../../utils/dateConverter";

type ParamsType = {
  clientId: string;
}

export const UserClient: React.FC = (props) =>{

  const params = useParams<ParamsType>();
  const {client} = useClient();
  const [clientTimestamp, setClientTimestamp] = useState(0);
  const [edditing, setEdditing] = useState(false);

  useEffect(() => {
    database.ref(`/sessions/open/${params.clientId}/timestamp`).get().then(res => {
      setClientTimestamp(res.val() as number);
    });
  }, [params]);
  
  return (
    <div>
      <h1>{clientTimestamp > 0 && convertDateAndTime(clientTimestamp)}</h1>
      <div className="client-ficha">
        {!client.closed && 
          <button onClick={e => setEdditing(true)}>
            <EditSvg />
          </button>
        }
        <span>{client.firstName1}</span>
        <span>{convertDate(client.birth)}</span>
        <br />
        <span>{getYearsOld(client.birth)}</span>
        <br />
        <span>{client.sex? "M": "F"}</span>
        <div className="client-session-closed">
          <input type="checkbox" id="client-session-closed" checked={client.closed} />
          <label htmlFor="client-session-closed">Sessão finalizada</label>
        </div>
        <div className="session-type">
          <input 
            type="radio" 
            name="client-session-type" 
            id="client-session-presencial" 
            checked={!client.sessionOnline}
          />
          <label htmlFor="client-session-presencial">Prensencial</label>
          <input 
            type="radio" 
            name="client-session-type" 
            id="client-session-online"
            checked={client.sessionOnline} 
          />
          <label htmlFor="client-session-online">Online</label>
        </div>
      </div>
    </div>
  );
}