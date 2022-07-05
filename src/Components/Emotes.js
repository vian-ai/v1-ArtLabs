import { useState, useEffect } from 'react';
import apiUrl from '../apiUrl';
import '../Styles/Emotes.css';

const Emotes = () => {
    const [emoteList, setEmoteList] = useState([]);
    const [visible, setVisible] = useState(6);
    
    useEffect(() => {
        fetch(`${apiUrl}/emotes`, {
        })
            .then((res) => res.json())
            .then((data) => {
                setEmoteList(data)
                // console.log(data)
            });
    }, []);

    const showMore = () => {
        setVisible((prev) => prev + 6);
    };

    const listEmotes = emoteList.slice(0, visible).map((item, i) => {
        return (
            <div className='emote-container'>
                <div className='emote-img'>
                    <img src={item.imageUrl} style={{ width: '90%' }} alt='emote image' />
                </div>
            </div>
        )
    });

    return (
        <div id='emotes'>
            <h1>Emotes</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, at? Non asperiores ad omnis laborum iste odio perferendis doloremque ipsum veritatis, quis alias nisi ut! Facilis, aperiam. Sapiente, commodi enim!</p>
            <div className='emote-card'>
                {listEmotes}
            </div>
            <div className='load-more'>
                <button className='more-btn' onClick={showMore}>+ More</button>
            </div>
        </div>
    )
}

export default Emotes;