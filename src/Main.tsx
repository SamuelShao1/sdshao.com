import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import './fonts/Fonts.css';
import Projects from './Pages/Projects';
import Nav from './Nav';

const Home: React.FC = () => {
    return (
        <div className="relative overflow-hidden h-screen bg-brand-yellow1 text-black flex justify-center items-center">
            <div className="h-full flex items-center justify-center">
                <h1 className="gradient-text text-6xl gradient-text font-bold gradient text-black">
                    <Link className="gradient-text" to="/projects">
                        Hey
                    </Link>
                </h1>
            </div>
        </div>
    );
};
const Main: React.FC = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/*" element={<Projects />} />
            </Routes>
        </>
    );
};
export default Main;
