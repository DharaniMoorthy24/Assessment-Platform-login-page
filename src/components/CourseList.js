import React from 'react';
import './CourseList.css';

const CourseList = ({ title, courses }) => {
  return (
    <section className="course-list">
      <h2>{title}</h2>
      <div className="course-items">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.image} alt={course.title} />
            <p>{course.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
