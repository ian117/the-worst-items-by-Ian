import React from 'react';

const Hobbies = ({firstP}) => (
    <div className="card mt-3 mb-3 w-50 p-3 bg-secondary text-white">
        <div className="card-body text-center">
            <h2 className="card-title">Hobbies</h2>
            <p className="card-text">{firstP}</p>
        </div>
    </div>
); 

export default Hobbies;