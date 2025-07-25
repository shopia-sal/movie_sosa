import React from 'react'

import './footer.scss';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import bg from '../assets/footer-bg.jpg'
import logo from '../assets/logo2.png';



const Footer = () => {
  return (
    <div className="footer" >
      <div className="footer__content container">
        <div className="footer_content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">SOSA</Link>
          </div>
        </div>
        <div className="footer__content_menus">
            <div className="footer__content__menu">
              <Link to="/">Home</Link>
              <Link to="/">Contact us</Link>
              <Link to="/">Term of services</Link>
              <Link to="/">About us</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Premium</Link>
              <Link to="/">Privacy police</Link>
            </div>
            <div className="footer__content__menu">
              <Link to="/">You must watch</Link>
              <Link to="/">Recent release</Link>
              <Link to="/">Top IMDB</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
