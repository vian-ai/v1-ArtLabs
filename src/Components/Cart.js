import React from 'react';
import '../Styles/Cart.css';

const Cart = (props) => {
    const itemsInCart = props.products.map((item, i) => {
        return (
            <div key={item.id} className='shop-items'>
                <img className='cart-img' src={item[0].bannerUrl} />
                <p className='cart-desc'>{item[0].desc}</p>
                <h4 className='cart-price'>{item[0].price}</h4>
            </div>
        )
    });

    return (
        <div id='cart'>
            <div className='shop-header'>
                <h1 className='shop-heading'>Shopping Cart</h1>
                <h4 className='shop-action'>Total Amount</h4>
            </div>
            <div className='items-header'>
                {itemsInCart}
            </div>
        </div>
    )
};

export default Cart;