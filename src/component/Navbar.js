import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png'; // Replace with your logo path
import './Navbar.css';
import Context from '../context/UserContext';
import { useContext } from 'react';
import { FaUserCheck } from "react-icons/fa";


function Navbar({ children }) {
    const location = useLocation();
    const { user, setUser } = useContext(Context);
    const navigate = useNavigate();

    // Check if we are on the login page
    const isLoginPage = location.pathname === '/login';
    const isCardPage = location.pathname === '/card'; // Variable renamed for clarity

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
                            location.pathname === '/' ? ( // Check if location is '/'
                                <Link to="/login" className="signin-button">Login</Link>
                            ) : (
                                <div className='top-level-wraper'>
                                <div>
                                    <NavLink to="/" onClick={() => setUser({ email: '' })} className="signin-button">
                                        Sign out
                                    </NavLink>
                                </div>

                                <div className='users'>
                                    <p>< FaUserCheck/></p>
                                    
                                    <strong className='username'>{user.email}</strong>
                                </div>

                                </div>
                                
                            )
                        ) : (
                            <div className='movie-list'> {/* Fixed class name */}
                                <Link to="/card" className='signin-button'>Movie List</Link>
                                <div><FaUserCheck /></div>
                                <div>{user.email}</div>
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
