import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Todocard = (props) => {

const loadTodos = () => {
    // psuedo for now
    // call getTodos, then set state
    let allTodos = ["Both","Denise","Devin"];
    return allTodos;
    // will need to change how we map
}

const [allTodos, setTodos] = useState(loadTodos());

useEffect(() => {
    setTodos(loadTodos());
},[]);

let todoTest = [];

Object.keys(allTodos).forEach((todos,i) => {
    todoTest.push(
        <span key={i}>
        {allTodos[todos]}
      </span>
    );
});

const Todos = require("../todos.json")

    return (
        <Fragment>
            {todoTest.map(name => 
                console.log({name}))}

            {Todos.map((todo,i) => 
                <Col xs='12' md='4' key={i} id={i}>
                <div className="todoCard">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do: {todo.name}</h1>
                        <ul>
                        {todo.list.map( (item, i) =>
                            <FormGroup check key={i}>
                                <Label check key={i}>
                                    <Input type="checkbox" />{' '}
                                    {item}
                                </Label>
                            </FormGroup>
                            )}
                        </ul>
                    </Card>
                    </div>
                    
                </Col>
            )}
        </Fragment>
    )
}