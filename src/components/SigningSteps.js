import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';
import axios from 'axios';

export const SigningStepss = () => {
    const [data, setData] = useState({
        Registration: [],
        Device_Registration: [],
        Signing: [],
        Authorization: []
    });

    const fetchData = async () => {
        try {
            // Fetch the data for all steps
            const registrationResponse = await axios.get('http://localhost:8080/api/signing-steps/group/1');
            const deviceRegistrationResponse = await axios.get('http://localhost:8080/api/signing-steps/group/2');
            const signingResponse = await axios.get('http://localhost:8080/api/signing-steps/group/3');
            const authorizationResponse = await axios.get('http://localhost:8080/api/signing-steps/group/4');

            // Update the state with fetched data
            setData({
                Registration: registrationResponse.data,
                Device_Registration: deviceRegistrationResponse.data,
                Signing: signingResponse.data,
                Authorization: authorizationResponse.data
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <Container>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image1} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '338.926px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ol className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3></li>
                            {data.Registration.length > 0
                                ? data.Registration.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={d.id}>{d.stepDescription}</li>
                                ))
                                : "Loading..."}
                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                            {data.Device_Registration.length > 0
                                ? data.Device_Registration.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={d.id}>{d.stepDescription}</li>
                                ))
                                : "Loading..."}
                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image2} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '174.082px', objectFit: 'cover' }} />
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image3} alt="Service 3" className="img-fluid mb-3" style={{ width: '100%', height: '462.559px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3></li>
                            {data.Signing.length > 0
                                ? data.Signing.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={d.id}>{d.stepDescription}</li>
                                ))
                                : "Loading..."}
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 4 : Authorization</h3></li>
                            {data.Authorization.length > 0
                                ? data.Authorization.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={d.id}>{d.stepDescription}</li>
                                ))
                                : "Loading..."}
                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image4} alt="Service 4" className="img-fluid mb-3" style={{ width: '50%', height: '195.156px', objectFit: 'cover' }} />
                </Col>
            </Row>
        </Container>
    );
};

/*import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';

export const SigningStepss = (props) => {
    //export const Features = (props) => {
    return (
        <Container  >
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image1} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '338.926px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ol className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3>
                            </li>
                            {props.data
                                ? props.data.Registration.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                                ))
                                : "Loading..."}

                        </ol>
                    </div>
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                            {props.data
                                ? props.data.Device_Registration.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                                ))
                                : "Loading..."}

                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image2} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '174.082px', objectFit: 'cover' }} />
                </Col>
            </Row>
            <Row className="step-row mb-4">
                <Col md={6}>
                    <img src={Image3} alt="Service 3" className="img-fluid mb-3" style={{ width: '100%', height: '462.559px', objectFit: 'cover' }} />
                </Col>
                <Col md={6}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3></li>
                            {props.data
                                ? props.data.Signing.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'}key={`${d}-${i}`}>{d}</li>
                                ))
                                : "Loading..."}

                        </ul>
                    </div>
                </Col>
            </Row>

            <Row className="step-row mb-4">
                <Col md={6}>
                    <div className="container">

                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">   <h3>Step 4 : Authorization</h3></li>
                            {props.data
                                ? props.data.Authorization.map((d, i) => (
                                    <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                                ))
                                : "Loading..."}

                        </ul>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={Image4} alt="Service 4" className="img-fluid mb-3" style={{ width: '50%', height: '195.156', objectFit: 'cover' }} />
                </Col>
            </Row>
        </Container>



    );
};*/


