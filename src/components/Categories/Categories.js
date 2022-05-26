import React from 'react'
import { Col, Container, Row, Toast } from 'react-bootstrap'
import classes from './Categories.module.css'
import bag from '../../assects/categories/bag.png'
import shoes from '../../assects/categories/shoes.png'
import watch from '../../assects/categories/watch.png'
import { Link } from 'react-router-dom'
function Categories() {
  return (
    <Container>
        <h3 className={classes.title}>Categories</h3>
        <Row style={{gap:"20px 0px"}}>
            <Col sm={12} md={4}>
                <Link to="/productList/C">
                    <Toast style={{border:"0px", width:"100%"}}>
                        <Toast.Body style={{textAlign:"center"}}>
                            <h4 className={classes.categoriesHeader}>bag</h4>
                            <img className={classes.categoriesImage} src={bag} alt="shoes"/>
                        </Toast.Body>
                    </Toast>
                </Link>
            </Col>
            <Col sm={12} md={4}>
                <Link to="/productList/A">
                    <Toast style={{border:"0px",width:"100%"}}>
                        <Toast.Body style={{textAlign:"center"}}>
                            <h4 className={classes.categoriesHeader}>watch</h4>
                            <img className={classes.categoriesImage} src={watch} alt="watch"/>
                        </Toast.Body>
                    </Toast>
                </Link>
            </Col>
            <Col sm={12} md={4}>
                <Link to="/productList/E">
                    <Toast style={{border:"0px", width:"100%"}}>
                        <Toast.Body style={{textAlign:"center"}}>
                            <h4 className={classes.categoriesHeader}>shoes</h4>
                            <img className={classes.categoriesImage} src={shoes} alt="watch"/>
                        </Toast.Body>
                    </Toast>
                </Link>
            </Col>
        </Row>
    </Container>
  )
}

export default Categories