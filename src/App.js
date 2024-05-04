import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ParticlesComponent from './components/Particles';
import Introduction from './components/Introduction';
import Skills from './components/Skills'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Projects from './components/Projects'
const App = () => {
    return (

            <div className="App">
                <ParticlesComponent id="Particles" />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/introduction" element={<Introduction />} />
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </div>
    );
}

export default App;
