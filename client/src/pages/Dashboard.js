import React from 'react';
import { Container, Row } from 'reactstrap';
import { Addtask } from "../components/Addtask";
import { Countdown } from '../components/Countdown';
import { Todocard } from '../components/Todocard';
import '../styles.css';

export const Dashboard = props => {

    return (
        <Container>
            <Row className="mainRow">
                <Countdown/>
            </Row>
            <br></br>
            <Row className="addTask">
                <Addtask />
            </Row>
            <br></br>
            <Row>
                <Todocard/>
            </Row>
        </Container>
    )
}