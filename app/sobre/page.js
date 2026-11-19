const tecnologias = ["Flutter", "Java", "PostgreSQL", "MySQL"];
const modulos = ["Next.js", "React", "CSS", "BrasilAPI"];

export default function Sobre() {
  return (
    <section className="container pagina">
      <span className="etiqueta">Sobre mim</span>
      <h1>Aprendizado constante e vontade de construir.</h1>
      <p className="introducao">
        Sou engenheiro de software e estudante de Sistemas para Internet. Tenho
        interesse em desenvolvimento de aplicações e em criar soluções úteis.
      </p>

      <div className="duas-colunas">
        <article className="card">
          <h2>Tecnologias que conheço</h2>
          <div className="tags">
            {tecnologias.map((tecnologia) => <span key={tecnologia}>{tecnologia}</span>)}
          </div>
        </article>

        <article className="card">
          <h2>Usado neste portfólio</h2>
          <div className="tags">
            {modulos.map((modulo) => <span key={modulo}>{modulo}</span>)}
          </div>
          <p>
            O Next.js organiza as páginas, o React monta os componentes, o CSS
            cuida do visual e a BrasilAPI fornece dados para a página inicial.
          </p>
        </article>
      </div>
    </section>
  );
}
