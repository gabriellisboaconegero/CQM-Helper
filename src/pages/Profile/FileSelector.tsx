import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { database } from "../../services/firebase";
import { convertDateAndTime, convertDate, getYearsOld } from "../../utils/dateConverter";

type SearchType = {
  clientId: string;
}

export const FileSelector: React.FC = (props) =>{

  const location = useLocation();
  const [clientTimestamp, setClientTimestamp] = useState(0);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    const search = (new URLSearchParams(location.search)).get('clientId');
    if (search){
      setClientId(search);
      database.ref(`/sessions/open/${search}/timestamp`).get().then(res => {
        setClientTimestamp(res.val() as number);
      });
    }    
  }, [location]);
  
  return (
    <div>
      {clientId !== '' && 
        <span>{convertDateAndTime(clientTimestamp)}</span> 
      }
      <div className="file-box">
        <span>Arraste aqui o arquivo</span>
      </div>
    </div>
  );
}