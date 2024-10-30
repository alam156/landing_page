import React, {useState, useEffect, useCallback} from "react";
import '../css/Pricing.css';
import axios from "axios";


const Pricing = () => {
    const [pricingData, setPricingData] = useState({ pricing: [] });
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

    const transformData = (data) => ({
        pricing: data.map(item => ({
            class: item.className,
            price: item.price,
            features: item.features.map(feature => feature.featureName.toUpperCase())
        }))
    });

    const fetchPricingData = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/pricing/all`,{
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${isTokenPresent}`
                }
            });
            //console.log(transformData(response.data))
            setPricingData(transformData(response.data.sort((a, b) => a.id - b.id)));
            //console.log(steps);
            //console.log(response.data);
        } catch (error) {
            console.error(error);
        } finally {

        }
    }, []);

    useEffect(() => {
        fetchPricingData();
    }, [fetchPricingData]);

    return (
        <React.Fragment>
            <section className="content-container">
                {pricingData.pricing.map((item, index) => (
                    <div className="columns" key={index}>
                        <ul className="price">
                            <li className="col-header">{item.class}</li>
                            <li className="grey">{item.price}</li>
                            {item.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}


                          <li className="grey">
                            <button className="button" onClick={() => handleButtonClick('signup')}>
                              {"Sign up"}
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
