
const Contact = () =>{
    return (
      <section id="tercera_section" className="contacto">
        <h1>Contáctame</h1>
        <div className="contact-container">
          <div className="contact-form">
            <form action="http://localhost:4000/send-email" method="POST">
              <p>
                <label htmlFor="nombre_completo">Nombre completo</label>
                <input
                  type="text"
                  name="nombre_completo"
                  id="nombre_completo"
                />
              </p>
              <p>
                <label htmlFor="correo">Correo electronico</label>
                <input type="email" name="correo" id="correo"/>
              </p>
              <p>
                <label htmlFor="telefono">Teléfono</label>
                <input type="tel" name="telefono" id="telefono"/>
              </p>
              <p>
                <label htmlFor="asunto">Asunto</label>
                <input type="text" name="asunto" id="asunto"/>
              </p>
              <p className="block">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea name="mensaje" rows="4" id="mensaje"></textarea>
              </p>
              <p className="block">
                <button type="submit">Enviar</button>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
}

export default Contact;