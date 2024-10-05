import { Link, NavLink, useNavigate } from "react-router-dom";
import './Login.css'; // Import your CSS file
import Navbar from "./Navbar";
import { useState } from "react";
import { useContext } from "react";
import Context from "../context/UserContext";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const {user} = useContext(Context);



    const navigate = useNavigate(); // Use useNavigate for navigation
    
    

    const submitHandler = (e) => {
        e.preventDefault();

        // Call LoginHandler after preventing default
        LoginHandler();
    };

    const [value,setvalue] = useState('')


    

   

    const LoginHandler = () => {
        // Check if username and password are not empty
        if (user.email === value) {
            
            navigate('/card');
        } else {
            // If login fails, you can optionally display a message or stay on the login page
            alert('Please enter correct username');
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
                                onChange={(e)=>setvalue(e.target.value)}
                                type="text"
                                placeholder="Email or Mobile number"
                                className="login-input"
                            />
                        </div>
                        <div className="input-group">
                            <input
                                name="password"
                                type="password"
                                
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
                        New to Netflix? <span><NavLink to="/" className="signup-link">Signup Now</NavLink></span>
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
