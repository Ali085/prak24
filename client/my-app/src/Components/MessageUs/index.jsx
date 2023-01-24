import React from 'react'
import './index.scss'
function MessageUs() {
    return (
        <>
            <section className='Message'>
                <div className='MessageDiv'>
                    <div className='messageDivHeader'>
                        <h2>Message Us</h2>
                        <p>Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi. </p>
                    </div>
                    
                    <div className='MessageDivNameInp'>
                        <input type="text" placeholder='First name' />
                        <input type="text" placeholder='Last name' />
                    </div>
                    <div className='MessageDivEmail'>
                        <input type="text" placeholder='Subject' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div className='MessageDivTextArea'>
                        <textarea  placeholder='Write your message here>>' ></textarea>
                    </div>
                    <div className='MessageBtn'>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default MessageUs