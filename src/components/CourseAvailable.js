import React from 'react';
import './Dashboard.css'; // Use the same CSS as Dashboard for consistency
import aptitudeImage from '../assets/images/aptitude.png';
import electricalImage from '../assets/images/electrical.png';
import cProgrammingImage from '../assets/images/c-programming.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const CourseAvailable = () => {
  const courses = [
    { title: 'Aptitude', image: aptitudeImage },
    { title: 'Electrical', image: electricalImage },
    { title: 'C Programming', image: cProgrammingImage },
  ];

  return (
    <div className="dashboard-wrapper"> {/* Using same wrapper class as Dashboard */}
      <div className="search-option">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="dashboard-container">
        <div className="courses-section">
          <div className="all-courses"> {/* Class for section header */}
            <div className="course-available-title">
              <FontAwesomeIcon icon={faBook} />
              <span>Available Courses</span>
            </div>
            <div className="courses-list"> {/* Class for course list container */}
              {courses.map((course, index) => (
                <div className="course-item" key={index}> {/* Class for individual course item */}
                  <img src={course.image} alt={course.title} />
                  <span>{course.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseAvailable;
