import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WhyChoosePage = () => {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8080/items/all');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const handleAddItem = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', title);
        formData.append('text', description);
        formData.append('icon', icon);

        try {
            await axios.post('http://localhost:8080/items/save', formData);
            setTitle('');
            setDescription('');
            setIcon(null);
            fetchItems(); // Refresh the list after adding an item
            alert('Item added successfully!');
        } catch (error) {
            console.error('Error adding item:', error);
            alert('Failed to add item. Please try again.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/items/${id}`);
            fetchItems(); // Refresh the list after deletion
            alert('Item deleted successfully!');
        } catch (error) {
            console.error('Error deleting item:', error);
            alert('Failed to delete item. Please try again.');
        }
    };

    const getImageUrl = (fileName) => {
        return `http://localhost:8080/items/image/${fileName}`;
    };

    return (
        <div>
            <h1>Why Choose Us?</h1>
            <form onSubmit={handleAddItem} className="border p-4 rounded shadow mb-4">
                <h2 className="mb-3">Add New Item</h2>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="icon" className="form-label">Icon:</label>
                    <input
                        type="file"
                        id="icon"
                        className="form-control"
                        onChange={(e) => setIcon(e.target.files[0])}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Item</button>
            </form>

            <h2 className="mt-4">Existing Items</h2>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="flex-grow-1">
                            <strong>{item.name}</strong>
                            <p>{item.text}</p>
                            {item.icon && (
                                <img
                                    src={getImageUrl(item.icon)}
                                    alt={item.name}
                                    style={{ width: '50px', height: '50px', objectFit: 'cover' }} // Adjust size as needed
                                />
                            )}
                        </div>
                        <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhyChoosePage;
