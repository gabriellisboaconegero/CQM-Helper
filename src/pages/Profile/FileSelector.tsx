import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ClientFirebaseData } from "../../contexts/ClientContex";
import { useAuth } from "../../hooks/useAuth";
import { useClient } from "../../hooks/useClient";
import { database } from "../../services/firebase";
import { convertDateAndTime } from "../../utils/dateConverter";

export const FileSelector: React.FC = (props) =>{

  const location = useLocation();
  const [clientTimestamp, setClientTimestamp] = useState(0);
  const {inSession} = useClient();
  const {user} = useAuth();
  const history = useHistory();

  useEffect(() => {
    const query = (new URLSearchParams(location.search)).get('clientTimestamp');
    if (query){
      setClientTimestamp(Number(query));
    }    
  }, [location]);

  function handleFileRead(e: ChangeEvent<HTMLInputElement>){
    if (inSession){
      console.log("Ja tem um cliente");
      return;
    }
    if (window.FileReader && window.FileList && window.File){
      const files = e.target.files;
      if (!files || files.length <= 0 || !files[0].type.endsWith('json')) return
      const reader = new FileReader();
      reader.addEventListener('load', e => {
        if (typeof e.target?.result !== 'string') return;
        const loadedClientData:ClientFirebaseData = JSON.parse(e.target.result);
        const newSessionKey = database.ref().push().key;
        const updates: Record<string, any> = {};
        const timestamp = Date.now();
        updates[`sessions/all/${newSessionKey}`] = {
          terapeutaId: user?.id,
          timestamp
        }
        updates[`sessions/open/${newSessionKey}`] = {
          data: {
            ...loadedClientData
          },
          terapeutaId: user?.id,
          timestamp
        };
        updates[`users/${user?.id}/sessions/${newSessionKey}`] = timestamp;
        updates[`users/${user?.id}/current`] = newSessionKey;
        database.ref('/').update(updates);
        history.push(`/profile/client/${newSessionKey}`)
      });
      if (!e.target.files) return;
      reader.readAsText(e.target.files[0]);
    }
  }
  
  return (
    <div>
      {clientTimestamp !== 0 && 
        <span>{convertDateAndTime(clientTimestamp)}</span> 
      }
      <div className="file-box">
        <input 
          type="file" 
          accept=".json" 
          multiple={false} 
          onChange={handleFileRead} 
        />
      </div>
    </div>
  );
}