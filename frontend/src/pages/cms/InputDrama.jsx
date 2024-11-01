import React, { useState } from "react";

const InputDrama = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [actors, setActors] = useState(Array(9).fill(null));
  const genres = ["Action", "Adventures", "Romance", "Drama", "Slice of Life"];

  const handleGenreChange = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleActorChange = (index, actor) => {
    const newActors = [...actors];
    newActors[index] = actor;
    setActors(newActors);
  };

  const removeActor = (index) => {
    const newActors = [...actors];
    newActors[index] = null;
    setActors(newActors);
  };

  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-max-w-7xl tw-mx-4 sm:tw-mx-6 lg:tw-mx-auto tw-my-4">
        <div className="tw-p-4">
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-2">
            Page Input Drama
          </h2>
          <form>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-space-y-4 sm:tw-space-y-0 sm:tw-space-x-4">
              {/* Left Column: Submit Button and Image */}
              <div className="tw-flex tw-flex-col tw-items-center">
                <div className="tw-w-24 tw-h-24 tw-bg-gray-300 tw-rounded tw-mb-4"></div>
                <button>
                  <a
                    className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-green-600 tw-py-2 tw-px-6 tw-font-dm tw-text-base tw-font-medium tw-text-white tw-shadow-xl tw-shadow-green-100/75 tw-transition-transform tw-duration-200 tw-ease-in-out hover:tw-scale-[1.02]"
                    href="#"
                  >
                    Submit
                  </a>
                </button>
              </div>

              {/* Right Column: Input Fields */}
              <div className="tw-flex-grow">
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
                  <div>
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="Enter title"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                    />
                  </div>
                  <div>
                    <label>Alternative Title</label>
                    <input
                      type="text"
                      placeholder="Enter alternative title"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                    />
                  </div>
                  <div>
                    <label>Year</label>
                    <input
                      type="text"
                      placeholder="Enter year"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                    />
                  </div>
                  <div>
                    <label>Country</label>
                    <input
                      type="text"
                      placeholder="Enter country"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                    />
                  </div>
                  <div className="tw-col-span-2">
                    <label>Synopsis</label>
                    <textarea
                      placeholder="Enter synopsis"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="tw-col-span-2">
                    <label>Availability</label>
                    <input
                      type="text"
                      placeholder="Enter availability"
                      className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                    />
                  </div>
                </div>

                {/* Genres */}
                <div className="tw-mt-4">
                  <label>Add Genres</label>
                  <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-2">
                    {genres.map((genre) => (
                      <div key={genre}>
                        <input
                          type="checkbox"
                          id={genre}
                          value={genre}
                          checked={selectedGenres.includes(genre)}
                          onChange={() => handleGenreChange(genre)}
                        />
                        <label htmlFor={genre} className="tw-ml-2">
                          {genre}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actors */}
                <div className="tw-mt-4">
                  <label>Add Actors (Up to 9)</label>
                  <input
                    type="text"
                    placeholder="Search Actor Names"
                    className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                  />
                  <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 tw-gap-4 tw-mt-4">
                    {actors.map((actor, index) => (
                      <div key={index} className="tw-relative">
                        <div className="tw-w-16 tw-h-16 tw-bg-gray-300 tw-rounded tw-mb-2"></div>
                        <input
                          type="text"
                          placeholder={`Actor ${index + 1}`}
                          value={actor || ""}
                          onChange={(e) =>
                            handleActorChange(index, e.target.value)
                          }
                          className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                        />
                        {actor && (
                          <button
                            type="button"
                            className="tw-absolute tw-top-0 tw-right-0 tw-text-red-500"
                            onClick={() => removeActor(index)}
                          >
                            x
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trailer Link */}
                <div className="tw-mt-4">
                  <label>Link Trailer</label>
                  <input
                    type="text"
                    placeholder="Enter trailer link"
                    className="tw-w-full tw-border tw-border-gray-300 tw-rounded-lg tw-p-2"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InputDrama;
