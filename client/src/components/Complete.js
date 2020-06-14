import React from 'react';
import { useDrag } from "react-dnd";
import { Button } from 'reactstrap';
import '../styles.css';

export const Complete = ({todo, complete, ...props}) => {

    const [{isDragging}, drag] = useDrag({
        item: {
            type: complete,
            name: todo.title
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        }),
    })

    return (
        <div ref={drag}>
            <Button color="warning" className="progButton" >{todo.title}</Button>
        </div>
    )
}