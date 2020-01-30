import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Todocard } from '../components/Todocard';
import '../styles.css';

export const Dashboard = props => {

const handleTime = () => {
    const diff = +new Date("2020-05-07") - +new Date();
    let timeLeft = {};
    
    if (diff > 0) {
        timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
        };
    }
    return timeLeft;
}

const [timeLeft, setTime] = useState(handleTime());

useEffect(() => {
  setTimeout(() => {
      setTime(handleTime());
  }, 1000);
});

const timer = [];

Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }
  
    timer.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

    return (
        <Container>
            <Row className="mainRow">
                <Col xs='12'>
                    <h1>Countdown to Vallarta!!</h1>
                    {timer.length ? timer : <span>Puerto Vallart here we come!!</span>}
                </Col>
            </Row>
            <Row>
                <Col xs='12' md='4'>
                    <Todocard 
                    name="Both"
                    list="stuff"
                    />
                </Col>
            </Row>
        </Container>
    )
}