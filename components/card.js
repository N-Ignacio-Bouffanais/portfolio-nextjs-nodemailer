import proyecto1 from "../static/Imagen1.jpg";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
      <div className="card-container">
        <Image src={proyecto1} alt="Imagen del proyecto" />
        <div className="card-body">
          <h3>Clon de Google</h3>
          <p>
            Este es un clon de la pagina de busqueda de Google, hecho con Html 5
            y CSS.
          </p>
          <Link href="/">
            <a>
              Ver mas<i className="fa-solid fa-angles-right"></i>
            </a>
          </Link>
        </div>
      </div>
    );
}

export default Card;
