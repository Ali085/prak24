import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
function NavbarAdd() {
  return (
    <nav className='AddNav'>
      <div className='navDiv'>
        <div className="logo"><Link to={"/"}>OneSchool</Link></div>
        <div className="list">
          <ul>
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/addpage"}><li>Add Page</li> </Link>
          </ul>
        </div>
        <div className="contact"><button>CONTACT US</button></div>
      </div>
    </nav>
  )
}

export default NavbarAdd