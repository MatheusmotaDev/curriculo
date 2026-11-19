"use client";

import { useEffect, useState } from "react";

export default function GitHubFlutter() {
  const [repositorio, setRepositorio] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/repos/flutter/flutter")
      .then((resposta) => resposta.json())
      .then((dados) => setRepositorio(dados))
      .catch(() => setErro(true));
  }, []);

  function numeroCurto(numero) {
    return new Intl.NumberFormat("pt-BR", {
      notation: "compact",
    }).format(numero);
  }

  return (
    <section className="github-box">
      <div className="github-texto">
        <span className="etiqueta">API do GitHub</span>
        <h2>Flutter em código aberto</h2>
        <p>
          Flutter faz parte das tecnologias que utilizo. Estes dados vêm do
          repositório oficial e são atualizados pela API pública do GitHub.
        </p>
      </div>

      <div className="github-dados">
        {!repositorio && !erro && <p>Buscando dados do GitHub...</p>}
        {erro && <p>Não foi possível consultar o GitHub agora.</p>}

        {repositorio && (
          <>
            <div>
              <strong>{numeroCurto(repositorio.stargazers_count)}</strong>
              <span>estrelas</span>
            </div>
            <div>
              <strong>{numeroCurto(repositorio.forks_count)}</strong>
              <span>forks</span>
            </div>
            <div>
              <strong>{repositorio.language}</strong>
              <span>linguagem principal</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
