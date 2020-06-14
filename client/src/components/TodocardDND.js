import React, { useState } from "react";
import { Button, Card, Col } from "reactstrap";
import { useDrop, useDrag } from "react-dnd";
import { Dropbox } from "../components/Dropbox";
import { Complete } from "../components/Complete";
import "../styles.css";

export const TodocardDND = ({ todoObj, ...props }) => {

    const todos = todoObj.todos
    // console.log(todos.filter(e => e.complete === true))

    const [prog, setProg] = useState(todos.filter(e => e.complete === false))
    const [comp, setComp] = useState(todos.filter(e => e.complete === true))

    return (
        <>
            <Col xs='12' md='4' >
                <div className="">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {todoObj.name}</h1>
                        <div className="boxCard">
                            <Dropbox progress="comp">
                            {prog.map((todo, i) =>
                                    // <Button color="warning" className="progButton" key={i} onClick={e => handleCompleted("Both", todo)}>{todo}</Button>
                                    <Complete complete="prog" key={i} todo={todo}/>
                                )}
                            </Dropbox>
                            <Dropbox progress="prog">
                            {comp.map((todo, i) =>
                                    // <Button color="warning" className="progButton" key={i} onClick={e => handleCompleted("Both", todo)}>{todo}</Button>
                                    <Complete complete="comp" key={i} todo={todo}/>
                                )}
                            </Dropbox>
                        </div>
                    </Card>
                </div>
            </Col>
        </>
    )

}