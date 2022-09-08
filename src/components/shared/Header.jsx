import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/header.css'

const Header = () => {
  return (
    <header className='header'>
      <NavLink className='navigation' to='/'>
        <h1 className='header__logo'>E-comerce</h1>
      </NavLink>
      <nav className='header__nav'>
        <ul className='header__list'>
          <NavLink className={({ isActive }) => isActive && 'active-link'} to='/login' >
            <li className="header__item"><i className='bx bx-user'></i><span>Login</span></li>
          </NavLink>
          <NavLink className={({ isActive }) => isActive && 'active-link'} to='/purchases' >
            <li className="header__item"><i className='bx bx-purchase-tag-alt'></i>
              <span>Purchases</span></li>
          </NavLink>
          <NavLink className={({ isActive }) => isActive && 'active-link'} to='/cart'>
            <li className="header__item"><i className='bx bx-cart'></i><span className='header__link'>Cart</span></li>
          </NavLink>

        </ul>
      </nav>
    </header>
  )
}

export default Header