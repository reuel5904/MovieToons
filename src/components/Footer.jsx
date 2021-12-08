import React from 'react'
import Logo from '../assets/movietoons4.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <Link to="/">
                        <figure className="footer__logo">
                            <img src={Logo} alt="" className="footer__logo--img" />
                        </figure>
                    </Link>
                    <div className="footer__list">
                        <Link to="/" className="footer__link">Home</Link> ||
                        <Link to="/discover" className="footer__link">Discover</Link> || 
                        <Link to="/contact" className="footer__link">Contact</Link>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2021 - MovieToons
                    </div>
                </div>
            </div>
        </footer>
    )
}
