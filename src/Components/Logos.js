import { useEffect, useState } from 'react';
import LinkIcon from '@mui/icons-material/Link';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import '../Styles/Logos.css';
import apiUrl from '../apiUrl';

const Logos = () => {
    const [logoList, setLogoList] = useState([]);
    const [visible, setVisible] = useState(6);

    useEffect(() => {
        fetch(`${apiUrl}/logos`, {
        })
            .then((res) => res.json())
            .then((data) => {
                setLogoList(data)
                // console.log(data)
            });
    }, []);

    const logos = [
        {
            logo: 'https://i.imgur.com/0WLX4wg.png',
            artist: 'koyufishy',
            social: 'https://twitter.com/koyufishy'
        },
        {
            logo: 'https://i.imgur.com/nQReETd.png',
            artist: 'koyufishy',
            social: 'https://twitter.com/koyufishy'
        }
    ];

    const logoDisplay = logos.map((item) => {
        return (
            <div>
                <div className='display-container'>
                    <div className='display-img'>
                        <img src={item.logo} alt='logo image' style={{ width: 700 }} />
                    </div>
                </div>
                <div className='display-icons'>
                    <a href={item.social} target='_blank' className='link-icon'><LinkIcon sx={{ fontSize: 28, m: 1 }} /></a>
                    <div className='mag-icon'>
                        <ZoomInIcon sx={{ fontSize: 28, m: 1 }} />
                    </div>
                </div>
            </div>
        )
    });

    const listLogos = logoList.slice(0, visible).map((item) => {
        return (
            <div className='logo-container'>
                <div className='logo-img'>
                    <img src={item.imageUrl} alt='logo image' style={{ width: '90%' }} />
                </div>
            </div>
        )
    });

    const showMore = () => {
        setVisible((prev) => prev + 6);
    };

    return (
        <div id='logos'>
            <h1>Logos</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at? Non asperiores ad omnis laborum iste odio perferendis doloremque ipsum veritatis, quis alias nisi ut! Facilis, aperiam. Sapiente, commodi enim!</p>
            <div className='card-display'>
                {logoDisplay}
            </div>
            <div className='logo-card'>
                {listLogos}
            </div>
            <div className='load-more'>
                <button className='more-btn' onClick={showMore}>+ More</button>
            </div>
        </div>
    )
}

export default Logos;