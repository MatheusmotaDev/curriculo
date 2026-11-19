const projetos = [
  { nome: "Avança Fácil", tipo: "Ed-tech", texto: "Projeto de tecnologia voltado para o setor de educação." },
  { nome: "Conecta Mesa", tipo: "Food-tech", texto: "Projeto que une tecnologia e o setor de alimentação." },
  { nome: "Vigga Box", tipo: "Constru-tech", texto: "Projeto de tecnologia aplicado ao setor de construção." },
];

export default function Projetos() {
  return (
    <section className="container pagina">
      <span className="etiqueta">Projetos desenvolvidos</span>
      <h1>Ideias das quais faço parte</h1>
      <p className="introducao">Projetos em diferentes mercados nos quais atuo como engenheiro de software.</p>

      <div className="grade-cards">
        {projetos.map((projeto) => (
          <article className="card projeto" key={projeto.nome}>
            <span className="tipo">{projeto.tipo}</span>
            <h2>{projeto.nome}</h2>
            <p>{projeto.texto}</p>
            <div className="tags"><span>Software</span><span>Tecnologia</span></div>
          </article>
        ))}
      </div>

      <section className="premios">
        <h2>Prêmios e reconhecimentos</h2>
        <div className="premio">
          <strong>2º lugar</strong>
          <span>Demoday Kick-off — Porto Digital, 2025</span>
        </div>
        <div className="premio">
          <strong>3º lugar</strong>
          <span>Pré-incubação de empresas — Porto Digital, 2026</span>
        </div>
      </section>
    </section>
  );
}
