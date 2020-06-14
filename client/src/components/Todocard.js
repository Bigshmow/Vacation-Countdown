import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col, Row} from "reactstrap";
import { useDrop, useDrag } from "react-dnd";
import { Complete } from "../components/Complete.js";
import { inProgress } from "../components/Inprogress";
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

const handleUndo = (name,task) => {
    API.addProg(name,task)
    API.remComplete(name,task)
    window.location = "/"
}

// const[{ isOver }, drop] = useDrop({
//     accept: "todo",
//     drop: (item, monitor) => {
//         console.log("drop", item);
//     },
//     collect: (monitor) => ({
//         isOver: monitor.isOver(),
//         canDrop: monitor.canDrop(),
//     })
// });

const [{isDragging}, drag] = useDrag({
    item: {
        type: "todo",
        id: props.id,
        src: props.src,
        name: props.name
    },
    collect: monitor => ({
        isDragging: !!monitor.isDragging()
    }),
})

    return (
        <Fragment>
                <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {progArr[0]}</h1>
                        <div className="boxCard">
                        <div className="progCard">
                        <h3 className="text-center">In progress: </h3>
                            <div className="text-center">
                                {bothProg.map((todo,i) =>
                                    <Button color="warning" className="progButton" key={i} onClick={e => handleCompleted("Both",todo)}>{todo}</Button>
                                    )}
                            </div>
                        </div>
                        <div className="compCard">
                        <h3 className="text-center">Completed: </h3>
                        <div className="text-center">
                                {bothComp.map((todo,i) =>
                                    <Button color="success" className="compButton" key={i} onClick={e => handleUndo("Both",todo)}>{todo}</Button>
                                    )}
                            </div>
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
                        <h3 className="text-center">In progress: </h3>
                        <div className="text-center">
                                {deniseProg.map((todo,i) =>
                                    <Button color="warning" className="progButton" key={i} onClick={e => handleCompleted("Denise",todo, e)}>{todo}</Button>
                                    )}
                            </div>
                        </div>
                        <div className="compCard">
                        <h3 className="text-center">Completed: </h3>
                        <div className="text-center">
                                {deniseComp.map((todo,i) =>
                                    <Button color="success" className="compButton" key={i} onClick={e => handleUndo("Denise",todo)}>{todo}</Button>
                                    )}
                            </div>
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
                        <h3 className="text-center">In progress: </h3>
                        <div className="text-center">
                                {devinProg.map((todo,i) =>
                                    <Button color="warning" className="progButton" key={i} onClick={e => handleCompleted("Devin",todo, e)}>{todo}</Button>
                                    )}
                            </div>
                        </div>
                        <div className="compCard">
                        <h3 className="text-center">Completed: </h3>
                        <div className="text-center">
                                {devinComp.map((todo,i) =>
                                    <Button color="success" className="compButton" key={i} onClick={e => handleUndo("Devin",todo)}>{todo}</Button>
                                    )}
                            </div>
                        </div>
                        </div>
                    </Card>
                    </div>
                </Col>
        </Fragment>
    )
}