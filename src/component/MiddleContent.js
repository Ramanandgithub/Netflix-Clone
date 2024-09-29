import './MiddleContent.css';
function  MiddleContent(){
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
                <input className="email" type="text" placeholder="Email address" />
                <button className="btn">Get Started</button>
            </div>
        </div>
    )
}

export default MiddleContent;