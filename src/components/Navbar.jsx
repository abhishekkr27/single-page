import React, { useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../asset/logo.png'

function Navbar() {
    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration={2000}>
                <img src={logo} alt='' />
                <div className="logo-text">organic</div>
            </Link>
            <label className='menu-btn' type='chekbox' id='menu-btn'></label>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
            <li><Link to="#" smooth={true} duration={2000}>Home</Link></li>
            <li><Link to="products" smooth={true} duration={2000}>Products</Link></li>
            <li><Link to="blog" smooth={true} duration={2000}>Blog</Link></li>
            <li><Link to="about" smooth={true} duration={2000}>About Us</Link></li>
            <li><Link to="footer" smooth={true} duration={2000}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
