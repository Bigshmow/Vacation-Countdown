import React, { Fragment } from "react";
import { Card } from "reactstrap";
import "../styles.css";

export const Todocard = (props) => {

    return (
        <Fragment>
            <div className="todoCard">
                <Card className="todoCard" style={{ borderColor: '#333' }}>
                    <h1 className="todo text-center">To-Do</h1>
                    <h2>{props.name}</h2>
                    <ul>
                    <li>{props.list}</li>
                    </ul>
                </Card>
            </div>
        </Fragment>
    )
}