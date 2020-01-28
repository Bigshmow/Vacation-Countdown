import React from "react";
import { Container, Row, Col } from 'reactstrap';

function NoMatch() {
  return (
    <Container>
      <Row className="mainRow">
        <Col size="xs-12">
            <h1> -- 404: This is not the page you are looking for.</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
