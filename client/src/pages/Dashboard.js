import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import { Addtask } from "../components/Addtask";
import { Countdown } from '../components/Countdown';
import { Todocard } from '../components/Todocard';
import '../styles.css';
import { Inprogress } from '../components/Inprogress';
import { Complete } from '../components/Complete';
import { Todobox } from '../components/Todobox';

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
            <Row>
                <Col sm={{offset:4,size:4}}>
                    <Todobox className="todoBox">
                        <Row>
                            <Col xs="6" className="dragSource">
                                <Inprogress />
                            </Col>
                            <Col xs="6" className="dragTarget">
                                <Complete />
                            </Col>
                        </Row>
                    </Todobox>
                </Col>
            </Row>
        </Container>
    )
}