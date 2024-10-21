import React, { useEffect, useState } from 'react';
import '../css/Pricing.css';

const Pricing = () => {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        // Fetch the data from the Spring Boot backend
        fetch('http://localhost:8080/api/pricing/all')
            .then((response) => response.json())
            .then((data) => setPricingData(data))
            .catch((error) => console.error('Error fetching pricing data:', error));
    }, []);

    const handleButtonClick = (action) => {
        switch (action) {
            case 'signup':
                console.log('Redirecting to signup page...');
                // Add your redirect logic here
                break;
            default:
                console.log('No action defined for this button.');
        }
    };

    return (
        <React.Fragment>
            <section className="content-container">
                {pricingData.map((item, index) => (
                    <div className="columns" key={index}>
                        <ul className="price">
                            <li className="col-header">{item.className}</li>
                            <li className="grey">{item.price}</li>
                            {item.features.map((feature, idx) => (
                                <li key={idx}>{feature.featureName}</li>
                            ))}
                            <li className="grey">
                                <button className="button" onClick={() => handleButtonClick(item.buttonAction)}>
                                    {item.buttonText}
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
};

export default Pricing;
/*import React, { useEffect, useState } from 'react';
import data from '../jsons/data.json'; // Adjust the path based on your project structure
import '../css/Pricing.css';

const Pricing = () => {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        // Assuming you're fetching the data from a static file
        setPricingData(data.pricing);
    }, []);

    const handleButtonClick = (action) => {
        switch (action) {
            case 'signup':
                console.log('Redirecting to signup page...');
                // Add your redirect logic here
                break;
            default:
                console.log('No action defined for this button.');
        }
    };

    return (
        <React.Fragment>
            <section className="content-container">
                {pricingData.map((item, index) => (
                    <div className="columns" key={index}>
                        <ul className="price">
                            <li className="col-header">{item.class}</li>
                            <li className="grey">{item.price}</li>
                            {item.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                            <li className="grey">
                                <button className="button" onClick={() => handleButtonClick(item.button.action)}>
                                    {item.button.text}
                                </button>
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
};

export default Pricing;*/
/*
import React from 'react';
import '../css/Pricing.css';

// Pricing data in JSON format
const pricingData = [
    {
        "className": "Class 0",
        "price": "Free",
        "features": [
            "IDENTIFICATION",
            "EMAIL",
            "ENCRYPTION",
            "CODE SIGNING",
            "SSL SERVER AUTHENTICATION",
            "SSL CLIENT AUTHENTICATION"
        ],
        "button": {
            "text": "Sign Up",
            "action": "signup"
        }
    },
    {
        "className": "Class 2",
        "price": "BDT 500.00 - BDT 3,000.00/year",
        "features": [
            "IDENTIFICATION",
            "EMAIL",
            "SSL CLIENT AUTHENTICATION"
        ],
        "button": {
            "text": "Sign Up",
            "action": "signup"
        }
    },
    {
        "className": "Class 3",
        "price": "BDT 3,000.00 - BDT 25,000.00/year",
        "features": [
            "IDENTIFICATION",
            "EMAIL",
            "ENCRYPTION",
            "CODE SIGNING",
            "SSL SERVER AUTHENTICATION",
            "SSL CLIENT AUTHENTICATION"
        ],
        "button": {
            "text": "Sign Up",
            "action": "signup"
        }
    }
];

const Pricing = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                {pricingData.map((item, index) => (
                    <div className="columns" key={index}>
                        <ul className="price">
                            <li className="col-header" style={item.className === "Class 2" ? {backgroundColor:'#37387a'} : {}}>{item.className}</li>
                            <li className="grey">{item.price}</li>
                            {item.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                            <li className="grey">
                                <button className="button">{item.button.text}</button>
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
        </React.Fragment>
    );
}

export default Pricing;


/!*
import React from 'react'
import '../css/Pricing.css'

const Pricing = () => {
    return (
        <React.Fragment>
            <section className="content-container">
                <div className="columns">
                    <ul className="price">
                        <li className="col-header">Class 0</li>
                        <li className="grey">Free</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>ENCRYPTION</li>
                        <li>CODE SIGNING</li>
                        <li>SSL SERVER AUTHENTICATION</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

                <div className="columns">
                    <ul className="price">
                        <li className="col-header" style={{backgroundColor:'#37387a'}}>Class 2</li>
                        <li className="grey">BDT 500.00 - BDT 3,000.00/year</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

                <div className="columns">
                    <ul className="price">
                        <li className="col-header">Class 3</li>
                        <li className="grey">BDT 3,000.00 - BDT 25,000.00/year</li>
                        <li>IDENTIFICATION</li>
                        <li>EMAIL</li>
                        <li>ENCRYPTION</li>
                        <li>CODE SIGNING</li>
                        <li>SSL SERVER AUTHENTICATION</li>
                        <li>SSL CLIENT AUTHENTICATION</li>
                        <li className="grey"><button className="button">Sign Up</button></li>
                    </ul>
                </div>

            </section>
        </React.Fragment>
    )
}

export default Pricing;*!/
*/
