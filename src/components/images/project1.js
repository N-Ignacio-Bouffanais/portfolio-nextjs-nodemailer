import proyecto1 from "../../static/Imagen1.jpeg";
import Image from "next/image";


const project1 = () => {
  return (
      <div className="proyect-image-container">
          <Image src={proyecto1} alt="Imagen del proyecto" />
      </div>
  )
}

export default project1