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
          <Link href="../static/Profile.pdf">
            <a className="nav-button" target="_blank">
              Descargar CV
            </a>
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
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}))

export default Navbar;
