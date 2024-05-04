import React from 'react';
import projectImage from '../graph1.png'; // Import project image
import inf from '../inf.jpg';
import sent from '../sent.jpg'
const Projects = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={projectImage} className="card-img-top" alt="Project 1" />
                        <div className="card-body">
                            <h5 className="card-title">Financial forecasting</h5>
                            <p className="card-text">Determining the volatility of the stock market using new statistical means such as copula analysis</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={inf} className="card-img-top" alt="Project 2" style={{height:210,width:355 }}/>
                        <div className="card-body">
                            <h5 className="card-title">HypeEase</h5>
                            <p className="card-text"> A social media marketplace which endeavours to connect influencers with brands and businesses</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={sent} className="card-img-top" alt="Project 3" style={{height:210,width:355 }}/>
                        <div className="card-body">
                            <h5 className="card-title">Sentiment Analysis</h5>
                            <p className="card-text">An application made in python and deployed via flask API that takes a file of text as input and displays the sentiment analysis showing the overall sentiment of the text file</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
