import Card from './card';

const Projects = () =>{
    return (
      <section id="segunda_section" className="proyectos">
        <h1>Mis proyectos</h1>
        <div className="proyectos-main">
          <Card title="Clon de Google" url="https://github.com/N-Ignacio-Bouffanais/Google-clone"/>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    );
};

export default Projects;