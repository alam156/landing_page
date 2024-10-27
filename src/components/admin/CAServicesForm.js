import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CAServicesForm = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState({ icon: '', name: '', text: '' });

    // Fetch all services
    const fetchServices = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/services/find/all');
            setServices(response.data);
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewService((prev) => ({ ...prev, [name]: value }));
    };

    // Handle adding a new service
    const handleAddService = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/services/save', newService);
            fetchServices(); // Refresh the service list
            setNewService({ icon: '', name: '', text: '' }); // Reset form
        } catch (error) {
            console.error("Error adding service:", error);
        }
    };

    // Handle deleting a service
    const handleDeleteService = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/services/delete/${id}`);
            fetchServices(); // Refresh the service list
        } catch (error) {
            console.error("Error deleting service:", error);
        }
    };

    return (
        <div>
            <h2>Add New Service</h2>
            <form onSubmit={handleAddService}>
                <input
                    type="text"
                    name="icon"
                    value={newService.icon}
                    onChange={handleChange}
                    placeholder="Icon URL"
                    required
                />
                <input
                    type="text"
                    name="name"
                    value={newService.name}
                    onChange={handleChange}
                    placeholder="Service Name"
                    required
                />
                <textarea
                    name="text"
                    value={newService.text}
                    onChange={handleChange}
                    placeholder="Service Description"
                    required
                />
                <button type="submit">Add Service</button>
            </form>

            <h2>Existing Services</h2>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <strong>{service.name}</strong>
                        <p>{service.text}</p>
                        <button onClick={() => handleDeleteService(service.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CAServicesForm;
