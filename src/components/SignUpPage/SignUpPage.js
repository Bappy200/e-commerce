import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../NavigationBar/NavigationBar'
import classes from './SignUpPage.module.css'
import { Link } from 'react-router-dom'
import {useForm} from "react-hook-form"


function SignUpPage() {
  const {register,  formState: { errors }, handleSubmit} = useForm();
  // const [userData, setUserData] = useState({
  //   firstName:'',
  //   lastName:'',
  //   userName:'',
  //   email:'',
  //   password:'',
  //   confromPassword:'',
  // })

  const handleSubmitData = (data)=>{
    console.log(data.firstName);
  }
  return (
    <>
        <Container>
            <NavigationBar/>
            <div className={classes.signUpSection}>
                <form className={classes.signUpFrom} onSubmit={handleSubmit(handleSubmitData)}>
                  <h2>create account</h2>
                  <div className={classes.inputFields}> 
                      <div className={classes.twoInputField}>
                         <div className={classes.inputArea}>
                          <div className={classes.inputField}>
                              <FontAwesomeIcon icon={faUser}/>
                              <input type="text" {...register("firstName",{ required: true })} name="firstName" placeholder="Enter your first name"/>
                            </div>
                            {errors.firstName && <p>Frist name is require..</p>}
                         </div>
                         <div className={classes.inputArea}>
                              <div className={classes.inputField}>
                                <FontAwesomeIcon icon={faUser}/>
                                <input type="text" {...register("lastName", { required: true})} name="lastName" placeholder="Enter your last name"/>
                              </div>
                              {errors.lastName && <p>user name is require..</p>}
                         </div>
                          
                      </div>
                      <div className={classes.twoInputField}>
                          <div className={classes.inputArea}>
                              <div className={classes.inputField}>
                                <FontAwesomeIcon icon={faUser}/>
                                <input type="text" {...register("userName", {required: true})} name="userName" placeholder="Enter your user name"/>
                              </div>
                              {errors.userName && <p>User name is require..</p>}
                          </div>
                          <div className={classes.inputArea}>
                              <div className={classes.inputField}>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                <input type="email" {...register("email",
                                  {required: true,
                                  pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                                name="email" placeholder="Enter your email address"/>
                              </div>
                              {errors.email && <p>email name is require..</p>}
                          </div>
                      </div>
                      <div className={classes.twoInputField}>
                          <div className={classes.inputArea}>
                              <div className={classes.inputField}>
                                <FontAwesomeIcon icon={faLock}/>
                                <input type="text" {...register("password", {required: true})} name='password' placeholder="Enter your password"/>
                              </div>
                              {errors.password && <p>password is require..</p>}
                          </div>
                      </div>
                      <div className={classes.haveAccount}>
                          <Link to="/login">i have account</Link>
                      </div>
                  </div>
                  
                  <div className={classes.buttonArea}>
                     <input type="submit" className={`global-btn ${classes.signUpBtn}`} value="sign up"/>
                  </div>

                </form>
            </div>
        </Container>
    </>
  )
}

export default SignUpPage