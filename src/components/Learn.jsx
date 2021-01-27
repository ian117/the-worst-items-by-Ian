import React from 'react';

const Learn = ({firstP,secondP,thirdP}) => (
    <div className="card mt-3 mb-3 w-50 p-3  bg-danger text-white">
        <div className="card-body text-center">
            <h2 className="card-title">Learn</h2>
            <p className="card-text">{firstP}</p>
            <p className="card-text">{secondP}</p>
            <p className="card-text">{thirdP}</p>
        </div>
    </div>
); 

export default Learn;