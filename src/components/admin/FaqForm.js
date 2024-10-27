/*
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const FaqForm = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const faqData = {
            question,
            answer,
        };

        try {
            // Send POST request to save the FAQ
            await axios.post('http://localhost:8080/api/faqs/save', faqData);
            // Clear the form fields
            setQuestion('');
            setAnswer('');
            alert('FAQ submitted successfully!');
        } catch (error) {
            console.error('Error submitting FAQ:', error);
            alert('Failed to submit FAQ. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Submit Your FAQ</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">Question:</label>
                    <input
                        type="text"
                        id="question"
                        className="form-control"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="answer" className="form-label">Answer:</label>
                    <textarea
                        id="answer"
                        className="form-control"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit FAQ</button>
            </form>
        </div>
    );
};

export default FaqForm;
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const FaqForm = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [faqs, setFaqs] = useState([]);

    const fetchFaqs = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/faqs/find/all');
            setFaqs(response.data);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const faqData = {
            question,
            answer,
        };

        try {
            // Send POST request to save the FAQ
            await axios.post('http://localhost:8080/api/faqs/save', faqData);
            // Clear the form fields
            setQuestion('');
            setAnswer('');
            alert('FAQ submitted successfully!');
            fetchFaqs(); // Refresh the FAQs list after submitting
        } catch (error) {
            console.error('Error submitting FAQ:', error);
            alert('Failed to submit FAQ. Please try again.');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/faqs/delete/${id}`);
            fetchFaqs(); // Refresh the FAQs list after deletion
            alert('FAQ deleted successfully!');
        } catch (error) {
            console.error('Error deleting FAQ:', error);
            alert('Failed to delete FAQ. Please try again.');
        }
    };

    useEffect(() => {
        fetchFaqs(); // Fetch FAQs on component mount
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Submit Your FAQ</h2>
            <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">Question:</label>
                    <input
                        type="text"
                        id="question"
                        className="form-control"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="answer" className="form-label">Answer:</label>
                    <textarea
                        id="answer"
                        className="form-control"
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit FAQ</button>
            </form>

            <h2 className="mt-4">Existing FAQs</h2>
            <ul className="list-group">
                {faqs.map(faq => (
                    <li key={faq.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Q:</strong> {faq.question}<br />
                            <strong>A:</strong> {faq.answer}
                        </div>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(faq.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FaqForm;
