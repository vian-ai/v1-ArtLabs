import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <div className='contact-container'>
                <form>
                    <div className='row'>
                        <div>
                            <input
                                type='text'
                                id='name'
                                name='firstName'
                                placeholder='Name'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                placeholder='Email'
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <label for='subject'>Subject</label>
                        <div>
                            <textarea
                                id='subject'
                                name='subject'
                                placeholder='Write a message...'
                                style={{ height: 200, width: 400 }}
                                >
                            </textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;