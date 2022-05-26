import React from 'react'
import classes from './NavBar.module.css'
import logo from '../../assects/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'




const NavigationBar = () => {
  const quanitity = useSelector(state => state.cart.quanitity);
  const currentUser = useSelector(state => state.user.currentUser);


  

  return (
      <header className={classes.headerSection}>
        <div className={classes.logoArea}>
          <Link to="/">
              <img src={logo} alt="logo"/>
          </Link>
        </div>
        <nav className={classes.menu}>
          {
            currentUser ? (<div className={classes.currentUser}>
              <span>{currentUser.userName}</span>
            </div>):(<div className={classes.links}>
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">Regiter</Link>
            </div>)
          }
          <Link to="/order">
            <div className={classes.shopingIcon}>
              <FontAwesomeIcon icon={faCartShopping}/>
              <span>{quanitity}</span>
            </div>
          </Link>
          
        </nav>
      </header>
  )
}

export default NavigationBar

