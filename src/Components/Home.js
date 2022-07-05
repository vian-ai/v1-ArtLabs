import React from 'react';
import img from '../Assets/placeholder.png';
import '../Styles/Home.css';

const Home = () => {
    const tabs = [
        {
            tab: 'BANNERS',
            route: '/#/banners'
        },
        {
            tab: 'EMOTES',
            route: '/#/emotes'
        },
        {
            tab: 'LOGOS',
            route: '/#/logos'
        }
    ];

    const listTabs = tabs.map((item) => {
        return (
            <div className='tab-container'>
                <div className='tab-text'>
                    <a className='route-tab' href={item.route} style={{ textDecoration: 'none' }}>{item.tab}</a>
                </div>
            </div>
        )
    });

    return (
        <div id='home'>
            <h1>ArtLabs</h1>
            <div className='home-desc'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat quas fuga cumque voluptatum aperiam tempore quisquam rem officiis vero velit saepe accusamus, porro rerum commodi facere minima veritatis earum id!</p>
            </div>
            <div className='home-img'>
                <img
                    src={img}
                    alt='placeholder-image'
                    style={{ width: '100%', height: 400 }}
                />
            </div>
            <div className='card-container'>
                {listTabs}
            </div>
            <div className='sub-container'>
                <div className='sub-content'>
                    <h2>Subscribe To Our Site</h2>
                    <section>
                        <footer>
                            <input
                                type='email'
                                placeholder='Enter your Email Address'
                            />
                            <button>Subscribe</button>
                        </footer>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Home;