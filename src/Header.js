import React from 'react'
import logo from './images/header-netflix-logo.svg'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      {/*logo */}

      <img className='header__logo' src={logo} alt='netflic-logo ' />
      <div className='header__buttons'>
        {/*   para  */}

        <p>UNLIMITED TV SHOWS & MOVIES</p>

        {/*  join now button*/}
        <a href='https://www.netflix.com/in/'>
          <button className='button__joinnow'>JOIN NOW</button>
        </a>
        {/* sign in button */}
        <a href='https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse%2Fgenre%2F34399'>
          <button className='button__signin'>SIGN IN</button>
        </a>
      </div>
    </div>
  )
}

export default Header
