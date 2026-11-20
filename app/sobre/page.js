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
const modulos = [
  {
    nome: "Next.js",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    fundoClaro: true,
  },
  {
    nome: "React",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    nome: "CSS",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    nome: "GitHub",
    icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    claro: true,
  },
];

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
          <div className="tags tags-tecnologias">
            {modulos.map((modulo) => (
              <span
                className={`tecnologia ${modulo.claro ? "tecnologia-icone-claro" : ""} ${modulo.fundoClaro ? "tecnologia-icone-fundo" : ""}`}
                key={modulo.nome}
              >
                <img src={modulo.icone} alt="" loading="lazy" />
                {modulo.nome}
              </span>
            ))}
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
