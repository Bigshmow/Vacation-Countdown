import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles.css';

export const Dashboard = props => {
    return (
        <Container>
            <Row className="mainRow">
                <Col xs='12'>
                    <h1>Vacation Countdown App!!</h1>
                </Col>
            </Row>
        </Container>
    )
}