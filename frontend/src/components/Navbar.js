import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo">
                <h2>BackLocal Shopping</h2>
            </div>

            <ul className="navbar__links">
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                        <span className="cartlogo_badge">0</span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>

            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
        )
}

export default Navbar