/*
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';

export const SigningStepss = (props) => {
    //export const Features = (props) => {
    return (
                        <Container  >
                            <Row className="step-row mb-4">
                        <Col md={6}>
                            <img src={Image1} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '338.926px', objectFit: 'cover' }} />
                        </Col>
                    <Col md={6}>
                        <div className="container">
                            <ol className="list-group">
                                <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3>
                                </li>
                                {props.data
                                    ? props.data.Registration.map((d, i) => (
                                        <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                                    ))
                                    : "Loading..."}
                                { /!* <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3></li>
                                <li className="list-group-item list-group-item-success">Download QuickPass app from android app store in mobile.</li>
                                <li className="list-group-item list-group-item-info">Click Create New Account in QuickPass app.</li>
                                <li className="list-group-item list-group-item-success">Tick the privacy policy checkbox and click 'Start’.</li>
                                <li className="list-group-item list-group-item-info">Enter mobile number and click 'Send OTP'.</li>
                                <li className="list-group-item list-group-item-success">Submit the OTP sent to your mobile.</li>
                                <li className="list-group-item list-group-item-info">Verify National ID (NID) by taking an image or entering NID manually.</li>
                                <li className="list-group-item list-group-item-success">Provide your email ID, set a password, and click 'Submit'.</li>*!/}
                            </ol>
                        </div>
                    </Col>
                            </Row>
                            <Row className="step-row mb-4">
                    <Col md={6}>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                        {props.data
                            ? props.data.Device_Registration.map((d, i) => (
                                <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                            ))
                            : "Loading..."}
                        {/!*<li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                        <li className="list-group-item list-group-item-success">Login into the QuickPass app</li>
                        <li className="list-group-item list-group-item-info">Click 'Remote Authorization' (an OTP will be sent to your email)</li>
                        <li className="list-group-item list-group-item-success">Submit the OTP and click Verify OTP (you will get “Device Registered” message)</li>*!/}
                    </ul>
                </div>
                    </Col>
                                <Col md={6}>
                                    <img src={Image2} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '174.082px', objectFit: 'cover' }} />
            </Col>
        </Row>
    <Row className="step-row mb-4">
        <Col md={6}>
            <img src={Image3} alt="Service 3" className="img-fluid mb-3" style={{ width: '100%', height: '462.559px', objectFit: 'cover' }} />
        </Col>
        <Col md={6}>
            <div className="container">
                <ul className="list-group">
                    <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3></li>
                    {props.data
                        ? props.data.Signing.map((d, i) => (
                            <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'}key={`${d}-${i}`}>{d}</li>
                        ))
                        : "Loading..."}
                    {/!* <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3></li>
                    <li className="list-group-item list-group-item-success">Click 'Login' (portal’s homepage)</li>
                    <li className="list-group-item list-group-item-info">Enter your mobile number and PIN used during registration</li>
                    <li className="list-group-item list-group-item-success">Click 'New Workflow' to sign the document</li>
                    <li className="list-group-item list-group-item-info">Upload the document you want to sign</li>
                    <li className="list-group-item list-group-item-success">Provide the name and email of the recipient</li>
                    <li className="list-group-item list-group-item-info">Click the 'Next' button</li>
                    <li className="list-group-item list-group-item-success">Click on 'Signature' and place it where you want to sign</li>
                    <li className="list-group-item list-group-item-info">Click 'Save'</li>
                    <li className="list-group-item list-group-item-success">Upload or draw your handwritten signature</li>
                    <li className="list-group-item list-group-item-info">Then click the 'Sign Now' button</li>*!/}
                </ul>
            </div>
        </Col>
    </Row>

                            <Row className="step-row mb-4">
                                <Col md={6}>
            <div className="container">

                <ul className="list-group">
                    <li className="list-group-item list-group-item-primary">   <h3>Step 4 : Authorization</h3></li>
                    {props.data
                        ? props.data.Authorization.map((d, i) => (
                            <li className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'} key={`${d}-${i}`}>{d}</li>
                        ))
                        : "Loading..."}
                    {/!* <li className="list-group-item list-group-item-primary"><h3>Step 4 : Authorization</h3></li>
                    <li className="list-group-item list-group-item-success">Sign in to your QuickPass mobile app (after clicking 'Sign Now')</li>
                    <li className="list-group-item list-group-item-info">Click 'Signature Authorization'</li>*!/}
                </ul>
            </div>
        </Col>
        <Col md={6}>
            <img src={Image4} alt="Service 4" className="img-fluid mb-3" style={{ width: '50%', height: '195.156', objectFit: 'cover' }} />
        </Col>
    </Row>
                        </Container>



                    );
};
*/

