// src/components/admin/PricingForm.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PricingForm = () => {
    const [pricingClasses, setPricingClasses] = useState([]);
    const [newClass, setNewClass] = useState({ className: '', price: '', buttonText: '', buttonAction: '' });
    const [featureInputs, setFeatureInputs] = useState({}); // Object to hold feature inputs for each class
    const [classToDelete, setClassToDelete] = useState(null);
    const [showFeatureForm, setShowFeatureForm] = useState(false); // State to control visibility of the feature form

    useEffect(() => {
        fetchPricingClasses();
    }, []);

    const fetchPricingClasses = async () => {
        const response = await axios.get('http://localhost:8080/api/pricing/all');
        setPricingClasses(response.data);
    };

    const addPricingClass = async () => {
        await axios.post('http://localhost:8080/api/pricing/save', { ...newClass, features: [] });
        fetchPricingClasses(); // Refresh the list
        setNewClass({ className: '', price: '', buttonText: '', buttonAction: '' }); // Clear form
        setShowFeatureForm(true); // Show feature form after adding a class
    };

    const addFeature = async (classId) => {
        const featureData = {
            featureName: featureInputs[classId] || '', // Get feature name from specific class input
            pricingClass: { id: classId } // Associate the feature with the specific pricing class
        };
        await axios.post('http://localhost:8080/api/pricing/features', featureData);
        fetchPricingClasses(); // Refresh the list
        // Clear the specific feature input for the class
        setFeatureInputs({ ...featureInputs, [classId]: '' });
    };

    const deleteFeature = async (featureId) => {
        await axios.delete(`http://localhost:8080/api/pricing/features/${featureId}`);
        fetchPricingClasses(); // Refresh the list
    };

    const deletePricingClass = async (id) => {
        await axios.delete(`http://localhost:8080/api/pricing/${id}`);
        fetchPricingClasses(); // Refresh the list
    };

    const handleDeletePricingClass = () => {
        if (classToDelete) {
            deletePricingClass(classToDelete);
            setClassToDelete(null); // Clear selected class after deletion
        }
    };

    return (
        <div>
            <h2>Add Pricing Class</h2>
            <input
                type="text"
                placeholder="Class Name"
                value={newClass.className}
                onChange={(e) => setNewClass({ ...newClass, className: e.target.value })}
            />
            <input
                type="text"
                placeholder="Price"
                value={newClass.price}
                onChange={(e) => setNewClass({ ...newClass, price: e.target.value })}
            />
            <input
                type="text"
                placeholder="Button Text"
                value={newClass.buttonText}
                onChange={(e) => setNewClass({ ...newClass, buttonText: e.target.value })}
            />
            <input
                type="text"
                placeholder="Button Action"
                value={newClass.buttonAction}
                onChange={(e) => setNewClass({ ...newClass, buttonAction: e.target.value })}
            />
            <button onClick={addPricingClass}>Add Pricing Class</button>

            {showFeatureForm && (
                <div>
                    <h2>Add Feature</h2>
                    {pricingClasses.map((pricingClass) => (
                        <div key={pricingClass.id}>
                            <h3>{pricingClass.className}</h3>
                            <input
                                type="text"
                                placeholder="Feature Name"
                                value={featureInputs[pricingClass.id] || ''} // Bind specific input to the class id
                                onChange={(e) => setFeatureInputs({ ...featureInputs, [pricingClass.id]: e.target.value })} // Update specific input
                            />
                            <button onClick={() => addFeature(pricingClass.id)}>Add Feature</button>
                            <h4>Features:</h4>
                            <ul>
                                {pricingClass.features.map((feature) => (
                                    <li key={feature.id}>
                                        {feature.featureName}
                                        <button onClick={() => deleteFeature(feature.id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            <h2>Existing Pricing Classes</h2>
            <ul>
                {pricingClasses.map((pricingClass) => (
                    <li key={pricingClass.id}>
                        {pricingClass.className} - {pricingClass.price}
                    </li>
                ))}
            </ul>

            <h2>Delete Pricing Class</h2>
            <select onChange={(e) => setClassToDelete(e.target.value)} value={classToDelete || ''}>
                <option value="" disabled>Select a class to delete</option>
                {pricingClasses.map((pricingClass) => (
                    <option key={pricingClass.id} value={pricingClass.id}>
                        {pricingClass.className}
                    </option>
                ))}
            </select>
            <button onClick={handleDeletePricingClass}>Delete Selected Class</button>
        </div>
    );
};

export default PricingForm;
