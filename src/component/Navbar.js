import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/logo.png'; // Replace with your logo path
import './Navbar.css';

function Navbar({ children }) {
    const location = useLocation();

    // Check if we are on the login page
    const isLoginPage = location.pathname === '/login';

    return (
        <div className="navbar">
            <header className="navbar-header">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" width="170px" height="130px" loading='lazy' />
                </div>
                <nav className="navbar-links">
                    <select className="language-selector">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    {!isLoginPage && (
                        <NavLink to="/login" className="signin-button">
                            Sign In
                        </NavLink>
                    )}
                    
                </nav>
            </header>
            <div className="navbar-children">
                {children} {/* Render children here */}
            </div>
        </div>
    );
}

export default Navbar;
