import React from 'react';
import { Container, Row } from 'reactstrap';
import { Todocard } from '../components/Todocard';
import { Countdown } from '../components/Countdown';
import '../styles.css';

export const Dashboard = props => {

    return (
        <Container>
            <Row className="mainRow">
                <Countdown/>
            </Row>
            <Row>
                <Todocard/>
            </Row>
        </Container>
    )
}