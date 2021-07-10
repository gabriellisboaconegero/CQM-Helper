import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import { PrivateComponent } from "../../components/PrivateComponent";
import { useAuth } from "../../hooks/useAuth";
import { useClient } from "../../hooks/useClient";
import { database } from "../../services/firebase";

type UpdatesType = Record<string, any>;

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
}

export const NewClient: React.FC = (props) => {

  const [localClient, setLocalClient] = useState<Client>({} as Client);
  const {inSession} = useClient();
  const history = useHistory();
  const {user} = useAuth();

  function handleChange(e: ChangeEvent<HTMLInputElement>){
    setLocalClient(prev => {
      if (e.target.name === 'birth'){
        return {
          ...prev,
          birth: (new Date(e.target.value)).getTime()
        }
      }
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    });
  }

  function createNewClient(e: FormEvent){
    e.preventDefault();

    if (inSession){
      return false;
    }

    try{
      const newSessionKey = database.ref('sessions').push().key;
      const updates: UpdatesType = {};
  
      updates[`/sessions/all/${newSessionKey}`] = {
        terapeutaId: user?.id,
        timestamp: Date.now()
      }
      updates[`/sessions/open/${newSessionKey}`] = {
        terapeutaId: user?.id,
        timestamp: Date.now(),
        data: {
          name: {
            first: localClient.firstName1,
            last: localClient.lastName1,
            second: {
              first: localClient.firstName2 ?? '',
              last: localClient.lastName2 ?? ''
            },
          },
          sex: localClient.sex,
          consult: {
            closed: false,
            online: Boolean(localClient.sessionOnline),
          },
          birth: localClient.birth,
          phone: localClient.phone,
          address: localClient.address
        }
      };;
      updates[`/users/${user?.id}/sessions/${newSessionKey}`] = Date.now();
      updates[`/users/${user?.id}/current`] = newSessionKey;
  
      database.ref().update(updates);
      history.push(`/profile/client/${newSessionKey}`);
    } catch (err){
      console.error(err);
      alert('Não foi possivel cadastrar');
    }
  }

  return (
    <PrivateComponent>
      <aside>
        <form onSubmit={createNewClient}>
          <label htmlFor="firstName1">Nome:</label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="text"
            id="firstName1"
            name="firstName1"
            placeholder="Nome do cliente"
            required
          />
          <label htmlFor="lastName1">Sobrenome:</label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="text"
            id="lastName1"
            name="lastName1"
            placeholder="Sobrenome do cliente"
            required
          />

          <label htmlFor="firstName2">Segundo nome:</label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="text"
            id="firstName2"
            name="firstName2"
          />
          <label htmlFor="lastName2">Segundo sobrenome:</label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="text"
            id="lastName2"
            name="lastName2"
          />

          <input onChange={handleChange}
            disabled={inSession}
            type="radio"
            name="sex"
            id="fem"
            value="false"
            required
          />
          <label htmlFor="fem">Feminino</label>

          <input onChange={handleChange}
            disabled={inSession}
            type="radio" 
            name="sex" 
            id="masc" 
            value="true"
            required 
          />
          <label htmlFor="masc">Masculino</label>

          <label htmlFor="client-age">Data de nascimento: </label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="date" 
            id="birth" 
            name="birth"
            required
          />

          <label htmlFor="clinet-address">Endereço: </label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="text" 
            placeholder="Endereço" 
            id="address" 
            name="address"
            required
          />

          <label htmlFor="client-phone">Telefone: </label>
          <input onChange={handleChange} 
            disabled={inSession}
            type="tel" 
            id="phone" 
            name="phone"
            pattern="9[0-9]{8}" 
            required
          />

          <input onChange={handleChange} 
            disabled={inSession}
            type="radio" 
            name="sessionOnline" 
            id="session-online" 
            value="true"
            required 
          />
          <label htmlFor="session-online">Online</label>

          <input onChange={handleChange} 
            disabled={inSession}
            type="radio" 
            name="sessionOnline" 
            id="session-presencial" 
            value="false" 
            required
          />
          <label htmlFor="session-presencial">Presencial</label>

          <Button disabled={inSession} type="submit">Adicionar</Button>
        </form>
      </aside>
    </PrivateComponent>
  );
}