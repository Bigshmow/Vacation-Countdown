import React, { useState } from "react";
import { Button, Card, Col } from "reactstrap";
import { useDrop, useDrag } from "react-dnd";
import { Complete } from "./Complete"
import "../styles.css";

export const Dropbox = ({ progress, ...props }) => {

    const [{ canDrop }, drop] = useDrop({
        accept: progress,
        drop: (item, monitor) => {
            console.log("drop", item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    });

    return (
        <>
        <div ref={drop} className="progCard">
            <h3 className="text-center">In progress: </h3>
            <div className="text-center">
                {props.children}
            </div>
        </div>
        </>
    )

}