import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Addtask = props => {

    const [task, setTask] = useState("task")
    const [name, setName] = useState("Both")

    const handleListUpdate = () => {
        // psuedo for now
        // set state with new todos item for person id
        alert("Added new task: " + task + " for " + name)
        // call addTodo and update state
        API.addTodo()
        // .then(window.location.href="/")
    }
    return (
        <Fragment>
            <Col xs='12' sm='4'>
                <Card className="shadow" style={{ borderColor: '#333'}}>
                <FormGroup>
                        <Input
                        placeholder="Add a task: "
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        />
                        <Input
                        placeholder="For whom? "
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                </FormGroup>
                        <Button onClick={handleListUpdate} color="success" size="large"><h3>Add this task!</h3></Button>
                </Card>
            </Col>
        </Fragment>
    )
    }