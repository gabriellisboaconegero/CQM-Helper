import React from "react";
import Button from "../Button";
import { ClientPath } from "../ClientPath";
import { PrivateComponent } from "../PrivateComponent";

export const ClientEditor: React.FC = (props) => {
  return (
    <PrivateComponent>
      <aside>
        <form>
          <label htmlFor="client-first-name">Nome:</label>
          <input 
            type="text"
            id="client-first-name"
            placeholder="Nome do cliente"
          />
          <label htmlFor="client-last-name">Sobrenome:</label>
          <input 
            type="text"
            id="client-last-name"
            placeholder="Sobrenome do cliente"
          />

          <label htmlFor="client-second-first-name">Segundo nome:</label>
          <input 
            type="text"
            id="client-second-first-name"
          />
          <label htmlFor="client-second-last-name">Segundo sobrenome:</label>
          <input 
            type="text"
            id="client-second-last-name"
          />

          <input type="radio" name="client-sex" id="fem" value="false" />
          <label htmlFor="fem">Feminino</label>

          <input type="radio" name="client-sex" id="masc" value="true" />
          <label htmlFor="masc">Masculino</label>

          <label htmlFor="client-age">Data de nascimento: </label>
          <input type="date" id="client-age" />

          <label htmlFor="clinet-address">Endereço: </label>
          <input type="text" placeholder="Endereço" id="client-address" />

          <label htmlFor="client-phone">Telefone: </label>
          <input type="tel" id="cliet-phone" pattern="9[0-9]{8}" />

          <input type="radio" name="session-type" id="session-online" value="true" />
          <label htmlFor="session-online">Online</label>

          <input type="radio" name="session-type" id="session-presencial" value="false" />
          <label htmlFor="session-presencial">Presencial</label>

          <ClientPath path="path" />

          <Button>Adicionar ao resumo</Button>
        </form>
      </aside>
    </PrivateComponent>
  );
}