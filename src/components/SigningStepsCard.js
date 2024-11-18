import React from 'react';
import '../css/SigningStepsCard.css'; // Create a CSS file for styling
import regImage from '../album/registration_image.png';
import authImage from '../album/authorization_image.png';
const SigningStepsCard = () => {
    const cards = [
        {
            id: 1,
            image: regImage,
            title: 'Registration and Device Registration',
            description: 'Here You will get the registration and device registration steps',
            link: '/registration-phase'
        },
        {
            id: 2,
            image: authImage,
            title: 'Sign and Authorization',
            description: 'Here you will get how to sign and authorize the signature in documents',
            link: '/authorization-phase'
        }
    ];

    return (
        <div className="card-grid">
            {cards.map((card) => (
                <div className="card" key={card.id}>
                    <a href={card.link}><img src={card.image} alt={card.title} className="card-image" /></a>
                    <h2 className="card-title" style={{ color: "darkblue" }}>{card.title}</h2>
                    <p className="card-description">{card.description}</p>
                    <a href={card.link} className="card-button">Read More</a>
                </div>
            ))}
        </div>
    );
};

export default SigningStepsCard;
