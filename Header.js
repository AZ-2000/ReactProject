import React from 'react';
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1> Welcome to my portfolio! </h1>
                <ReactTyped className = "typed-text"
                strings={["Muhammad Ammar Zaid", "201954","Air University","BsCS"]}
                typeSpeed={40}
                backSpeed={60}
                loop/>
                <Link to="/contact" className='btn-main-offer'>Contact me</Link>

            </div>
        </div>
    )
}

export default Header;