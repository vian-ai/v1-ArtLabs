import React from 'react';
import '../Styles/Contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, beatae eum. Veritatis ducimus
                inventore a quisquam eligendi!</p>
            <div className='container'>
                <form>
                    <div className='row-container'>
                        <div className='row'>
                            <div className='cont-label'>
                                <label for='fname'>First Name</label>
                            </div>
                            <div className='cont-placeholder'>
                                <input type='text' id='fname' name='firstname' placeholder='Your Name' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='cont-label'>
                                <label for='lname'>Email Address</label>
                            </div>
                            <div className='cont-placeholder'>
                                <input type='text' id='email' name='email' placeholder='Email Address' />
                            </div>
                        </div>
                    </div>
                    <div className='subject-row'>
                        <div className='cont-subject'>
                            <label for='subject'>Subject</label>
                        </div>
                        <div className='cont-subject-placeholder'>
                            <textarea id='subject' name='subject' placeholder='Write something...'></textarea>
                        </div>
                    </div>
                    <div className='button-row'>
                        <input type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;