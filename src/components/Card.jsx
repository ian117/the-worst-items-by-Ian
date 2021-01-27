import React from 'react';

const Card = ({title, text, divColor}) => (
    <div className={`card mt-3 mb-3 w-50 p-3 ${divColor} text-white`}>
        <div className={`card-body text-center`}>
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
        </div>
    </div>
); 

export default Card;