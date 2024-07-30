import React from 'react';
import './ReviewPage.css'; // Make sure to style the page similarly to others

const ReviewPage = () => {
    const reviews = [
        {
            id: 1,
            vertical: 'Electrical',
            course: 'Electrical Level- 0',
            slot: '26.07.2024(11.00 AM to 12.00 PM)',
            evaluation: 'Completed'
        }
    ];

    return (
        <div className="review-page">
            <div className="review-container">
                <h2>Review of Short Answers</h2>
                <table className="review-table">
                    <thead>
                        <tr>
                            <th>S. No</th>
                            <th>Vertical</th>
                            <th>Course</th>
                            <th>Slot with Date</th>
                            <th>Evaluation</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.vertical}</td>
                                <td>{review.course}</td>
                                <td>{review.slot}</td>
                                <td>{review.evaluation}</td>
                                <td>
                                    <button className="review-button">Review</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewPage;
