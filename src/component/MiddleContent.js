import './MiddleContent.css';
import Context from '../context/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function  MiddleContent(){
    const {setuser} = useContext(Context);
    const [email,setemail] = useState('');
    const navigate = useNavigate();
    function submitHandler(e){

        e.preventDefault();

        setuser({email});
        navigate('/login')

        


    }

    return (
        <div className='whole'>
            <div className="heading-top">
                <h1 className="main-heading">Unlimited movies, TV shows and more</h1>
            </div>
            <div className="middle-text">
                <strong className="peragraph">Starts at ₹149. Cancel at any time.</strong>
            </div>
            <div className="middle-text-down">
                <p className="membership">Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
            <div className="flexable-btn">
                <input className="email" onChange={(e)=>setemail(e.target.value)} type="text" placeholder="username" pattern='[a-zA-Z]{5,}' 
                title='username minimum 5 character ' />
                <button className="btn" onClick={submitHandler}>Get Started</button>
            </div>
        </div>
    )
}

export default MiddleContent;