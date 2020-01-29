import React, { Fragment } from "react";
import { Card } from "reactstrap";
import "../styles.css";

export const Todocard = (props) => {
    return (
        <Fragment>
            <Card className="todoCard">
                <h2>{props.name}</h2>
                <ul>
                   <li>{props.list}</li>
                </ul>
            </Card>
        </Fragment>
    )
}