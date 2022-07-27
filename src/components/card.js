import proyecto1 from "../static/Imagen1.jpeg";
import Image from "next/image";
import Link from "next/link";

const Card = ({title,url}) => {
    return (
      <div className="card-container">
        <div className="proyect-image-container">
          <Image src={proyecto1} alt="Imagen del proyecto" />
        </div>
        <div className="card-body">
          <h2>{title}</h2>
          <p>
            Este es un clon de la pagina de busqueda de Google, hecho con Html 5
            y CSS.
          </p>
          <Link href={url ? url : "#!"}>
            <a title="Ver repositorio del proyecto" target="_blank">
              Ver mas<i className="fa-solid fa-angles-right"></i>
            </a>
          </Link>
        </div>
      </div>
    );
}

export default Card;
