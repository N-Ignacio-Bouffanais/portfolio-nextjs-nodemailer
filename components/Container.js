import Navigation from './navbar';
import Footer from './footer';

const Container = (props) => (
    <div className="container">
        <Navigation/>
        <div>
            {props.children}
        </div>
        <Footer/>
    </div>
)

export default Container;