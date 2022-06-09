import Link from "next/link";

const Footer = () => {
    return (
      <footer>
        <div className="footer-container">
          <ul>
            <li>
              <Link href="https://github.com/N-Ignacio-Bouffanais">
                <a
                  className="icons-footer"
                  target="_blank"
                  title="Ver Perfil de Github"
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/N_Bouffanais">
                <a
                  className="icons-footer"
                  target="_blank"
                  title="Ver Perfil de Twiter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/n_bouffanais/">
                <a
                  className="icons-footer"
                  target="_blank"
                  title="Ver Perfil de Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/nicolas-ignacio-bouffanais-lay-941989236/">
                <a
                  className="icons-footer"
                  target="_blank"
                  title="Ver Perfil de Linkedin"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </Link>
            </li>
          </ul>
          <div className="footer-text">
            <p>Designed & Built by Nicolas Bouffanais</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
