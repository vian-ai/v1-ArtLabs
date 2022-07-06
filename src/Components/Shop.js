import React from 'react';
import '../Styles/Shop.css';

const Shop = () => {
    const shopItems = [
        {
            bannerUrl: 'https://i.imgur.com/zfhvv3U.png',
            desc: 'The products description goes here!',
            price: '$10',
        },
        {
            bannerUrl: 'https://i.imgur.com/Zwa2Hmw.png',
            desc: 'The products description goes here!',
            price: '$10'
        },
        {
            bannerUrl: 'https://i.imgur.com/DPS2oeA.png',
            desc: 'The products description goes here!',
            price: '$10'
        }
    ];

    const listItems = shopItems.map((item) => {
        return (
            <div className='shop-container'>
                <div className='shop-content'>
                    <img className='prod-img' src={item.bannerUrl} alt='banner url' style={{ width: '100%' }} />
                    <h4 className='prod-price'>{item.price}</h4>
                    <p className='prod-desc'>{item.desc}</p>
                    <button className='add-cart'>Add to Cart</button>
                </div>
            </div>
        )
    });

    return (
        <div id='shop'>
            <h1>Shop</h1>
            <div className='shop-desc'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum, cum adipisci sapiente necessitatibus facilis, et corporis ducimus laudantium repellendus ex itaque ipsam eos modi incidunt autem delectus! Enim, laudantium.</p>
            </div>
            {/* <div className='promo-label'>
                <section className='label-container'>
                    <label id='promo-label'>
                        <input
                            type='text'
                            placeholder='Enter a promo code'
                        />
                        <button className='promo-button'>Apply</button>
                    </label>
                </section>
            </div> */}
            <div className='shop-cards'>
                {listItems}
            </div>
        </div>
    )
}

export default Shop;