import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search__icon from '../../assets/search_icon.svg'
import bell__icon from '../../assets/bell_icon.svg'
import profile__img from '../../assets/profile_img.png'
import caret__icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__left">
        <img src={ logo } alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar__right">
        <img src={ search__icon } alt="" className='icons' />
        <p>Kids</p>
        <img src={ bell__icon } alt="" className='icons'/>
        <div className="navbar__profile">
          <img src={profile__img } alt="" className='profile'/>
          <img src={ caret__icon } alt=""/>
          <div className="dropdown">
            <p>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
