import Image from "next/image";
import Link from "next/link";
import foto from "@/eu.jpeg";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-texto">
          <span className="etiqueta">Olá, eu sou Matheus</span>
          <h1>Engenheiro de software que gosta de transformar ideias em projetos.</h1>
          <p>
            Desenvolvo soluções com Flutter, Java e bancos de dados. Atualmente
            estudo Sistemas para Internet e trabalho em projetos de tecnologia.
          </p>

          <div className="botoes">
            <Link href="/projetos" className="botao">Ver projetos</Link>
            <Link href="/sobre" className="botao botao-claro">Sobre mim</Link>
          </div>
        </div>

        <div className="foto-box">
          <Image src={foto} alt="Foto de Matheus" className="foto-perfil" priority />
        </div>
      </section>

      <section className="container secao resumo">
        <div><strong>3</strong><span>experiências profissionais</span></div>
        <div><strong>2</strong><span>premiações</span></div>
        <div><strong>4</strong><span>tecnologias principais</span></div>
      </section>

    </>
  );
}
