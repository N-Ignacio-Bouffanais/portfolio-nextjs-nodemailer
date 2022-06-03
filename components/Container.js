import Navigation from './navbar';

const Container = (props) => (
    <div className="container">
        <Navigation/>
        <div>
            {props.children}
        </div>
    </div>
)

export default Container;