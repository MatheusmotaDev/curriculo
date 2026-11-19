const experiencias = [
  { empresa: "Avança Fácil", area: "Ed-tech", periodo: "2026 - atualmente" },
  { empresa: "Conecta Mesa", area: "Food-tech", periodo: "2026 - atualmente" },
  { empresa: "Vigga Box", area: "Constru-tech", periodo: "2026 - atualmente" },
];

export default function Profissional() {
  return (
    <section className="container pagina">
      <span className="etiqueta">Experiência profissional</span>
      <h1>Onde estou construindo minha carreira</h1>
      <p className="introducao">Atuação como engenheiro de software em negócios de diferentes áreas.</p>

      <div className="grade-cards">
        {experiencias.map((experiencia) => (
          <article className="card experiencia" key={experiencia.empresa}>
            <span>{experiencia.periodo}</span>
            <h2>Engenheiro de software</h2>
            <h3>{experiencia.empresa}</h3>
            <p>{experiencia.area}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
