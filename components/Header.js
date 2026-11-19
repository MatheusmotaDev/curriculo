import Link from "next/link";

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="container menu">
        <Link href="/" className="logo">Matheus.dev</Link>

        <nav aria-label="Navegação principal">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/academica">Formação</Link>
          <Link href="/profissional">Experiência</Link>
          <Link href="/projetos">Projetos</Link>
        </nav>
      </div>
    </header>
  );
}
