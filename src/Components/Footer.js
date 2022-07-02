import React from 'react';
import '../Styles/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div id='footer'>
            <div className='footer-content'>
                <a href='https://github.com/vian-ai' target='_blank' className='content'>
                    <div>Built and Designed by Anne.</div>
                </a>
                <div className='sm-icons'>
                    <a href='https://github.com/vian-ai' target='_blank' className='github-icon'><GitHubIcon style={{ marginRight: 10, fontSize: 22, marginTop: 10 }} /></a>
                    <a href='mailto:vianne.leee@gmail.com' target='_blank' className='email-icon'><EmailIcon style={{ marginRight: 10, fontSize: 24, marginTop: 10 }} /></a>
                    <a href='https://www.linkedin.com/in/vianneyledesma/' target='_blank' className='linkedin-icon'><LinkedInIcon style={{ marginRight: 10, fontSize: 24, marginTop: 10 }} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;