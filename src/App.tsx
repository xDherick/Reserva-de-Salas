import React, { useState } from "react";
import styles from "./App.module.css";

interface Sala {
  id: number;
  bloco: string;
  nome: string;
  ocupada: boolean;
}

interface Reserva {
  id: number;
  sala: Sala;
  data: string;
  hora: string;
}

const salasIniciais: Sala[] = [
  { id: 12, bloco: "A", nome: "Sala A 209", ocupada: false },
  { id: 13, bloco: "A", nome: "Sala A 210", ocupada: false },
  { id: 14, bloco: "A", nome: "Sala A 213", ocupada: false },

  { id: 8, bloco: "B", nome: "Laboratório 09 - Sala B1 301", ocupada: false },
  { id: 9, bloco: "B", nome: "Laboratório 10 - Sala B1 302", ocupada: false },
  { id: 15, bloco: "B", nome: "Sala B 502", ocupada: false },
  { id: 20, bloco: "B", nome: "Sala B 312", ocupada: false },
  { id: 25, bloco: "B", nome: "Sala B 514", ocupada: false },

  { id: 3, bloco: "C", nome: "Laboratório 04 - Sala C403", ocupada: false },
  { id: 26, bloco: "C", nome: "Sala C 406", ocupada: false },

  {
    id: 10,
    bloco: "G",
    nome: "Laboratório CT - Centro Tecnológico",
    ocupada: false,
  },

  { id: 1, bloco: "E", nome: "Laboratório 02 - Sala E208", ocupada: false },
  { id: 4, bloco: "E", nome: "Laboratório 05 - Sala E209", ocupada: false },
  { id: 5, bloco: "E", nome: "Laboratório 06 - Sala E212", ocupada: false },
  { id: 17, bloco: "E", nome: "Sala E 217", ocupada: false },
  { id: 19, bloco: "E", nome: "Sala E 211", ocupada: false },
  { id: 27, bloco: "E", nome: "Sala E 211", ocupada: false },

  { id: 6, bloco: "I", nome: "Laboratório 07 - Sala I207", ocupada: false },
  { id: 7, bloco: "I", nome: "Laboratório 08 - Sala I206", ocupada: false },
  { id: 16, bloco: "I", nome: "Sala I 103", ocupada: false },
  { id: 22, bloco: "I", nome: "Sala I 302", ocupada: false },

  { id: 11, bloco: "H", nome: "FTT - Sala H 201", ocupada: false },
  { id: 18, bloco: "H", nome: "Sala H 303", ocupada: false },
  { id: 21, bloco: "H", nome: "Sala H 202", ocupada: false },
  { id: 23, bloco: "H", nome: "Sala H 101", ocupada: false },

  { id: 24, bloco: "F", nome: "Sala F 115", ocupada: false },

  { id: 2, bloco: "J", nome: "Laboratório 03 - Sala J 204", ocupada: false },
];

const App: React.FC = () => {
  const [salas, setSalas] = useState<Sala[]>(salasIniciais);
  const [filtroBloco, setFiltroBloco] = useState<string>("");
  const [dataReserva, setDataReserva] = useState<string>("");
  const [horaReserva, setHoraReserva] = useState<string>("");
  const [salaSelecionada, setSalaSelecionada] = useState<Sala | null>(null);
  const [mensagem, setMensagem] = useState<string>("");
  const [minhasReservas, setMinhasReservas] = useState<Reserva[]>([]);

  const alternarOcupacao = (id: number) => {
    setSalas(
      salas.map((sala) =>
        sala.id === id ? { ...sala, ocupada: !sala.ocupada } : sala
      )
    );
  };

  const handleReserva = () => {
    if (!salaSelecionada || !dataReserva || !horaReserva) {
      setMensagem("Por favor, selecione uma sala, data e horário.");
      return;
    }

    // Atualizando a sala como reservada
    const novaSala = salas.map((sala) =>
      sala.id === salaSelecionada.id ? { ...sala, ocupada: true } : sala
    );
    setSalas(novaSala);

    // Adicionando a reserva à lista de "minhasReservas"
    const novaReserva: Reserva = {
      id: minhasReservas.length + 1,
      sala: salaSelecionada,
      data: dataReserva,
      hora: horaReserva,
    };
    setMinhasReservas([...minhasReservas, novaReserva]);
    setMensagem(
      `Reserva confirmada para ${salaSelecionada.nome} - Bloco ${salaSelecionada.bloco} em ${dataReserva} às ${horaReserva}.`
    );
  };

  const cancelarReserva = (id: number) => {
    setMinhasReservas(minhasReservas.filter((reserva) => reserva.id !== id));
    setMensagem("Reserva cancelada com sucesso.");
  };

  const salasFiltradas = filtroBloco
    ? salas.filter((sala) => sala.bloco === filtroBloco)
    : salas;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Reservar Salas - UniEVANGÉLICA</h1>

        {/* Filtro de Bloco */}
        <div className={styles.filter}>
          <label htmlFor="bloco">Filtrar por Bloco:</label>
          <select
            id="bloco"
            value={filtroBloco}
            onChange={(e) => setFiltroBloco(e.target.value)}
          >
            <option value="">Todos</option>
            {["A", "B", "C", "E", "F", "G", "H", "I", "J"].map((bloco) => (
              <option key={bloco} value={bloco}>
                Bloco {bloco}
              </option>
            ))}
          </select>
        </div>

        {/* Seleção da Sala, Data e Hora */}
        <div className={styles.formulario}>
          <form>
            <label htmlFor="sala">Escolha a Sala:</label>
            <select
              id="sala"
              onChange={(e) => {
                const sala = salas.find(
                  (sala) => sala.id === Number(e.target.value)
                );
                setSalaSelecionada(sala || null);
              }}
              value={salaSelecionada?.id || ""}
            >
              <option value="">Selecione a Sala</option>
              {salasFiltradas.map((sala) => (
                <option key={sala.id} value={sala.id}>
                  {sala.nome}
                </option>
              ))}
            </select>

            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              value={dataReserva}
              onChange={(e) => setDataReserva(e.target.value)}
            />

            <label htmlFor="hora">Hora:</label>
            <input
              type="time"
              id="hora"
              value={horaReserva}
              onChange={(e) => setHoraReserva(e.target.value)}
            />

            <button type="button" onClick={handleReserva}>
              Reservar
            </button>
          </form>
        </div>

        {/* Mensagem de Sucesso ou Erro */}
        {mensagem && <p className={styles.message}>{mensagem}</p>}

        {/* Minhas Reservas */}
        <div className={styles.minhasReservas}>
          <h3>Minhas Reservas</h3>
          <ul>
            {minhasReservas.map((reserva) => (
              <li key={reserva.id}>
                <p>
                  {reserva.sala.nome} - {reserva.sala.bloco} em {reserva.data}{" "}
                  às {reserva.hora}
                </p>
                <button onClick={() => cancelarReserva(reserva.id)}>
                  Cancelar Reserva
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
