import Container from '../components/Container';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/Contact';

const Index = () => {
    return (
      <Container>
        <About/>
        <Projects/>
        <Contact/>
      </Container>
    );
}

export default Index;