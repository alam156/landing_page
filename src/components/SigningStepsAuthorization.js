import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image3 from '../album/quicksign_sign.png';
import Image4 from '../album/quicksign_authorization_1.png';


export const SigningStepsAuthorization = (props) => {
    //export const Features = (props) => {
    return (
        <Container  >
            <div className="row">
                <div className="section-title text-center">
                    <h2>Sign Document and Authorization</h2>
                </div>

            </div>
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
                                    ? <h4 style={{ lineHeight: "1.8" }}>{props.data.Signing.join(" ")}</h4>
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
                                    ? <h4 style={{ lineHeight: "1.8" }}>{props.data.Authorization.join(" ")}</h4>
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
