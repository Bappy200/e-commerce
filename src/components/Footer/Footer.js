import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../assects/logo.png'
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
                            <li><a href='/link'>Orders</a></li>
                            <li><a href='/link'>Orders</a></li>
                            <li><a href='/link'>Orders</a></li>
                            <li><a href='/link'>Orders</a></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.footerContent}>
                        <h3>PRODUCTS</h3>
                        <ul>
                            <li><a href='/link'>watch</a></li>
                            <li><a href='/link'>bag</a></li>
                            <li><a href='/link'>mobile</a></li>
                            <li><a href='/link'>laptop</a></li>
                            <li><a href='/link'>mobile</a></li>
                            <li><a href='/link'>laptop</a></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.footerContent}>
                        <h3>OUR COMPANY</h3>
                        <ul>
                            <li><a href='/link'>Delivery</a></li>
                            <li><a href='/link'>Legal Notice</a></li>
                            <li><a href='/link'>About us</a></li>
                            <li><a href='/link'>Accout</a></li>
                            <li><a href='/link'>Legal Notice</a></li>
                            <li><a href='/link'>About us</a></li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} md={6} xl={3} xxl={3}>
                    <div className={classes.importentLinks}>
                        <div className={classes.soclaLinks}>
                            <h6>Followe us</h6>
                            <ul>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "github"]} /></a></li>
                            </ul>
                        </div>
                        <div className={classes.soclaLinks}>
                            <h6>pyament</h6>
                            <ul>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "linkedin"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
                                <li><a herf="/link"><FontAwesomeIcon icon={["fab", "github"]} /></a></li>
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