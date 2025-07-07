import React, { useState } from 'react';

const checklist = [
  {
    title: "1 ano antes (Agora)",
    items: [
      "Definir o orçamento total",
      "Montar a lista de convidados",
      "Escolher e reservar o local da cerimônia",
      "Escolher e reservar o local da festa",
      "Definir o estilo do casamento",
      "Contratar cerimonialista ou assessoria",
      "Contratar buffet",
      "Contratar fotógrafo e videomaker",
      "Contratar música (DJ/banda)",
      "Contratar decoração",
      "Pesquisar vestido de noiva/traje do noivo",
    ],
  },
  {
    title: "8 a 10 meses antes",
    items: [
      "Escolher vestido/traje ou iniciar confecção",
      "Definir padrinhos, madrinhas, pajens e daminhas",
      "Reservar hospedagem para convidados de fora",
      "Planejar lua de mel",
      "Iniciar documentação para casamento civil e religioso",
    ],
  },
  {
    title: "6 meses antes",
    items: [
      "Convidar padrinhos e madrinhas",
      "Escolher e encomendar convites",
      "Reservar maquiador, cabeleireiro e estética",
      "Escolher bolo, doces e lembrancinhas",
      "Organizar roteiro da cerimônia",
    ],
  },
  {
    title: "4 meses antes",
    items: [
      "Provar cardápio e bolo",
      "Ajuste do vestido/terno",
      "Definir detalhes da decoração",
      "Definir playlist com DJ/banda",
      "Planejar ensaio da cerimônia",
    ],
  },
  {
    title: "2 meses antes",
    items: [
      "Entregar convites",
      "Confirmar todos os fornecedores",
      "Organizar chá de panela/bar/cozinha",
      "Revisar cronograma do dia do casamento",
    ],
  },
  {
    title: "1 mês antes",
    items: [
      "Confirmar presença dos convidados (RSVP)",
      "Ensaiar cerimônia com padrinhos e pais",
      "Ajuste final do vestido/terno",
      "Conferir todos os pagamentos pendentes",
    ],
  },
  {
    title: "1 semana antes e dia do casamento",
    items: [
      "Preparar mala de emergência da noiva/noivo",
      "Imprimir cronograma com contatos de fornecedores",
      "Conferir alianças e documentos",
      "Fazer alongamento, massagem, algo relaxante",
      "Curtir cada momento e celebrar!",
    ],
  },
];

export default function App() {
  const [completed, setCompleted] = useState({});

  const toggleItem = (section, index) => {
    const key = `${section}-${index}`;
    setCompleted({ ...completed, [key]: !completed[key] });
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Checklist de Casamento</h1>
      {checklist.map((section, sIndex) => (
        <div key={sIndex}>
          <h2>{section.title}</h2>
          <ul>
            {section.items.map((item, iIndex) => {
              const key = `${sIndex}-${iIndex}`;
              return (
                <li key={key}>
                  <label>
                    <input
                      type="checkbox"
                      checked={completed[key] || false}
                      onChange={() => toggleItem(sIndex, iIndex)}
                    />
                    {" "}{item}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
