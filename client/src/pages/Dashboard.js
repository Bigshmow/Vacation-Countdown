import React from 'react';
import { Container, Row } from 'reactstrap';
import { Addtask } from "../components/Addtask";
import { Countdown } from '../components/Countdown';
import { useSelector } from "react-redux";
import { TodocardDND } from '../components/TodocardDND';
import '../styles.css';

export const Dashboard = props => {

    const todoData = useSelector(state => {
        return state.data.todoData
    })

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
                <TodocardDND todoObj={todoData.both}/>
                <TodocardDND todoObj={todoData.denise}/>
                <TodocardDND todoObj={todoData.devin}/>
            </Row>
        </Container>
    )
}