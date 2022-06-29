import React from 'react';

const Home = () => {
    const tabs = [
        {
            tab: 'Banners'
        },
        {
            tab: 'Emotes'
        },
        {
            tab: 'Logos'
        }
    ];

    const listTabs = tabs.map((item) => {
        return (
            <div className='tab-containers'>
                {item.tab}
            </div>
        )
    });

    return (
        <div>
            <h1>Home</h1>
            <div className='card-containers'>
                {listTabs}
            </div>
            <div className='sub-container'>
                <div className='content'>
                    <h2>Subscribe to our Site</h2>
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