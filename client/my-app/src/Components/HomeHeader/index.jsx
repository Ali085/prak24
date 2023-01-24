import React from 'react'
import './index.scss'
function HomeHeader() {
  return (
    <>
    <section className='HomeHeader'>
        <div className="HeaderDiv">
            <div className="HeaderTxt">
                <h3>Learn From The Expert</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <button>ADMISSON NOW</button>
            </div>
        </div>
        <div className="HeaderInp">
            <h3>Sign Up</h3>
            <input type="text" placeholder='Email Adress' />
            <input type="password" placeholder='Password' />
            <input type="password" placeholder='Re-Password' />
            <button>SIGN IN</button>
        </div>
    </section>
    </>
  )
}

export default HomeHeader