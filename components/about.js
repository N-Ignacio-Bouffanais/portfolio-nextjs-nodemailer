import Image from "next/image";
import profilePic from "../static/me.jpg";

const About = () => {
    return (
            <section id="primera_section" class="about">
                <h1>Acerca de mi</h1>
                <div class="about-main">
                    <div class="about-info">
                        <p>Mi nombre es Nicolás Bouffanais, tengo 22 años, soy desarrollador de software e ingeniero en Automatización y robótica. Tengo experiencia como Frontend Developer Junior y desarrollador de tecnologías IOT. </p>
                        <p>Mis áreas de interes son: Desarrollo Web, Desarrollo de software y Ciencia de datos.</p>
                        <p>Algunas de las tecnologias con las que he trabajado son:</p>
                        <ul class="lista-habilidades">
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                            <li>Node js</li>
                            <li>Git Bash</li>
                            <li>Github</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>React JS</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div class="about-image">
                        <Image src={profilePic} alt="Foto de perfil"/>
                    </div>
                </div>
            </section>
    );
};

export default About;