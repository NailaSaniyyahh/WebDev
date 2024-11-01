import React, { useState, useEffect } from "react";
import axios from "axios";

const Actors = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [actors, setActors] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected file: ", selectedFile);
  };

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/actors", {
          params: { limit: 5000 },
        });
        setActors(response.data.actors || []);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-mx-4 sm:tw-mx-6 lg:tw-mx-auto lg:tw-max-w-7xl tw-my-4">
        <div className="tw-p-4">
          <div>
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">
              Page Actors
            </h2>
          </div>
          <div>
            <h1 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mt-4">
              Insert Actor
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="tw-flex tw-flex-col tw-space-y-4 sm:tw-space-y-0 sm:tw-flex-row sm:tw-space-x-4 tw-items-center">
                <input
                  type="text"
                  placeholder="Enter actor name"
                  className="tw-w-full sm:tw-w-auto tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
                />
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="image/*"
                />
              </div>
              <div className="tw-mt-2 tw-flex tw-flex-col tw-space-y-2 sm:tw-space-y-0 sm:tw-space-x-4 sm:tw-flex-row tw-items-center">
                <button
                  type="submit"
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-green-600 tw-py-2 tw-px-6 tw-font-medium tw-text-white tw-shadow-xl tw-transition-transform tw-duration-200 tw-ease-in-out hover:tw-scale-[1.02]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="tw-mt-2 tw-flex tw-justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="tw-border tw-border-gray-400 focus:tw-outline-0 focus:tw-ring-1 focus:tw-ring-gray-300 tw-rounded-full tw-px-4 tw-py-1 tw-w-full sm:tw-w-auto"
            />
          </div>

          <div className="tw-mt-4 tw-overflow-x-auto">
            <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-300">
              <thead>
                <tr className="tw-bg-gray-100">
                  <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                    #
                  </th>
                  <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                    Actor Name
                  </th>
                  <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                    Photo
                  </th>
                  <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {actors.length > 0 ? (
                  actors.map((actor, index) => (
                    <tr key={actor.id} className="tw-bg-red-50">
                      <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                        {index + 1}
                      </td>
                      <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                        {actor.name}
                      </td>
                      <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                        {actor.profile_path ? (
                          <img
                            src={actor.profile_path}
                            alt={`${actor.name} photo`}
                            className="tw-w-20 tw-h-25 tw-rounded"
                          />
                        ) : (
                          <div className="tw-w-16 tw-h-16 tw-bg-gray-300 tw-rounded"></div>
                        )}
                      </td>
                      <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                        <a
                          href="#"
                          className="tw-text-blue-600 hover:tw-underline"
                        >
                          Edit
                        </a>
                        <span className="tw-text-gray-500 tw-px-2">|</span>
                        <a
                          href="#"
                          className="tw-text-red-600 hover:tw-underline"
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300"
                      colSpan="4"
                    >
                      No actors found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
