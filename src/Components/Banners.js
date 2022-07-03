import { useEffect, useState } from 'react';
import ImgCarousel from './ImgCarousel';
import LinkIcon from '@mui/icons-material/Link';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../Styles/Banners.css';
import apiUrl from '../apiUrl';

const Banners = () => {
    const [bannerList, setBannerList] = useState([]);
    const [visible, setVisible] = useState(6); // set default banners to render

    useEffect(() => {
        fetch(`${apiUrl}/banners`, {
        })
            .then((res) => res.json())
            .then((data) => {
                setBannerList(data)
                // console.log(data)
            });
    }, []);

    const showMore = () => {
        setVisible((prev) => prev + 6); // displays 6 more banners when button is clicked
    };

    // map through banner list, display default number of banners set to render (6)
    const listItems = bannerList.slice(0, visible).map((item, i) => {
        return (
            <div className='banner-container'>
                <div className='banner-img'>
                    <img src={item.imageUrl} style={{ width: 400 }} alt='banner image' />
                </div>
            </div>
        )
    });

    return (
        <div id='banners'>
            <h1>Banners</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at? Non asperiores ad omnis laborum iste odio perferendis doloremque ipsum veritatis, quis alias nisi ut! Facilis, aperiam. Sapiente, commodi enim!</p>
            <ImgCarousel />
            <div className='banner-card'>
                {listItems}
            </div>
            <div className='load-more'>
                <button className='more-btn' onClick={showMore}>+ More</button>
            </div>
        </div>
    )
}

export default Banners;