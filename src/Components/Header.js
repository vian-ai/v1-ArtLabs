import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Header = () => {
    return (
        <div>
            <div className='social-icons'>
                <InstagramIcon />
                <TwitterIcon style={{ margin: 10 }} />
                <EmailIcon />
            </div>
            <div className='web-name'>
                <h1>Name</h1>
            </div>
            <div className='btn'>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Header;