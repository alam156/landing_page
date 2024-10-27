import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacteristicsForm = () => {
    const [features, setFeatures] = useState([]);
    const [icon, setIcon] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchFeatures();
    }, []);

    const fetchFeatures = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/characteristics_features/all');
            setFeatures(response.data);
        } catch (error) {
            console.error('Error fetching features:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newFeature = { icon, title, description };
            await axios.post('http://localhost:8080/api/characteristics_features/add', newFeature);
            setIcon('');
            setTitle('');
            setDescription('');
            fetchFeatures();
        } catch (error) {
            console.error('Error adding feature:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/characteristics_features/delete/${id}`);
            fetchFeatures();
        } catch (error) {
            console.error('Error deleting feature:', error);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ textAlign: 'center', color: '#333' }}>Add Feature</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="Icon"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '100px' }}
                ></textarea>
                <button type="submit" style={{ padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#4CAF50', color: 'white', cursor: 'pointer' }}>
                    Add Feature
                </button>
            </form>

            <h2 style={{ textAlign: 'center', color: '#333' }}>Existing Features</h2>
            <ul style={{ listStyle: 'none', padding: '0' }}>
                {features.length > 0 ? (
                    features.map(feature => (
                        <li key={feature.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <div>
                                <strong>{feature.title}</strong> - {feature.description}
                            </div>
                            <button onClick={() => handleDelete(feature.id)} style={{ marginLeft: '10px', padding: '5px', borderRadius: '4px', border: 'none', backgroundColor: '#e57373', color: 'white', cursor: 'pointer' }}>
                                Delete
                            </button>
                        </li>
                    ))
                ) : (
                    <li style={{ textAlign: 'center', color: '#777' }}>No existing features found.</li>
                )}
            </ul>
        </div>
    );
};

export default CharacteristicsForm;
