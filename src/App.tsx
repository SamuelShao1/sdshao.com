import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import './App.css';
import './fonts/Fonts.css';
import { AuthProvider } from './AuthContext';
import { getAuth } from 'firebase/auth';
import Welcome from './Welcome';
const App: React.FC = () => {
    const auth = getAuth()
    const user = auth.currentUser;
    
    return (
        <AuthProvider>
            <Router>
                <div className="overflow-hidden h-screen">
                    <Routes>
                        <Route path="/*" element={<Welcome />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};
export default App;
