import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className='top-header'>
            <div className='social-icons'>
                <a href='#' className='insta-icon'><InstagramIcon style={{ margin: 10, fontSize: 20 }} /></a>
                <a href='#' className='twt-icon'><TwitterIcon style={{ margin: 10, fontSize: 20 }} /></a>
                <a href='#' className='mail-icon'><EmailIcon style={{ margin: 10, fontSize: 20 }} /></a>
            </div>
            <div className='web-name'>
                <h1>NAME</h1>
            </div>
            <div className='btn'>
                <button className='btn-base'><ShoppingCartIcon style={{ fontSize: 20 }} /></button>
            </div>
            <div className='nav-container'>
                <input className='checkbox' type='checkbox' name='' id='' />
                <div className='hamburger-lines'>
                    <span className='line line1'></span>
                    <span className='line line2'></span>
                    <span className='line line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Header;