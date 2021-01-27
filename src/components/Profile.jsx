import React from 'react';

const Profile = ({name,country,age}) => (
    <div className="card mt-3 mb-3 w-50 p-3 bg-warning text-white">
        <div className="card-body text-center">
            <h2 className="card-title">Profile</h2>
                <p className="card-text">{name}</p>
                <p className="card-text">{country}</p>
                <p className="card-text">{age}</p>
        </div>
    </div>
); 

export default Profile;