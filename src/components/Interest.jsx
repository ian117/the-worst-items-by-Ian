import React from 'react';

const Interest = ({firstP,secondP,thirdP,fourP,fifthP,sixtP}) => (
    <div className="card mt-3 mb-3 w-50 p-3  bg-success text-white">
        <div className="card-body text-center">
            <h2 className="card-title">Interest</h2>
                <p className="card-text">{firstP}</p>
                <p className="card-text">{secondP}</p>
                <p className="card-text">{thirdP}</p>
                <p className="card-text">{fourP}</p>
                <p className="card-text">{fifthP}</p>
                <p className="card-text">{sixtP}</p>
        </div>    
    </div>
); 

export default Interest;