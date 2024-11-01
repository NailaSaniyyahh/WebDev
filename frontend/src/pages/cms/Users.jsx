import React from "react";

const Users = () => {
  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-mx-4 sm:tw-mx-6 lg:tw-mx-auto tw-my-4">
        <div className="tw-p-4">
          <div>
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">
              Page Users
            </h2>
          </div>
          <div>
            <h1 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mt-4">
              Insert Users
            </h1>
            <div className="tw-flex tw-space-x-4 tw-items-center">
              <input
                type="text"
                placeholder="Enter username"
                className="tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              ></input>
              <input
                type="text"
                placeholder="Enter email"
                className="tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              ></input>
              <button>
                <a
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-green-600 tw-py-2 tw-px-6 tw-font-dm tw-text-base tw-font-medium tw-text-white tw-shadow-xl tw-shadow-green-100/75 tw-transition-transform tw-duration-200 tw-ease-in-out hover:tw-scale-[1.02]"
                  href="#"
                >
                  Submit
                </a>
              </button>
            </div>
          </div>

          <div className="tw-mt-4">
            <div className="tw-overflow-x-auto">
              <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-300">
                <thead>
                  <tr className="tw-bg-gray-100">
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                      #
                    </th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                      Username
                    </th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                      Email
                    </th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tw-bg-red-50">
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      1
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      Farrel
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      farrel.keiza@gmail.com
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mr-2"
                      >
                        Send first email
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mx-2"
                      >
                        Edit
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-ml-2"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      2
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      Naila
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      naila@gmail.com
                    </td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mr-2"
                      >
                        Send first email
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mx-2"
                      >
                        Edit
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-ml-2"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
