import React, { useState, useEffect } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from the API
  const fetchReviews = async () => {
    try {
      const response = await axios.get("http://localhost:5000/reviews"); // Adjust the URL as necessary
      setReviews(response.data.reviews || []);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-mx-4 sm:tw-mx-6 lg:tw-max-w-6xl lg:tw-mx-auto tw-my-4">
        <div className="tw-overflow-x-auto tw-p-4">
          <div className="tw-mb-2">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">
              Page Comments
            </h2>
          </div>

          <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-300 tw-text-sm sm:tw-text-base">
            <thead>
              <tr className="tw-bg-gray-100">
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Name</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Rate</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Year</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Drama</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Countries</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Comments</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review.id} className="tw-bg-red-50">
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {review.author}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    <span className="tw-text-red-600">{"★".repeat(review.rating)}</span>
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {review.Movie?.year || "N/A"}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {review.Movie?.title || "N/A"}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {review.Movie?.countries?.map((country) => country.name).join(", ") || "N/A"}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {review.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
