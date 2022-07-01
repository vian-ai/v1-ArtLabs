import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import '../Styles/Header.css';

const Header = () => {
    return (
        <div className='top-header'>
            <div className='social-icons'>
                <InstagramIcon style={{ margin: 10 }} />
                <TwitterIcon style={{ margin: 10 }} />
                <EmailIcon style={{ margin: 10 }} />
            </div>
            <div className='web-name'>
                <h1>Name</h1>
            </div>
            <div className='btn'>
                <button className='btn-base'>Subscribe</button>
            </div>
            <div className='ham-container'>
                <input className='checkbox' type='checkbox' name='' id='' />
                <div className='ham-lines'>
                    <span className='line line1'></span>
                    <span className='line line2'></span>
                    <span className='line line3'></span>
                </div>
            </div>
        </div>
    )
}

export default Header;