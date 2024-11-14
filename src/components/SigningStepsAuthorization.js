import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image3 from '../album/quicksign_sign.png';
import Image4 from '../album/quicksign_authorization_1.png';


export const SigningStepsAuthorization = (props) => {
    //export const Features = (props) => {
    return (
        <Container  >
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image3} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '350 px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ol className="list-group">
                            {/*<p className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3>*/}
                            {/*</p>*/}
                            <p>
                                {props.data
                                    ? props.data.Signing.join(" ")
                                    : "Loading..."}
                            </p>

                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            {/*<p className="list-group-item list-group-item-primary"><h3>Step 4 : Authorization</h3></p>*/}
                            <p>
                                {props.data
                                    ? props.data.Authorization.join(" ")
                                    : "Loading..."}
                            </p>

                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image4} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '350 px', objectFit: 'cover' }} />
                </Col>
            </Row>

        </Container>
    );
};
