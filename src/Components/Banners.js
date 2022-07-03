import { useEffect, useState } from 'react';
import ImgCarousel from './ImgCarousel';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/Banners.css';
import apiUrl from '../apiUrl';

const Banners = () => {
    const [bannerList, setBannerList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/banners`, {
        })
            .then((res) => res.json())
            .then((data) => {
                setBannerList(data)
                console.log(data)
            })
    }, []);

    const listItems = bannerList.map((item, i) => {
        return (
            <div className='banner-container'>
                <div className='banner-img'>
                    <img src={item.imageUrl} style={{ width: 400 }} />
                </div>
            </div>
        )
    })

    return (
        <div id='banners'>
            <h1>Banners</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at? Non asperiores ad omnis laborum iste odio perferendis doloremque ipsum veritatis, quis alias nisi ut! Facilis, aperiam. Sapiente, commodi enim!</p>
            <ImgCarousel />
            <div className='banner-card'>
                {listItems}
            </div>
        </div>
    )
}

export default Banners;