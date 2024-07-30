import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import CourseAvailable from './components/CourseAvailable';
import MyCourse from './components/MyCourse';
import EligibleCourse from './components/EligibleCourse';
import ReviewPage from './components/ReviewPage';
import Sidebar from './components/Sidebar';
import Logout from './components/Logout';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <MainContent />
            </div>
        </Router>
    );
}

const MainContent = () => {
    const location = useLocation();

    return (
        <div className="main-layout">
            {location.pathname !== '/' && <Sidebar />}
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/courses" element={<CourseAvailable />} />
                    <Route path="/my-courses" element={<MyCourse />} />
                    <Route path="/eligible-courses" element={<EligibleCourse />} />
                    <Route path="/reviews" element={<ReviewPage />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
