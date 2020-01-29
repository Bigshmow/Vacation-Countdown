import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Todocard } from '../components/Todocard';
import '../styles.css';

const handleTime = () => {
    const diff = +new Date("2020-05-07") - +new Date();
    let timeLeft = {};

    if (diff > 0) {
        timeLeft = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24 ),
            minutes: Math.floor((diff / 1000 * 60) % 60),
            seconds: Math.floor((diff / 1000) % 60)
        };
    }
    return timeLeft;
}

export const Dashboard = props => {
    return (
        <Container>
            <Row className="mainRow">
                <Col xs='12'>
                    <h1>Vacation Countdown!!</h1>
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