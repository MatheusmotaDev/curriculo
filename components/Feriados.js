"use client";

import { useEffect, useState } from "react";

export default function Feriados() {
  const [feriados, setFeriados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const ano = new Date().getFullYear();

  useEffect(() => {
    fetch(`https://brasilapi.com.br/api/feriados/v1/${ano}`)
      .then((resposta) => resposta.json())
      .then((dados) => {
        setFeriados(dados.slice(0, 3));
        setCarregando(false);
      })
      .catch(() => setCarregando(false));
  }, [ano]);

  function formatarData(data) {
    return new Date(data + "T12:00:00").toLocaleDateString("pt-BR");
  }

  return (
    <section className="secao api-box">
      <div>
        <span className="etiqueta">Integração com API</span>
        <h2>Feriados nacionais de {ano}</h2>
        <p>Dados consultados em tempo real na BrasilAPI.</p>
      </div>

      <div className="lista-feriados">
        {carregando && <p>Carregando feriados...</p>}

        {!carregando && feriados.length === 0 && (
          <p>Não foi possível carregar os feriados agora.</p>
        )}

        {feriados.map((feriado) => (
          <div className="feriado" key={feriado.date}>
            <strong>{formatarData(feriado.date)}</strong>
            <span>{feriado.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
