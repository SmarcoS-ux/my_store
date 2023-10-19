import React from 'react';
import { Link } from "react-router-dom";
import "./style-header-logo.css";


const Header_Logo = () => {
    return (
        <div className='logo-header'>
            <Link to="/" id="link_home">
                <img src="/assets/future.png" alt="Logo" title="Logo"/>
            </Link>
        </div>
    );
}

export default Header_Logo;