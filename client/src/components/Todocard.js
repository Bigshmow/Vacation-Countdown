import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col} from "reactstrap";
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

useEffect(() => {
    API.getTodos()
        .then( res => setBothP(res.data[0].inProgress));
    API.getTodos()
        .then( res => setDeniseP(res.data[1].inProgress));
    API.getTodos()
        .then( res => setDevinP(res.data[2].inProgress)); 
},[]);

useEffect(() => {
    API.getTodos()
        .then( res => setBothC(res.data[0].complete));
    API.getTodos()
        .then( res => setDeniseC(res.data[1].complete));
    API.getTodos()
        .then( res => setDevinC(res.data[2].complete)); 
},[]);

const bothPush = (todo) => {
    const thing = todo;
    let newCarr = [...bothComp];
    let newParr = bothProg.filter( thing => thing !== todo )
    newCarr.push(thing)
    setBothC(newCarr)
    setBothP(newParr)
}

const denisePush = (todo) => {
    const thing = todo;
    let newCarr = [...deniseComp];
    let newParr = deniseProg.filter( thing => thing !== todo )
    newCarr.push(thing)
    setDeniseC(newCarr)
    setDeniseP(newParr)
}

const devinPush = (todo) => {
    const thing = todo;
    let newCarr = [...devinComp];
    let newParr = devinProg.filter( thing => thing !== todo )
    newCarr.push(thing)
    setDevinC(newCarr)
    setDevinP(newParr)
}

const saveTodos = (save) => {

    console.log("This will send " + save + " to the api.")
}

// const Todos = require("../todos.json")
let save = "blahhhh";
    return (
        <Fragment>
                <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {progArr[0]}</h1>
                        <div className="boxCard">
                        <div className="progCard">
                        <h3>In progress: </h3>
                            <ul>
                                {bothProg.map((todo,i) =>
                                    <p key={i} onClick={e => bothPush(todo, e)}>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {bothComp.map((todo,i) =>
                                    <p key={i} >{todo}</p>
                                    )}
                            </ul>
                        </div>
                        </div>
                        <Button onClick={e => saveTodos(save, e)} style={{marginTop: "auto"}} color="primary" className="bottomButton">Save!</Button>
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
                                    <p key={i} onClick={e => denisePush(todo, e)}>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {deniseComp.map((todo,i) =>
                                    <p key={i} >{todo}</p>
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
                                    <p key={i} onClick={e => devinPush(todo, e)}>{todo}</p>
                                    )}
                            </ul>
                        </div>
                        <div className="compCard">
                        <h3>Completed: </h3>
                            <ul>
                                {devinComp.map((todo,i) =>
                                    <p key={i} >{todo}</p>
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