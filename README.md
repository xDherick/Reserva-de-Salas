📚 Sistema de Reserva de Salas

Este projeto é uma aplicação React para gerenciamento de reservas de salas, permitindo que os usuários façam, visualizem e cancelem reservas de maneira eficiente.

🚀 Funcionalidades

Reservar Salas: Permite reservar salas disponíveis selecionando bloco, nome da sala, data e horário.

Cancelar Reservas: Permite liberar uma sala ocupada.

Filtragem por Bloco: Filtra as salas por bloco para facilitar a busca.

Visualizar Minhas Reservas: Lista todas as reservas feitas pelo usuário, permitindo o cancelamento.

🛠️ Tecnologias Utilizadas

React + TypeScript: Desenvolvimento da interface interativa e tipagem segura.

CSS Modules: Estilização encapsulada para evitar conflitos.

📂 Estrutura do Projeto

reserva-salas/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Filter.tsx
│   │   ├── Header.tsx
│   │   ├── ReservationForm.tsx
│   │   ├── RoomItem.tsx
│   │   └── RoomList.tsx
│   ├── utils/
│   │   └── data.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── App.module.css
└── package.json

📌 Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

Node.js

Git

📥 Instalação

Clone este repositório:

git clone https://github.com/seu-usuario/reserva-salas.git

Acesse o diretório do projeto:

cd reserva-salas

Instale as dependências:

npm install

▶️ Executando a Aplicação

Para iniciar a aplicação em modo de desenvolvimento:

npm start

Acesse no navegador: http://localhost:3000

📊 Como Usar

Reservar uma Sala:

Escolha o bloco e a sala desejada.

Informe a data e o horário.

Clique em "Reservar".

Visualizar Minhas Reservas:

Consulte todas as suas reservas futuras.

Clique em "Liberar" para cancelar uma reserva.



Feito por Dherick!
