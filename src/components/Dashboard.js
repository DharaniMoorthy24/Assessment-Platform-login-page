import React from 'react';
import './Dashboard.css';
import cProgrammingIcon from '../assets/images/c-programming.png';
import electricalIcon from '../assets/images/electrical.png';
import aptitudeIcon from '../assets/images/aptitude.png';

const Dashboard = () => {
    return (
        <div className="dashboard-wrapper">
            <div className="search-option">
                <input type="text" placeholder="Search..." />
            </div>
            <div className="dashboard-container">
                <div className="welcome-message">
                    Welcome DHARANI M,
                </div>
                <div className="courses-section">
                    <div className="ongoing-courses">
                        <h2>On Going Course</h2>
                        <div className="courses-list">
                            <div className="course-item">
                                <img src={cProgrammingIcon} alt="C Programming" />
                                <span>C Programming</span>
                            </div>
                            <div className="course-item">
                                <img src={electricalIcon} alt="Electrical" />
                                <span>Electrical</span>
                            </div>
                        </div>
                    </div>
                    <div className="all-courses">
                        <h2>All Courses</h2>
                        <div className="courses-list">
                            <div className="course-item">
                                <img src={aptitudeIcon} alt="Aptitude" />
                                <span>Aptitude</span>
                            </div>
                            <div className="course-item">
                                <img src={electricalIcon} alt="Electrical" />
                                <span>Electrical</span>
                            </div>
                            <div className="course-item">
                                <img src={cProgrammingIcon} alt="C Programming" />
                                <span>C Programming</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
