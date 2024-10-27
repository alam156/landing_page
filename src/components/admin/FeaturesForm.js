import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturesForm = () => {
    const [features, setFeatures] = useState([]);
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [text, setText] = useState('');

    // Fetch existing features
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/features/find/all');
                setFeatures(response.data);
            } catch (error) {
                console.error('Error fetching features:', error);
            }
        };

        fetchFeatures();
    }, []);

    // Handle form submission for adding new features
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create new feature
            await axios.post('http://localhost:8080/api/features/save', { title, icon, text });
            // Reset form fields
            setTitle('');
            setIcon('');
            setText('');
            // Fetch updated features
            const response = await axios.get('http://localhost:8080/api/features/find/all');
            setFeatures(response.data);
        } catch (error) {
            console.error('Error saving feature:', error);
        }
    };

    // Handle delete feature
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/features/${id}`);
            const updatedFeatures = features.filter(feature => feature.id !== id);
            setFeatures(updatedFeatures);
        } catch (error) {
            console.error('Error deleting feature:', error);
        }
    };

    return (
        <div>
            <h2>Manage Features</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Icon"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <button type="submit">Add Feature</button>
            </form>

            <h3>Existing Features</h3>
            <ul>
                {features.map((feature) => (
                    <li key={feature.id}>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                        <button onClick={() => handleDelete(feature.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturesForm;

///update
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturesForm = () => {
    const [features, setFeatures] = useState([]);
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const [text, setText] = useState('');
    const [editId, setEditId] = useState(null);

    // Fetch existing features
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/features/find/all');
                setFeatures(response.data);
            } catch (error) {
                console.error('Error fetching features:', error);
            }
        };

        fetchFeatures();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editId) {
                // Update feature
                await axios.put(`http://localhost:8080/api/features/${editId}`, { title, icon, text });
            } else {
                // Create new feature
                await axios.post('http://localhost:8080/api/features/save', { title, icon, text });
            }
            // Reset form fields
            setTitle('');
            setIcon('');
            setText('');
            setEditId(null);
            // Fetch updated features
            const response = await axios.get('http://localhost:8080/api/features/find/all');
            setFeatures(response.data);
        } catch (error) {
            console.error('Error saving feature:', error);
        }
    };

    // Handle edit feature
    const handleEdit = (feature) => {
        setTitle(feature.title);
        setIcon(feature.icon);
        setText(feature.text);
        setEditId(feature.id);
    };

    // Handle delete feature
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/features/${id}`);
            const updatedFeatures = features.filter(feature => feature.id !== id);
            setFeatures(updatedFeatures);
        } catch (error) {
            console.error('Error deleting feature:', error);
        }
    };

    return (
        <div>
            <h2>Manage Features</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Icon"
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                />
                <button type="submit">{editId ? 'Update Feature' : 'Add Feature'}</button>
                {editId && <button type="button" onClick={() => handleEdit(null)}>Cancel Edit</button>}
            </form>

            <h3>Existing Features</h3>
            <ul>
                {features.map((feature) => (
                    <li key={feature.id}>
                        <h4>{feature.title}</h4>
                        <p>{feature.text}</p>
                        <button onClick={() => handleEdit(feature)}>Edit</button>
                        <button onClick={() => handleDelete(feature.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeaturesForm;
/!**!/*/
