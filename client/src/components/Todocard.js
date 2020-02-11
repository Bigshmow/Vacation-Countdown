import React, { Fragment, useEffect, useState} from "react";
import { Card, Col} from "reactstrap";
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

const handleCompleted = (name,task) => {
    API.addComplete(name,task)
    API.remProg(name,task)
    window.location = "/"
}

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
                                    <p key={i} onClick={e => handleCompleted("Both",todo)}>{todo}</p>
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
                                    <p key={i} onClick={e => handleCompleted("Denise",todo, e)}>{todo}</p>
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
                                    <p key={i} onClick={e => handleCompleted("Devin",todo, e)}>{todo}</p>
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
                    </Card>
                    </div>
                </Col>
        </Fragment>
    )
}