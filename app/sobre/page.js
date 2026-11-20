const tecnologias = [
  {
    nome: "Flutter",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    nome: "Java",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    nome: "PostgreSQL",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    nome: "MySQL",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
];
const modulos = ["Next.js", "React", "CSS", "API do GitHub"];

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
          <div className="tags tags-tecnologias">
            {tecnologias.map((tecnologia) => (
              <span className="tecnologia" key={tecnologia.nome}>
                <img src={tecnologia.icone} alt="" loading="lazy" />
                {tecnologia.nome}
              </span>
            ))}
          </div>
        </article>

        <article className="card">
          <h2>Usado neste portfólio</h2>
          <div className="tags">
            {modulos.map((modulo) => <span key={modulo}>{modulo}</span>)}
          </div>
          <p>
            O Next.js organiza as páginas, o React monta os componentes, o CSS
            cuida do visual e a API do GitHub atualiza os dados de um projeto pessoal.
          </p>
        </article>
      </div>
    </section>
  );
}
