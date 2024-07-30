import React from 'react';
import './EligibleCourse.css';

const EligibleCourse = () => {
  const courses = [
    { id: 1, vertical: 'Aptitude', courseName: 'Aptitude Level- 1 A' },
    { id: 2, vertical: 'Electrical', courseName: 'Electrical Level- 1' }
  ];

  return (
    <div className="eligible-course-page">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="course-table-container">
        <h2>Register Course</h2>
        <p>Here you can find the Available Course for [your_student_id]</p>
        <table className="course-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>VERTICAL</th>
              <th>COURSE NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.vertical}</td>
                <td>{course.courseName}</td>
                <td>
                  <button className="view-button">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EligibleCourse;
