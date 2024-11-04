import React, { useState, useEffect } from "react";
import axios from "axios";

const Show = () => {
  const [movies, setMovies] = useState([]); // State for storing movies
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDrama, setSelectedDrama] = useState(null);

  useEffect(() => {
    // Fetch movies data on component mount
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/movies");
        setMovies(response.data.movies); // Set the fetched movies data
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleEditClick = (drama) => {
    setSelectedDrama(drama);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDrama(null);
  };

  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-mx-4 sm:tw-mx-6 lg:tw-max-w-6xl lg:tw-mx-auto tw-my-4">
        <div className="tw-overflow-x-auto tw-p-4">
          <div className="tw-mb-2">
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">
              Page Show Drama
            </h2>
          </div>

          {/* Filter and search section */}
          <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-between tw-items-center tw-mb-4 tw-space-y-4 sm:tw-space-y-0">
            <div className="tw-flex tw-space-x-4">
              <div>
                <label className="tw-mr-2">Filtered by:</label>
                <select className="tw-border tw-border-gray-300 tw-rounded tw-px-2 tw-py-1">
                  <option>None</option>
                  <option>Approved</option>
                  <option>Unapproved</option>
                </select>
              </div>
              <div>
                <label className="tw-mr-2">Shows:</label>
                <select className="tw-border tw-border-gray-300 tw-rounded tw-px-2 tw-py-1">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search..."
                className="tw-border tw-border-gray-400 focus:tw-outline-0 focus:tw-ring-1 focus:tw-ring-gray-300 tw-rounded-full tw-px-4 tw-py-1 tw-w-full sm:tw-w-auto"
              />
            </div>
          </div>

          {/* Movies Table */}
          <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-300 tw-text-sm sm:tw-text-base">
            <thead>
              <tr className="tw-bg-gray-100">
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">#</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Year</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Drama</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Countries</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Actors</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Genres</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Synopsis</th>
                <th className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300 tw-text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={movie.id} className="tw-bg-red-50">
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">{index + 1}</td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">{movie.year}</td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">{movie.title}</td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {movie.countries.map((country) => country.name).join(", ")}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {movie.actors.map((actor) => actor.name).join(", ")}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">{movie.synopsis}</td>
                  <td className="tw-px-4 tw-py-2 tw-border-b tw-border-gray-300">
                    <a
                      href="#"
                      className="tw-text-red-600 hover:tw-underline"
                      onClick={() => handleEditClick(movie)}
                    >
                      Edit
                    </a>
                    <span className="tw-text-gray-500 tw-px-2">|</span>
                    <a href="#" className="tw-text-red-600 hover:tw-underline">
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedDrama && (
        <div className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-50 tw-flex tw-items-center tw-justify-center tw-z-50 tw-p-4">
          <div className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-lg tw-max-w-full tw-w-full md:tw-max-w-4xl lg:tw-max-w-5xl tw-relative tw-overflow-y-auto tw-max-h-screen">
            {/* Close Button */}
            <button
              className="tw-absolute tw-top-2 tw-right-2 tw-bg-red-600 tw-text-white tw-px-3 tw-py-1 tw-rounded-lg tw-text-lg hover:tw-bg-red-700 focus:tw-outline-none"
              onClick={handleCloseModal}
            >
              X
            </button>

            {/* Modal Content */}
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-space-y-4 md:tw-space-y-0 md:tw-space-x-4">
              {/* Image Section */}
              <div className="tw-w-full md:tw-w-1/3 tw-mb-4 md:tw-mb-0">
                {selectedDrama.poster && (
                  <img
                    src={`http://localhost:5000/${selectedDrama.poster}`}
                    alt={selectedDrama.title}
                    className="tw-w-full tw-h-64 tw-object-cover tw-rounded-lg"
                  />
                )}
              </div>

              {/* Text Information Section */}
              <div className="tw-flex-grow">
                <h2 className="tw-text-2xl tw-font-bold">{selectedDrama.title}</h2>
                <p className="tw-text-gray-500">Year: {selectedDrama.year}</p>
                <p className="tw-mt-4">{selectedDrama.synopsis}</p>
                <p className="tw-mt-4">
                  Genres: {selectedDrama.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p className="tw-mt-4">
                  Countries: {selectedDrama.countries.map((country) => country.name).join(", ")}
                </p>
                <p className="tw-mt-4">
                  Actors: {selectedDrama.actors.map((actor) => actor.name).join(", ")}
                </p>
                <p className="tw-mt-4">Rating: {selectedDrama.rating}</p>
              </div>
            </div>

            {/* Trailer Section */}
            {selectedDrama.trailer && (
              <div className="tw-mt-4 tw-flex tw-justify-center">
                <iframe
                  src={selectedDrama.trailer}
                  title="Drama Trailer"
                  className="tw-w-full tw-h-48 tw-rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;


