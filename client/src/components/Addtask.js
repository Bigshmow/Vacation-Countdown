import React, { Fragment, useEffect, useState} from "react";
import { Button, Card, Col, FormGroup, Label, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Addtask = props => {

    const [newTask, setTask] = useState("")
    const [newName, setName] = useState("")

    const handleListUpdate = () => {
        // psuedo for now
        // set state with new todos item for person id
        alert("Added new task: " + newTask + " for " + newName)
        // call addTodo and update state
        API.addTodo(newName, newTask)
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
                        value={newTask}
                        onChange={e => setTask(e.target.value)}
                        />
                        <Input
                        placeholder="For whom? "
                        type="text"
                        value={newName}
                        onChange={e => setName(e.target.value)}
                        />
                </FormGroup>
                        <Button onClick={handleListUpdate} color="success" size="large"><h3>Add this task!</h3></Button>
                </Card>
            </Col>
        </Fragment>
    )
    }