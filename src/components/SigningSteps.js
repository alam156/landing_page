import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../album/quicksign_registration.png';
import Image2 from '../album/quicksign_device_registration.png';
export const SigningStepss = (props) => {
    //export const Features = (props) => {
    return (
        <Container  >
            <div className="row">
                <div className="section-title text-center">
                    <h2>Registration and Device Registration</h2>
                </div>

            </div>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image1} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '350 px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ol className="list-group">
                            <p>
                                {props.data
                                    ? <h4 style={{ lineHeight: "1.8" }}>{props.data.Registration.join(" ")}</h4>
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
                            <p>
                                {props.data
                                    ? <h4 style={{ lineHeight: "1.8" }}>{props.data.Device_Registration.join(" ")}</h4>
                                    : "Loading..."}
                            </p>

                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image2} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '350 px', objectFit: 'cover' }} />
                </Col>
            </Row>
        </Container>



    );
};