import React, { useEffect, useState, Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import '../styles.css';

export const Complete = props => {
    return (
        <Fragment>
            <Col xs="12">
                <Row>
                    <Col xs="12" className="whiteBorder centerThings">
                        <div>
                            <p>Hello Completed!</p>
                        </div>
                    </Col>
                    <Col xs="12">
                        <ul>
                            <li>testing 1</li>
                            <li>testing 2</li>
                            <li>testing 3</li>
                            <li>testing 4</li>
                            <li>testing 5</li>
                            <li>testing 6</li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        </Fragment>
    )
}