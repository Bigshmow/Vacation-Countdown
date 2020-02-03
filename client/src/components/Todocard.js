import React, { Fragment } from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import "../styles.css";

const alertMe = () => {
    alert("Working!!")
}

const loadTodos = () => {
    // psuedo for now
    // call getTodos, then set state
    // will need to change how we map
}

const handleListUpdate = () => {
    // psuedo for now
    // set state with new todo item for person id
    // call updateTodo and update state
}

export const Todocard = (props) => {

const Todos = require("../todos.json")

    return (
        <Fragment>
            {Todos.map((todo,i) => 
                <Col xs='12' md='4' key={i} id={i}>
                <div className="todoCard">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {todo.name}</h1>
                        <ul>
                        {todo.list.map( (item, i) =>
                            <FormGroup check>
                                <Label check key={i}>
                                    <Input type="checkbox" />{' '}
                                    {item}
                                </Label>
                            </FormGroup>
                            )}
                            <div className='d-flex justify-content-center'>
                            <Label for="taskAdd"></Label>
                            <Input type="text" name="Add" id="taskAdd" placeholder="Add a new task" />
                            <Button color="success" onClick={alertMe}>Save!</Button>
                            </div>
                        </ul>
                    </Card>
                </div>

                </Col>
            )}
        </Fragment>
    )
}