import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import '../styles.css';

export const Todobox = props => {
    return (
        <div>{props.children}</div>
    )
}