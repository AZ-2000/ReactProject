import React from 'react';
import profilePic from '../Me.PNG'; // Import your profile picture

const Introduction = () => {
    return (
        <div className="container" id='cont1'>
            <div className="row">
                <div className="col-md-4">
                    <img src={profilePic} alt="Profile" className="img-fluid rounded-circle mb-3" />
                </div>
                <div className="col-md-8">
                    <h2 className="mt-4">About Me</h2>
                    <p className="lead">
                        Hello! My name is Ammar and I'm currently in my eighth semester in Air University. I have an interest in computer programming
                        and have analytical problem solving mind. My interest in particular is in data science and AI. For any queries related to work please
                        use my contact me form on the top right. Thank you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
