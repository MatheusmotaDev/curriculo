import Image from "next/image";
import Link from "next/link";
import foto from "@/eu.jpeg";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-texto">
          <span className="etiqueta">Engenharia de software</span>
          <h1>Ideias ganham forma quando encontram código.</h1>
          <p>
            Eu sou Matheus. Desenvolvo soluções com Flutter, Java e bancos de
            dados enquanto construo minha trajetória em produtos digitais.
          </p>

          <div className="botoes">
            <Link href="/projetos" className="botao">Ver projetos</Link>
            <Link href="/sobre" className="botao botao-claro">Sobre mim</Link>
          </div>

          <div className="tecnologias-home">
            <span>Flutter</span>
            <span>Java</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
          </div>
        </div>

        <div className="foto-box">
          <Image src={foto} alt="Foto de Matheus" className="foto-perfil" priority />
          <div className="foto-legenda">
            <span>Demoday Porto Digital</span>
            <strong>Pré-incubação 2026</strong>
          </div>
        </div>
      </section>

      <section className="container secao trajetoria">
        <div className="secao-cabecalho">
          <span className="etiqueta">Atuação atual</span>
          <h2>Construindo em três mercados diferentes.</h2>
        </div>

        <div className="resumo">
          <div><span>Ed-tech</span><strong>Avança Fácil</strong></div>
          <div><span>Food-tech</span><strong>Conecta Mesa</strong></div>
          <div><span>Constru-tech</span><strong>Vigga Box</strong></div>
        </div>
      </section>

    </>
  );
}
