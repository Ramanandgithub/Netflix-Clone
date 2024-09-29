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
                    <img src={logo} alt="Logo" width="170" height="130" loading='lazy' />
                </div>
                <nav className="navbar-links">
                    <select className="language-selector">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    {!isLoginPage && (
                        location.pathname !== `/player/${location.pathname.split('/').pop()}` ? (
                            <NavLink to="/login" className="signin-button">
                                Sign In
                            </NavLink>
                        ) : (
                            <div className='movie_list'>
                                <Link to="/card" className='signin-button'>Movie List</Link>
                                <div>Username</div>
                            </div>
                        )
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
