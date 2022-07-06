import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
// importing routes
import Header from './Components/Header';
import Home from './Components/Home';
import Banners from './Components/Banners';
import Emotes from './Components/Emotes';
import Logos from './Components/Logos';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Cart from './Components/Cart';

import './Styles/App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (products) => {
    setCart([...cart, products]);
  };

  const removeItemFromCart = (itemToRemove) => {
    let newItem = cart.filter((product, i) => {
      return i !== itemToRemove;
    });

    setCart(newItem)
  }

  return (
    <div className="App">
      <Header />
      <nav className='nav-menu'>
        <Link to='/'>Home</Link>
        <Link to='/banners'>Banners</Link>
        <Link to='/emotes'>Emotes</Link>
        <Link to='/logos'>Logos</Link>
        <Link to='/shop'>Shop</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/banners' element={<Banners />} />
          <Route path='/emotes' element={<Emotes />} />
          <Route path='/logos' element={<Logos />} />
          <Route path='/shop' element={<Shop addToCart={addToCart} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart removeItemFromCart={removeItemFromCart} products={cart} />} />
          <Route />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;