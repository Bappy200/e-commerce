import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Slider from '../Slider/Slider'
import classes from './Layout.module.css'

function Layout({children}) {
  return (
    <>
        <div className={classes.topSection}>
            <NavigationBar/>
            <Slider/>
        </div>
        {children}
    </>
  )
}

export default Layout