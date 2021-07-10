type EditorField = {
  type: string;
  placeholder?: string;
  id: string;
  name?: string;
  value?: string;
  pattern?: string;
  label: string;
}

export const fields:EditorField[] = [
  {
    label: "Nome",
    type: 'text',
    placeholder: 'Nome do cliente',
    id: 'firstName1',
  },
  {
    label: "Sobrenome",
    type: 'text',
    placeholder: 'Sobrenome do cliente',
    id: 'lastName1',
  },
  {
    label: "Segundo nome",
    type: 'text',
    placeholder: 'Segundo nome do cliente',
    id: 'firstName2',
  },
  {
    label: "Segundo sobrenome",
    type: 'text',
    placeholder: 'Segundo sobrenome do cliente',
    id: 'lastName2',
  },
  {
    label: "Mulher",
    id: 'fem',
    type: 'radio',
    name: 'sex',
    value: 'false',
  },
  {
    label: "Homem",
    id: 'masc',
    type: 'radio',
    name: 'sex',
    value: 'true',
  },
  {
    label: "Data de nascimento",
    type: 'date',
    id: 'birth',
  },
  {
    label: "Endereço",
    type: 'text',
    placeholder: "Endereço",
    id: 'address',
  },
  {
    label: "Telefone",
    type: 'tel',
    pattern: "9[0-9]{8}",
    id: 'phone',
  },
  {
    label: "Presencial",
    id: 'presencial',
    type: 'radio',
    name: 'sessionOnline',
    value: 'false',
  },
  {
    label: "Online",
    id: 'online',
    type: 'radio',
    name: 'sessionOnline',
    value: 'true',
  },
];
