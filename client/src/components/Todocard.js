import React, { Fragment } from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import "../styles.css";

export const Todocard = (props) => {

const Todos = require("../todos.json")

    return (
        <Fragment>
            {Todos.map((todo,i) => 
                <Col xs='12' md='4' key={i}>
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
                            <div className='d-flex justify-content-center align-self-end'>
                            <Button color="success">Save!</Button>
                            </div>
                        </ul>
                    </Card>
                </div>

                </Col>
            )}
        </Fragment>
    )
}