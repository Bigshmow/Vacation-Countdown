import React, { Fragment, useState} from "react";
import { Button, Card, Col, FormGroup, Input } from "reactstrap";
import API from "../utils/API";
import "../styles.css";

export const Addtask = props => {

    const [task, setTask] = useState("")
    const [name, setName] = useState("")

    const handleListUpdate = (name,task) => {

        switch (name) {
            case "Both":
                API.addTodo(name,task)
                window.location = "/"
                break;
            case "Denise":
                API.addTodo(name,task)
                window.location = "/"
                break;
            case "Devin":
                API.addTodo(name,task)
                window.location = "/"
                break;
        
            default:
                alert("We can only add tasks for: Both, Denise, or Devin. \n Please enter one of those names, thank you.")
                break;
        }
    }

    return (
        <Fragment>
            <Col xs='12' sm='4'>
                <Card className="shadow" style={{ borderColor: '#333'}}>
                <FormGroup>
                        <Input
                        className="text-center"
                        placeholder="What is the task? (enter here)"
                        type="text"
                        value={task}
                        name="task"
                        onChange={e => setTask(e.target.value)}
                        />
                        <Input
                        className="text-center"
                        placeholder="For whom? (enter here)"
                        type="text"
                        value={name}
                        name="name"
                        onChange={e => setName(e.target.value)}
                        />
                </FormGroup>
                        <Button onClick={e => handleListUpdate(name,task)} color="primary" className="mb-3 mr-3 ml-3" size="large"><h3>Add this task!</h3></Button>
                </Card>
            </Col>
        </Fragment>
    )
    }