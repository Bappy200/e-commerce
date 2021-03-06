import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import calculateTime from '../CalculatTime/calculateTime';
import classes from './Event.module.css'

function MainEvent() {
    const [eventTime,setEventTime] = useState(calculateTime("02/20/2023"));

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setEventTime(calculateTime("02/20/2023"))
        }, 1000)
        return ()=> clearTimeout(timer);
    });
  return (
    <Col sm={12} md={12} xl={5}>
    <div className={classes.eventInfo}>
        <h3>Event section</h3>
        <div className={classes.eventTimeArea}>
            {Object.keys(eventTime).length !== 0 ? (
                <Row style={{gap: "20px 0px"}}>
                    <Col xs={6} sm={3} md={3}>
                        <div className={classes.eventTime}>
                            <p>{eventTime.days}</p>
                            <span>days</span>
                        </div>
                    </Col>
                    <Col xs={6} sm={3} md={3}>
                        <div className={classes.eventTime}>
                            <p>{eventTime.hours}</p>
                            <span>hours</span>
                        </div>
                    </Col>
                    <Col xs={6} sm={3} md={3}>
                        <div className={classes.eventTime}>
                            <p>{eventTime.minutes}</p>
                            <span>minutes</span>
                        </div>
                    </Col>
                    <Col xs={6} sm={3} md={3}>
                        <div className={classes.eventTime}>
                            <p>{eventTime.seconds}</p>
                            <span>seconds</span>
                        </div>   
                    </Col>   
                </Row>
            ) : (<span className={classes.timeUp}>Time up...</span>)}
        </div>
        <button className='global-btn'>enter now</button>
    </div>
</Col>
  )
}

export default MainEvent