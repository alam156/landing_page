/*
import Accordion from 'react-bootstrap/Accordion';
import React, {useEffect, useState} from "react";

const AccordionFAQ = (props) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  // Add loading state

    useEffect(() => {
        fetch('http://localhost:8080/api/faqs/find/all')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);  // Set loading to false when data is fetched
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);  // Set loading to false in case of error
            });
    }, []);

    return (
        <div>
            {/!*<div className="navbar-fixed">
                <Navbar/>
            </div>*!/}
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="section-title text-center">
                            <h2>FAQ</h2>
                        </div>

                        <Accordion>
                            {loading ? (
                                <p>Loading...</p>  // Show loading text while fetching data
                            ) : (
                                data.length > 0 ? data.map((d, i) => (


                                    <Accordion.Item eventKey={`${d.id}`} key={d.id}>
                                        <Accordion.Header>{d.question}</Accordion.Header>
                                        <Accordion.Body>{d.answer}</Accordion.Body>
                                    </Accordion.Item>

                                )) : (
                                    <p>No data available</p>
                                )
                            )}

                            {/!*{props.data ? (
                                props.data.map((d, i) => (
                                    <Accordion.Item eventKey={`${i}`}>
                                        <Accordion.Header>{d.question}</Accordion.Header>
                                        <Accordion.Body>{d.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))
                            ) : (
                                <div>Loading...</div>
                            )}*!/}
                        </Accordion>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AccordionFAQ;*/
import Accordion from 'react-bootstrap/Accordion';
import React from "react";

const AccordionFAQ = (props) => {
    return (
        <div>
            {/*<div className="navbar-fixed">
                <Navbar/>
            </div>*/}
            <div>
                <br/>
                <br/>
                <br/>
            </div>
            <div>
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-10">
                        <div className="section-title text-center">
                            <h2>FAQ</h2>
                        </div>
                        <Accordion>
                            {props.data ? (
                                props.data.map((d, i) => (
                                    <Accordion.Item eventKey={`${i}`}>
                                        <Accordion.Header>{d.question}</Accordion.Header>
                                        <Accordion.Body>{d.answer}</Accordion.Body>
                                    </Accordion.Item>
                                ))
                            ) : (
                                <div>Loading...</div>
                            )}
                        </Accordion>
                    </div>
                    <div className="col-md-1">
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AccordionFAQ;
//running code api
/*import Accordion from 'react-bootstrap/Accordion';
import React, { useEffect, useState } from "react";

const AccordionFAQ = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:8080/api/faqs/find/all')
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data);
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <div className="section-title text-center">
                        <h2>FAQ</h2>
                    </div>

                    <Accordion>
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            data.length > 0 ? data.map((d) => (
                                <Accordion.Item eventKey={`${d.id}`} key={d.id}>
                                    <Accordion.Header>{d.question}</Accordion.Header>
                                    <Accordion.Body>{d.answer}</Accordion.Body>
                                </Accordion.Item>
                            )) : (
                                <p>No data available</p>
                            )
                        )}
                    </Accordion>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    );
};

export default AccordionFAQ;*/
