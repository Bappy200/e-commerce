import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'
import classes from "./LoginPage.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/apiCalls'
function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     
    const dispatch = useDispatch();
    const {isFetching, error, currentUser} = useSelector(state => state.user);
    

    console.log(currentUser, isFetching, error)

    //HANDLER LOGIN REQUIST
    const handlerLogin = async()=>{
        await loginUser(dispatch, {email, password})
        
    }
   
  return (
    <>
         
        <Container>
        <NavigationBar/>
            <div className={classes.LoginSection}>
                <div className={classes.loginContainer}>
                    <h2>Login</h2>
                    <div className={classes.inputField}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <input type="email" placeholder="Email Address" required onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className={classes.inputField}>
                        <FontAwesomeIcon icon={faLock}/>
                        <input type="password" placeholder="Password" required onChange={(e)=> setPassword(e.target.value)}/>
                    </div>
                    <div className={classes.createAccount}>
                        <Link to="/signup">create account</Link>
                    </div>
                    <div className={classes.button_area}>
                        <button className={`global-btn ${classes.login_button}`} onClick={handlerLogin}>Login</button>
                    </div>
                    {error && <p style={{color:"red",textTransform:"capitalize", textAlign:"center", fontSize:"13px"}}>something is worring</p>}
                    <span className={classes.or}>or</span>
                    <div className={classes.otherLoingSystem}>
                        <div className={classes.loginSystem}>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </div>
                        <div className={classes.loginSystem}>
                            <FontAwesomeIcon icon={faGoogle} />
                        </div>
                        <div className={classes.loginSystem}>
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default LoginPage