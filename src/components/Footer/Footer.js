import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div style={{background: "#131E2C"}}>
         <Container style={{paddingBottom:"0px", }}>
        <footer className={classes.footerSection}>
            <Row>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.footerContent}>
                        <h3>e-commerce</h3>
                        <p>Welcome to the one of the world's best known company in the industry.</p>
                        <ul>
                            <li> Orders  </li>
                            <li> Orders  </li>
                            <li> Orders  </li>
                            <li> Orders  </li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.footerContent}>
                        <h3>PRODUCTS</h3>
                        <ul>
                            <li> watch  </li>
                            <li> bag  </li>
                            <li> mobile  </li>
                            <li> laptop  </li>
                            <li> mobile  </li>
                            <li> laptop  </li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.footerContent}>
                        <h3>OUR COMPANY</h3>
                        <ul>
                            <li> Delivery  </li>
                            <li> Legal Notice  </li>
                            <li> About us  </li>
                            <li> Accout  </li>
                            <li> Legal Notice  </li>
                            <li> About us  </li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.importentLinks}>
                        <div className={classes.soclaLinks}>
                            <h6>Followe us</h6>
                            <ul>
                                <li>   <FontAwesomeIcon icon={["fab", "facebook"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "linkedin"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "google"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "github"]} />  </li>
                            </ul>
                        </div>
                        <div className={classes.soclaLinks}>
                            <h6>pyament</h6>
                            <ul>
                                <li>   <FontAwesomeIcon icon={["fab", "facebook"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "linkedin"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "google"]} />  </li>
                                <li>   <FontAwesomeIcon icon={["fab", "github"]} />  </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </footer>
    </Container>
    </div>
   
  )
}

export default Footer