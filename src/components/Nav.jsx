import React from 'react'
import Logo from '../assets/movietoons4.png'
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={Logo} alt="" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__link--list"><a href="/" className="nav__link">Home</a></li>
                    <li className="nav__link--list"><Link to="/discover" className="nav__link no-cursor" >Discover</Link></li>
                    <li className="nav__link--list"><Link to="/contact" className="nav__link no-cursor" >Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
