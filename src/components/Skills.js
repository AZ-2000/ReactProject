import React from 'react';

const Skills = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Skills</h2>
            <div className="row">
                <div className="col-md-6">
                    <h4>Programming Languages</h4>
                    <div className="progress mt-3">
                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <h4 className="mt-3">Computer Science degree</h4>
                    <div className="progress mt-3">
                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <h4 className="mt-4">Certifications</h4>
                    <span className="badge bg-secondary">IBM Certified Data Scientist</span>
                    <span className="badge bg-primary">MongoDB with Python</span>
                    <span className="badge bg-secondary">Digital data management</span>
                </div>
                <div className="col-md-6">
                    <h4>Data Designing</h4>
                    <div className="progress mt-3">
                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>
                    <h4 className="mt-3">Data Science</h4>
                    <div className="progress mt-3">
                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>
                    <h4 className="mt-4">Experience</h4>
                    <span className="badge bg-secondary">Internship at Halliburton</span>
                    <span className="badge bg-primary">Independent projects</span>
                    <span className="badge bg-secondary">CEO</span>
                </div>
            </div>
        </div>
    );
};

export default Skills;
