import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <Link href="/">
        <a>
          <i className="fa-solid fa-n" id="icono-N"></i>
        </a>
      </Link>
      <ol className="nav-menu">
        <li className="nav-item">
          <Link href="#primera_section">
            <a className="nav-link">Acerca de mi</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#segunda_section">
            <a className="nav-link">Proyectos</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#tercera_section">
            <a className="nav-link">Contacto</a>
          </Link>
        </li>
        <li>
          <Link href="" target="_blank">
            <a className="nav-button">Descargar CV</a>
          </Link>
        </li>
      </ol>
      <div className="hamburger">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
