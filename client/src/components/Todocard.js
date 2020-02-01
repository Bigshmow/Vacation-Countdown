import React, { Fragment } from "react";
import { Card, Col } from "reactstrap";
import "../styles.css";

export const Todocard = (props) => {

const Todos = require("../todos.json")

    return (
        <Fragment>
            {Todos.map((todo,i) => 
                <Col xs='12' md='4' key={i}>
                <div className="todoCard">
                    <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                        <h1 className="todo text-center">To-Do</h1>
                        <h2>Name: {todo.name}</h2>
                        <ul>
                        {todo.list.map( (item, i) => 
                            <li key={i}>{item}</li>
                            )}
                        </ul>
                    </Card>
                </div>

                </Col>
            )}
        </Fragment>
    )
}