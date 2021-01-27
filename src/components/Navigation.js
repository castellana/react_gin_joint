import { NavLink } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav id="nav-bar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/" exact activeStyle={{color: '#DEB307'}} className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/entertainment" activeStyle={{color: '#DEB307'}}className="nav-link">Entertainment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/shop" activeStyle={{color: '#DEB307'}} className="nav-link">Shop</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/events" activeStyle={{color: '#DEB307'}} className="nav-link">Events</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeStyle={{color: '#DEB307'}} className="nav-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;