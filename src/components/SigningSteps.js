import React, {useCallback, useEffect, useState} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image1 from '../album/service_image_1.jpeg';
// import Image2 from '../album/service_image_2.jpeg';
// import Image3 from '../album/service_image_3.jpeg';
// import Image4 from '../album/service_image_4.jpeg';
import axios from "axios";
// import {Link} from "react-router-dom";
// import Cookies from 'js-cookie';

export const SigningStepss = () => {
    //export const Features = (props) => {
    const [steps, setSteps] = useState([]);
    const transformData = (data) => {
        return data.reduce((result, item) => {
            const steps = item.signingStepDetails.map(step => step.description);
            result[item.name.replace(" ", "_")] = steps;
            return result;
        }, {});
    };
    //const isTokenPresent = Cookies.get('token');
    const fetchSteps = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/signing-steps/all`,{
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${isTokenPresent}`
                }
            });
            //console.log(transformData(response.data))
            setSteps(transformData(response.data.sort((a, b) => a.id - b.id)));
            //console.log(steps);
            //console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }, []);

    useEffect(() => {
        fetchSteps();
    }, [fetchSteps]);

    return (
        <Container  >
            <Row className="step-row mb-4">
                {Object.entries(steps).map(([stepName, stepDetails], index) => (
                    <React.Fragment key={stepName}>
                        {index % 2 === 0 ? (
                            <>
                                <Col md={6}>
                                    <img
                                        src={Image1}
                                        alt="Service"
                                        className="img-fluid mb-3"
                                        style={{ width: '100%', height: '338.926px', objectFit: 'cover' }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <div className="container">
                                        <ol className="list-group">
                                            <li className="list-group-item list-group-item-primary">
                                                <h3>Step {index + 1}: {stepName.replace("_", " ")}</h3>
                                            </li>
                                            {stepDetails.map((detail, i) => (
                                                <li
                                                    className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'}
                                                    key={`${detail}-${i}`}
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </Col>
                            </>
                        ) : (
                            <>
                                <Col md={6}>
                                    <div className="container">
                                        <ol className="list-group">
                                            <li className="list-group-item list-group-item-primary">
                                                <h3>Step {index + 1}: {stepName.replace("_", " ")}</h3>
                                            </li>
                                            {stepDetails.map((detail, i) => (
                                                <li
                                                    className={i % 2 === 0 ? 'list-group-item list-group-item-info' : 'list-group-item list-group-item-success'}
                                                    key={`${detail}-${i}`}
                                                >
                                                    {detail}
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <img
                                        src={Image1}
                                        alt="Service"
                                        className="img-fluid mb-3"
                                        style={{ width: '100%', height: '338.926px', objectFit: 'cover' }}
                                    />
                                </Col>
                            </>
                        )}
                    </React.Fragment>
                ))}
            </Row>
        </Container>
    );
};
