import React from 'react';
import { Link } from 'react-scroll';
import logo from '../asset/logo1.png';

function Footer() {
    return (
        <div id='footer'>
            <Link to='footer' className='logo1'>
                <img src={logo} alt='' />
                <h>organic</h>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor </p>      
            </Link>
            <footer>© Copyright 2021 Nature</footer>
        </div>
    )
}
export default Footer;