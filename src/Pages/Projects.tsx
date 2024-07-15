import '../App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from 'react-router-dom';
import React from 'react';
import '../fonts/Fonts.css';
function Projects() {
  return (
    <div className="text-black h-screen justify-center items-center">
      <div style={{ fontFamily: 'Main-Bold' }} className=" text-6xl font-bold text-gray-800 h-screen flex flex-col items-center justify-center bg-gray-100">
        <span>Take a look at some of my projects.</span>
        <div className="group">
          <a href="https://qualpat.web.app" className="block mt-2 t Outfit gradient-text">
            QualPat
          </a>
        </div>
        <div className="">
          <a href="https://branchai-5de16.web.app" className="group block mt-2 t Outfit gradient-text">
            BranchAI
          </a>
        </div>
        <div className="">
          <a href="https://minkout-31186.web.app/" className="group block mt-2 t Outfit gradient-text">
            MinkedOut
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
