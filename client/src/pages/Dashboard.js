import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Todocard } from '../components/Todocard';
import '../styles.css';

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