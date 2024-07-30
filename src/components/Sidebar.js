import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faBook, faUserGraduate, faCheck, faStar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                <span>Assessment Platform</span>
            </div>
            <ul>
                <li>
                    <Link to="/dashboard">
                        <FontAwesomeIcon icon={faThLarge} className="sidebar-icon" />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <FontAwesomeIcon icon={faBook} className="sidebar-icon" />
                        Course Available
                    </Link>
                </li>
                <li>
                    <Link to="/my-courses">
                        <FontAwesomeIcon icon={faUserGraduate} className="sidebar-icon" />
                        My Course
                    </Link>
                </li>
                <li>
                    <Link to="/eligible-courses">
                        <FontAwesomeIcon icon={faCheck} className="sidebar-icon" />
                        Eligible Course
                    </Link>
                </li>
                <li>
                    <Link to="/reviews">
                        <FontAwesomeIcon icon={faStar} className="sidebar-icon" />
                        Review
                    </Link>
                </li>
                <li>
                    <Link to="/logout">
                        <FontAwesomeIcon icon={faSignOutAlt} className="sidebar-icon" />
                        Logout
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
