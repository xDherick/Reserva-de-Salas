📚 Sistema de Reserva de Salas

Um sistema simples e eficiente para gerenciar a reserva e liberação de salas em um ambiente acadêmico ou corporativo. Permite visualizar salas disponíveis, realizar reservas, liberar salas e acompanhar suas reservas futuras.

🚀 Funcionalidades

✅ Listagem de Salas:

Exibe todas as salas organizadas por bloco.

Mostra se a sala está disponível ou ocupada.

✅ Reserva e Liberação de Salas:

Permite reservar uma sala informando bloco, sala, data e horário.

Possibilidade de liberar uma sala já ocupada.

Validação de conflitos de horário.

✅ Gerenciamento de Reservas:

Visualize suas reservas futuras.

Cancele reservas, se necessário.

✅ Filtros Dinâmicos:

Filtre as salas por bloco para facilitar a busca.

🛠️ Tecnologias Utilizadas

React + TypeScript: Componentização e tipagem segura.

CSS Modules: Estilização isolada e organizada.

Git e GitHub: Controle de versão e hospedagem do código.

📂 Estrutura do Projeto

reserva-salas/
├── public/
├── src/
│   ├── components/
│   │    ├── Header.tsx            // Cabeçalho do sistema
│   │    ├── Filter.tsx            // Filtro por bloco
│   │    ├── RoomItem.tsx          // Item de sala individual
│   │    ├── RoomList.tsx          // Lista de salas
│   │    └── ReservationForm.tsx   // Formulário de reserva
│   ├── utils/
│   │    └── data.ts               // Dados das salas
│   └── App.tsx                    // Componente principal
└── package.json                   // Configurações do projeto

📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js: Download

Git: Download

🔧 Como Executar o Projeto

Clone o repositório:

$ git clone https://github.com/seu-usuario/reserva-salas.git
$ cd reserva-salas

Instale as dependências:

$ npm install

Inicie o servidor de desenvolvimento:

$ npm run dev

Acesse no navegador:

http://localhost:5173

📘 Como Contribuir

Contribuições são bem-vindas! Para contribuir:

Fork o repositório.

Crie uma branch para sua feature:

git checkout -b minha-feature

Faça suas alterações e commite:

git commit -m "Adiciona nova feature"

Envie para o GitHub:

git push origin minha-feature

Abra um Pull Request.

📝 Licença

Este projeto é de uso livre para fins educacionais.

💻 Desenvolvido por Dherick

