import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Portfolio from "./portfolio";

const PageLoader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a web page load with a timeout
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000); // Replace with your actual page load logic

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" variant="primary" />
            </div>
        );
    }

    return (
        <div>
            <Portfolio/>
        </div>
    );
};

export default PageLoader;