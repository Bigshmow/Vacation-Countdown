import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Todocard = (props) => {

const progArr = [ "Both", "Denise", "Devin"];

const [bothProg, setBothP ] = useState([]);
const [deniseProg, setDeniseP ] = useState([]);
const [devinProg, setDevinP ] = useState([]);

const [bothComp, setBothC ] = useState([]);
const [deniseComp, setDeniseC ] = useState([]);
const [devinComp, setDevinC ] = useState([]);

// useEffect(() => {
//     API.getTodos()
//         .then( res => setBothP(res.data[0].inProgress));
//     API.getTodos()
//         .then( res => setDeniseP(res.data[1].inProgress));
//     API.getTodos()
//         .then( res => setDevinP(res.data[2].inProgress)); 
// },[]);

// useEffect(() => {
//     API.getTodos()
//         .then( res => setBothC(res.data[0].complete));
//     API.getTodos()
//         .then( res => setDeniseC(res.data[1].complete));
//     API.getTodos()
//         .then( res => setDevinC(res.data[2].complete)); 
// },[]);

const statePush = () => {
    const thing = "thing";
    let newArr = [...bothComp]
    newArr.push(thing)
    setBothC(newArr)
}

// const Todos = require("../todos.json")

    return (
        <Fragment>
            <Button onClick={statePush}>clicking test</Button>
                <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {progArr[0]}</h1>
                        <div className="boxCard">
                        <div className="progCard">
                        <h3>In progress: </h3>
                            <ul>
                                {bothProg.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {bothComp.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        </div>
                        <Button style={{marginTop: "auto"}} color="primary" className="bottomButton">Save!</Button>
                    </Card>
                    </div>
                </Col>
                <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {progArr[1]}</h1>
                        <div className="boxCard">

                        <div className="progCard">
                        <h3>In progress: </h3>
                            <ul>
                                {deniseProg.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {deniseComp.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        </div>
                        <Button style={{marginTop: "auto"}} color="primary" className="bottomButton">Save!</Button>
                    </Card>
                    </div>
                </Col>
                <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {progArr[2]}</h1>
                        <div className="boxCard">
                        <div className="progCard">
                        <h3>In progress: </h3>
                            <ul>
                                {devinProg.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {devinComp.map((todo,i) =>
                                    <p>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        </div>
                        <Button style={{marginTop: "auto"}} color="primary" className="bottomButton">Save!</Button>
                    </Card>
                    </div>
                </Col>
        </Fragment>
    )
}