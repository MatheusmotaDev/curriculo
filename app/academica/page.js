const formacoes = [
  {
    curso: "Sistemas para Internet",
    instituicao: "Universidade Católica de Pernambuco",
    periodo: "2025 - 2027",
    situacao: "Em andamento",
  },
  {
    curso: "Técnico em Análise e Desenvolvimento de Sistemas",
    instituicao: "ETE Ginásio Pernambucano",
    periodo: "2023 - 2024",
    situacao: "Concluído",
  },
];

export default function Academica() {
  return (
    <section className="container pagina">
      <span className="etiqueta">Experiência acadêmica</span>
      <h1>Minha formação</h1>
      <p className="introducao">Cursos que fazem parte da minha trajetória na tecnologia.</p>

      <div className="timeline">
        {formacoes.map((formacao) => (
          <article className="item-timeline" key={formacao.curso}>
            <span className="periodo">{formacao.periodo}</span>
            <h2>{formacao.curso}</h2>
            <p>{formacao.instituicao}</p>
            <span className="situacao">{formacao.situacao}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
