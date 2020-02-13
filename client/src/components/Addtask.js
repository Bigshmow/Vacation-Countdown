import React, { Fragment, useState} from "react";
import { Button, Card, Col, FormGroup, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Addtask = props => {

    const [task, setTask] = useState("")
    const [name, setName] = useState("")

    const handleListUpdate = (name,task) => {
        if (name === "Both" | "Denise" | "Devin") {
            API.addTodo(name,task)
            window.location = "/"
        } else {
            alert("We can only add tasks for: Both, Denise, or Devin. \n Please enter one of those names.")
        }
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
                        name="task"
                        onChange={e => setTask(e.target.value)}
                        />
                        <Input
                        placeholder="For whom? "
                        type="text"
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        />
                </FormGroup>
                        <Button onClick={e => handleListUpdate(name,task)} color="primary" size="large"><h3>Add this task!</h3></Button>
                </Card>
            </Col>
        </Fragment>
    )
    }