/*const FrontPage = () => (
    <Container>

        <Row className="step-row mb-4">
            <Col md={6}>
                <img src={Image1} alt="Service 1" className="img-fluid mb-3" style={{ width: '100%', height: '338.926px', objectFit: 'cover' }} />
            </Col>
            <Col md={6}>
                <div className="container">
                    <ol className="list-group">
                        <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3></li>
                        <li className="list-group-item list-group-item-success">Download QuickPass app from android app store in mobile.</li>
                        <li className="list-group-item list-group-item-info">Click Create New Account in QuickPass app.</li>
                        <li className="list-group-item list-group-item-success">Tick the privacy policy checkbox and click 'Start’.</li>
                        <li className="list-group-item list-group-item-info">Enter mobile number and click 'Send OTP'.</li>
                        <li className="list-group-item list-group-item-success">Submit the OTP sent to your mobile.</li>
                        <li className="list-group-item list-group-item-info">Verify National ID (NID) by taking an image or entering NID manually.</li>
                        <li className="list-group-item list-group-item-success">Provide your email ID, set a password, and click 'Submit'.</li>
                    </ol>
                </div>
            </Col>
        </Row>


        <Row className="step-row mb-4">
            <Col md={6}>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                        <li className="list-group-item list-group-item-success">Login into the QuickPass app</li>
                        <li className="list-group-item list-group-item-info">Click 'Remote Authorization' (an OTP will be sent to your email)</li>
                        <li className="list-group-item list-group-item-success">Submit the OTP and click Verify OTP (you will get “Device Registered” message)</li>
                    </ul>
                </div>
            </Col>
            <Col md={6}>
                <img src={Image2} alt="Service 2" className="img-fluid mb-3" style={{ width: '100%', height: '174.082px', objectFit: 'cover' }} />
            </Col>
        </Row>


        <Row className="step-row mb-4">
            <Col md={6}>
                <img src={Image3} alt="Service 3" className="img-fluid mb-3" style={{ width: '100%', height: '462.559px', objectFit: 'cover' }} />
            </Col>
            <Col md={6}>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3></li>
                        <li className="list-group-item list-group-item-success">Click 'Login' (portal’s homepage)</li>
                        <li className="list-group-item list-group-item-info">Enter your mobile number and PIN used during registration</li>
                        <li className="list-group-item list-group-item-success">Click 'New Workflow' to sign the document</li>
                        <li className="list-group-item list-group-item-info">Upload the document you want to sign</li>
                        <li className="list-group-item list-group-item-success">Provide the name and email of the recipient</li>
                        <li className="list-group-item list-group-item-info">Click the 'Next' button</li>
                        <li className="list-group-item list-group-item-success">Click on 'Signature' and place it where you want to sign</li>
                        <li className="list-group-item list-group-item-info">Click 'Save'</li>
                        <li className="list-group-item list-group-item-success">Upload or draw your handwritten signature</li>
                        <li className="list-group-item list-group-item-info">Then click the 'Sign Now' button</li>
                    </ul>
                </div>
            </Col>
        </Row>


        <Row className="step-row mb-4">
            <Col md={6}>
                <div className="container">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-primary"><h3>Step 4 : Authorization</h3></li>
                        <li className="list-group-item list-group-item-success">Sign in to your QuickPass mobile app (after clicking 'Sign Now')</li>
                        <li className="list-group-item list-group-item-info">Click 'Signature Authorization'</li>
                    </ul>
                </div>
            </Col>
            <Col md={6}>
                <img src={Image4} alt="Service 4" className="img-fluid mb-3" style={{ width: '50%', height: '195.156', objectFit: 'cover' }} />
            </Col>
        </Row>
    </Container>
);

export default FrontPage;
//////////////////////////////////////////////////////////
//commented before




{/* This is a comment in JSX
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
import Image2 from '../album/service_image_2.jpeg';
import Image3 from '../album/service_image_3.jpeg';
import Image4 from '../album/service_image_4.jpeg';

const SigningSteps = () => (
    <Container>
        <Row>
            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image1}
                            alt="Service 1"
                            className="img-fluid mb-3"
                            style={{ width: '80', height: 'auto' }}
                        />
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-primary"><h3>Step 1 : Registration</h3></li>
                                <li className="list-group-item list-group-item-success">Download QuickPass app from
                                    android app store in mobile.
                                </li>
                                <li className="list-group-item list-group-item-info">Click Create New Account in
                                    QuickPass app.
                                </li>
                                <li className="list-group-item list-group-item-success">Tick the privacy policy
                                    checkbox and click 'Start’.
                                </li>
                                <li className="list-group-item list-group-item-info">Enter mobile number and click
                                    'Send OTP'.
                                </li>
                                <li className="list-group-item list-group-item-success">Submit the provided OTP sent to
                                    your mobile.
                                </li>
                                <li className="list-group-item list-group-item-info">Verify National ID (NID) by
                                    taking an image of it or by manually entering NID number and birthdate.
                                </li>
                                <li className="list-group-item list-group-item-success">Provide your email ID, set a
                                    password, and press the 'Submit' button.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center"  style={{ width: '100%', height: '1%' }}></Row>
                <Row  >
                    <Col md={6}>
                        <div className="container">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-primary"><h3>Step 2 : Device Registration</h3></li>
                                <li className="list-group-item list-group-item-success">Login into the QuickPass
                                    app.
                                </li>
                                <li className="list-group-item list-group-item-info">Click 'Remote Authorization'
                                    (an OTP will be sent to your email)
                                </li>
                                <li className="list-group-item list-group-item-success">Submit the OTP and click
                                    Verify OTP (you will get “Device Registered” message)
                                </li>
                            </ul>
                        </div>

                    </Col>
                    <Col md={6}>
                    <img
                            src={Image2}
                            alt="Service 1"
                            className="img-fluid mb-3"
                            style={{width: '50%', height: 'auto'}}
                        />
                    </Col>

                </Row>
                <Row className="justify-content-center"  style={{ width: '100%', height: '1%' }}></Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={Image3}
                            alt="Service 1"
                            className="img-fluid mb-3"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </Col>
                    <Col md={6}>
                        <div className="container">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-primary"><h3>Step 3 : Signing</h3>
                                </li>
                                <li className="list-group-item list-group-item-success">Click 'Login'(portal’s
                                    homepage)
                                </li>
                                <li className="list-group-item list-group-item-info">Enter the mobile number and PIN
                                    (used during registration)
                                </li>
                                <li className="list-group-item list-group-item-success">Click the 'New Workflow'
                                    button to sign the document
                                </li>
                                <li className="list-group-item list-group-item-info">Upload the document you want
                                    to sign
                                </li>
                                <li className="list-group-item list-group-item-success">Provide the name and email
                                    of the person you want to send the document
                                </li>
                                <li className="list-group-item list-group-item-info">Click the 'Next' button</li>
                                <li className="list-group-item list-group-item-success">Click on the 'Signature'
                                    button and place it where you want to sign.
                                </li>
                                <li className="list-group-item list-group-item-info">Click 'Save’ button</li>
                                <li className="list-group-item list-group-item-success">Clicking on the 'Signature'
                                    box
                                </li>
                                <li className="list-group-item list-group-item-info">Upload or draw your handwritten
                                    signature
                                </li>
                                <li className="list-group-item list-group-item-success">Then click the 'Sign Now'
                                    button.
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col md={6}>
                        <div className="container">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-primary"><h3>Step 4 :
                                    Authorization</h3>
                                </li>
                                <li className="list-group-item list-group-item-success">Sign in to your QuickPass mobile
                                    app (After clicking the 'Sign Now' button)
                                </li>
                                <li className="list-group-item list-group-item-info"> Click 'Signature Authorization’
                                </li>
                            </ul>
                        </div>

                </Col>
                    <Col md={6}>
                        <img
                            src={Image4}
                            alt="Service 1"
                            className="img-fluid mb-3"
                            style={{width: '50%', height: 'auto'}}
                        />
                    </Col>

                </Row>

            </Col>
        </Row>

    </Container>);
export default SigningSteps;*//*}*/
