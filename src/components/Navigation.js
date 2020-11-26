import { Link } from "react-router-dom";


const Navigation = () => {
    return ( 
        <nav id="nav-bar">
            <ul>
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/entertainment" className="nav-link">Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shop" className="nav-link">Shop</Link>
                </li>
                <li className="nav-item">
                    <Link to="/events" className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;