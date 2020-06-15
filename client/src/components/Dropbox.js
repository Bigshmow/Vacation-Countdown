import React, { useState, useCallback } from "react";
import { Button, Card, Col } from "reactstrap";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { handleComplete } from "../store/data";
import { Complete } from "./Complete";
import "../styles.css";

export const Dropbox = ({ progress, path, ...props }) => {

    const dispatch = useDispatch();

    const [{ canDrop }, drop] = useDrop({
        accept: progress,
        drop: (item, monitor) => {
            console.log("drop", item);
            handleTodo(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    });

    const handleTodo = useCallback((todo) => {
        const prog = progress === "comp" ? false : true;
        dispatch(handleComplete(path, todo.name, prog));
    })

    return (
        <>
        <div ref={drop} className="progCard">
            <h3 className="text-center">{progress === "comp" ? "In progress: " : "Completed: "}</h3>
            <div className="text-center">
                {props.children}
            </div>
        </div>
        </>
    )

}