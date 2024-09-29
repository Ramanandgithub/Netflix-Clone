import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import './Login.css'; // Import your CSS file
import Navbar from "./Navbar";
import { useState } from "react";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate(); // Use useNavigate for navigation
    const location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault();

        // Call LoginHandler after preventing default
        LoginHandler();
    };

    const changeHandler = (e) => {
        const { name, value } = e.target; // Destructure target properties
        setFormData(prevData => ({
            ...prevData,
            [name]: value // Update the specific field based on the input name
        }));
    };

    const LoginHandler = () => {
        // Check if username and password are not empty
        if (formData.username !== '' && formData.password !== '') {
            // Navigate to the /card route
            navigate('/card');
        } else {
            // If login fails, you can optionally display a message or stay on the login page
            alert('Please enter both username and password.');
            navigate('/login'); // Redirect to login page (this line is optional)
        }
    };

    return (
        <div>
            <Navbar>
                <div className="login-container">
                    <form onSubmit={submitHandler}>
                        <div className="login-header">
                            <h1>Sign In</h1>
                        </div>
                        <div className="input-group">
                            <input
                                name="username"
                                onChange={changeHandler}
                                type="text"
                                placeholder="Email or Mobile number"
                                className="login-input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                name="password"
                                type="password"
                                onChange={changeHandler}
                                placeholder="Password"
                                className="login-input"
                            />
                        </div>
                        <div className="button-group">
                            <button type="submit" className="login-button">Login</button>
                        </div>
                    </form>
                    <div className="divider">
                        <p>OR</p>
                    </div>
                    <div className="button-group">
                        <button className="signin-code-button">Use a Sign-in Code</button>
                    </div>
                    <div className="forgot-password">
                        Forgot Password?
                    </div>
                    <div className="signup-prompt">
                        New to Netflix? <span><NavLink to="/signup" className="signup-link">Signup Now</NavLink></span>
                    </div>
                    <div className="recaptcha-info">
                        <span>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="/learnmore" className="learn-more-link">Learn more</Link>.</span>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Login;
