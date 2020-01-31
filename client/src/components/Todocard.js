import React, { Fragment } from "react";
import { Card, Col } from "reactstrap";
import "../styles.css";

export const Todocard = (props) => {

    return (
        <Fragment>
            <Col xs='12' md='4'>
            <div className="todoCard">
                <Card className="todoCard shadow" style={{ borderColor: '#333' }}>
                    <h1 className="todo text-center">To-Do</h1>
                    <h2>Name: {props.name}</h2>
                    <ul>
                    {props.list}
                    </ul>
                </Card>
            </div>

            </Col>
        </Fragment>
    )
}