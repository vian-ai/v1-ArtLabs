import React from 'react';
import '../Styles/Shop.css';

const Shop = () => {
    const shopItems = [
        {
            bannerUrl: 'https://i.imgur.com/EbajYRU.png',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum, cum adipisci sapiente necessitatibus facilis, et corporis ducimus laudantium repellendus ex itaque ipsam eos modi incidunt autem delectus!',
            price: '$10',
        },
        {
            bannerUrl: 'https://i.imgur.com/Z9BsaWJ.png',
            desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorum, cum adipisci sapiente necessitatibus facilis, et corporis ducimus laudantium repellendus ex itaque ipsam eos modi incidunt autem delectus!',
            price: '$10'
        }
    ];

    const listItems = shopItems.map((item) => {
        return (
            <div className='shop-container'>
                <div className='shop-content'>
                    <img src={item.bannerUrl} alt='banner url' style={{ width: '50%' }} />
                    <p>{item.desc}</p>
                    <h4>{item.price}</h4>
                    <button>Buy</button>
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
            <div className='promo-label'>
                <section className='label-container'>
                    <label id='promo-label'>
                        <input
                            type='text'
                            placeholder='Enter a promo code'
                        />
                        <button className='promo-button'>Apply</button>
                    </label>
                </section>
            </div>
            <div className='shop-cards'>
                {listItems}
            </div>
        </div>
    )
}

export default Shop;