import React, { useContext } from 'react'
import classes from './NavBar.module.css'
import logo from '../../assects/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { MyContext } from '../../App'

const NavigationBar = () => {
  const [orders] = useContext(MyContext)
  console.log(orders)
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
              <span>{orders.length}</span>
            </div>
          </Link>
          
        </nav>
      </header>
  )
}

export default NavigationBar

