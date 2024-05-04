import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Contact</h2>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h4>Connect with me</h4>
                    <div>
                        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" className="me-3" /></a>
                        <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="2x" className="me-3" /></a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="https://pk.linkedin.com/in/ammar-zaid-2a4279269" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" className="me-3" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
