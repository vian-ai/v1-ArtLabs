import { useEffect, useState } from 'react';
import '../Styles/Logos.css';
import apiUrl from '../apiUrl';

const Logos = () => {
    const [logoList, setLogoList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/logos`, {
        })
            .then((res) => res.json())
            .then((data) => {
                setLogoList(data)
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
            <div className='display-container'>
                <div className='display-img'>
                    <img src={item.logo} alt='logo image' style={{ width: 700 }} />
                </div>
            </div>
        )
    });

    return (
        <div id='logos'>
            <h1>Logos</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at? Non asperiores ad omnis laborum iste odio perferendis doloremque ipsum veritatis, quis alias nisi ut! Facilis, aperiam. Sapiente, commodi enim!</p>
            <div className='card-display'>
                {logoDisplay}
            </div>
        </div>
    )
}

export default Logos;