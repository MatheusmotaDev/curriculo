"use client";

import { useEffect, useState } from "react";

export default function ProjetoGitHub() {
  const [projeto, setProjeto] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/MatheusmotaDev/Taverna-dos-aventureiros")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Erro ao consultar o GitHub");
        }

        return resposta.json();
      })
      .then((dados) => setProjeto(dados))
      .catch(() => setErro(true));
  }, []);

  function formatarData(data) {
    return new Date(data).toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    });
  }

  return (
    <article className="card projeto projeto-github">
      <div className="projeto-topo">
        <span className="tipo">Projeto pessoal</span>
      </div>

      <h2>Taverna dos Aventureiros</h2>
      <p>{projeto?.description || "Uma loja fictícia de RPG."}</p>

      {!projeto && !erro && <p className="status-api">Consultando o GitHub...</p>}
      {erro && <p className="status-api">Dados locais exibidos.</p>}

      {projeto && (
        <div className="projeto-detalhes">
          <span>{projeto.language}</span>
          <span>Atualizado em {formatarData(projeto.updated_at)}</span>
        </div>
      )}

      <div className="projeto-links">
        <a href="https://taverna-dos-aventureiros.vercel.app" target="_blank" rel="noreferrer">
          Abrir projeto
        </a>
        <a href="https://github.com/MatheusmotaDev/Taverna-dos-aventureiros" target="_blank" rel="noreferrer">
          Ver código
        </a>
      </div>
    </article>
  );
}
