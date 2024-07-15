import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import './fonts/Fonts.css';
import Main from './Main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './Pages/Projects';

function WelcomeView() {
    const [currLangIndex, setCurrLangIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [timeLeft, setTimeLeft] = useState(60000);
    const [textChange, setTextChange] = useState(2000);
    const [bgred,setBg] = useState(false);

    const languages = ['Hello', 'Hola', 'Bonjour', 'Wah gwaan', 'Ciao', 'こんにちは', '안녕하세요', '你好', 'Kamusta', 'Xin chào', 'مرحبا', 'Привет', 'Olá', 'Cześć', 'سلام ', 'હેલો', 'Γειά σου'];

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    setBg(false);
                    return 60000; 
                }
                else if (prevTime > 30000) setTextChange(2000);
                else if (prevTime > 10000) setTextChange(1000);
                else if (prevTime > 5000) {
                    setTextChange(100);
                    setBg(true);
                }
                else if (prevTime > 1) setTextChange(50);
                console.log(textChange)
                return prevTime - 10;
            });
        }, 10);

        const languageChangeInterval = setInterval(() => {
            
            setIsVisible(false);
            setTimeout(() => {
                setCurrLangIndex((prevIndex) => (prevIndex + 1) % languages.length);
                setIsVisible(true);
            }, textChange/2); 
        }, textChange);

        return () => {
            clearInterval(languageChangeInterval);
            clearInterval(timeInterval);
        };
    }, [currLangIndex]);

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--animation-duration', `${textChange/1000}s`);
    }, [textChange]);

    return (
        <div className={`p-[10vh] relative flex-col items-center justify-center overflow-hidden h-screen ${bgred ? 'bg-red-500' : 'bg-brand-yellow1'}  text-black`}>
            <div className="flex-col justify-between h-full">
                <div className={`h-full flex items-center justify-center text-9xl font-bold text-black ${isVisible ? 'animate-pingPongIn' : 'animate-pingPongOut'}`}>
                    <div className='gradient-text'>
                        <Link className="" to="/main">
                            {languages[currLangIndex]}
                        </Link>
                    </div>
                </div>
            </div>
            <p className='flex items-center justify-center text-2xl'>{timeLeft} ms</p>
        </div>
    );
}

export default function Welcome() {
    return (
        <Routes>
            <Route path="/" element={<WelcomeView />} />
            <Route path="/main" element={<Main />} />
            <Route path="/projects" element={<Projects />} />

        </Routes>
    );
}
