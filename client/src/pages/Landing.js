import React from "react";
import { Container, Row, Col, Card, Button } from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";

export const Landing = () => {

    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <Container>
            <Row className="mainRow">
                <Col size="xs-12">
                    <Row>
                        <Col size="xs-12">
                            <h1>Vacation Countdown</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="xs-12" >
                            <Row className="d-flex justify-content-center">
                                <Col size="xs-12">
                                    <h2>Login Below</h2>
                                </Col>
                            </Row>
                            <Row >
                                <Col size="xs-6" className="d-flex justify-content-center">
                                    <Card className="mx-auto" style={{ width: '300px', height: '300px' }}>
                                        {!isAuthenticated
                                            ?
                                            <Button onClick={() => loginWithRedirect()}>
                                                Log In
                                            </Button>
                                            :
                                            <Button onClick={() => logout()}>
                                                Log Out
                                            </Button>
                                        }
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}