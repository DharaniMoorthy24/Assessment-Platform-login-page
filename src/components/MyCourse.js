import React from 'react';
import './MyCourse.css';
import cProgrammingIcon from '../assets/images/c-programming.png';
import electricalIcon from '../assets/images/electrical.png';

const MyCourse = () => {
    return (
        <div className="my-course-page">
            <div className="my-course-container">
                <h2 className="section-title">My Course</h2>
                <div className="course-list">
                    <div className="course-card">
                        <img src={cProgrammingIcon} alt="C Programming" />
                        <div className="course-info">
                            <h3>C Programming</h3>
                        </div>
                    </div>
                    <div className="course-card">
                        <img src={electricalIcon} alt="Electrical" />
                        <div className="course-info">
                            <h3>Electrical</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCourse;
