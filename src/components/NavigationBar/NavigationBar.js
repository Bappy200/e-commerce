import React from 'react'
import classes from './NavBar.module.css'
import logo from '../../assects/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
      <header className={classes.headerSection}>
        <div className={classes.logoArea}>
          <Link to="/">
              <img src={logo} alt="logo"/>
          </Link>
        </div>
        <nav className={classes.menu}>
          <Link to="/order">
            <div className={classes.shopingIcon}>
              <FontAwesomeIcon icon={faCartShopping}/>
              <span>2</span>
            </div>
          </Link>
          
        </nav>
      </header>
  )
}

export default NavigationBar

