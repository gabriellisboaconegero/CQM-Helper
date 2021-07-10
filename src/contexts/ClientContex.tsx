import React, { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

type Client = {
  firstName1: string;
  lastName1: string;
  firstName2?: string;
  lastName2?: string;
  birth: number;
  address: string;
  phone: string;
  sessionOnline: boolean;
  sex: boolean;
  closed: boolean;
} | undefined;

export type ClientFirebaseData = {
  terapeutaId: string | undefined;
  timestamp: number;
  data: {
    name: {
      first: string;
      last: string;
      second: {
        first: string;
        last: string;
      },
    },
    sex: boolean;
    consult: {
      closed: boolean;
      online: boolean;
    },
    birth: number;
    phone: string;
    address: string;
  }
}

type ClientContextType = {
  client: Client;
  inSession: boolean;
  setClient: React.Dispatch<React.SetStateAction<Client>>
}

export const clientContext = createContext({} as ClientContextType)

export const ClientProvider: React.FC = ({children}) => {

  const [client, setClient] = useState<Client>(undefined);
  const [inSession, setInSession] = useState(false);
  const {user} = useAuth();

  useEffect(() => {
    database.ref(`users/${user?.id}`).on('value',async (changedData) => {
      const currentUserSessionRef = changedData.child('current');
      setInSession(currentUserSessionRef.exists());
      if (currentUserSessionRef.exists()){       
        const sessionRef = database.ref(`sessions/open/${currentUserSessionRef.val()}`);
        const {data}: ClientFirebaseData = (await sessionRef.get()).val();

        setClient({
          firstName1: data.name.first,
          lastName1: data.name.last,
          firstName2: data.name.second?.first,
          lastName2: data.name.second?.last,
          birth: data.birth,
          address: data.address,
          phone: data.phone,
          sessionOnline: data.consult.online,
          sex: data.sex,
          closed: data.consult.closed
        });
      }else{
        setClient(undefined);
      }
    });

    return () => {
      database.ref(`users/${user?.id}`).off();
    }
  }, [user]);

  return (
    <clientContext.Provider value={{
      client,
      inSession,
      setClient
    }}>
      {children}
    </clientContext.Provider>
  );
}