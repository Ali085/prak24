import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function Navbar() {
  return (
    <nav>
        <div className='navDiv'>
            <div className="logo"><Link to={"/"}>OneSchool</Link></div>
            <div className="list">
                <ul>
                    <li>Home</li>
                    <li>Add Page</li>
                </ul>
            </div>
            <div className="contact"><button>CONTACT US</button></div>
        </div>
    </nav>
  )
}

export default Navbar