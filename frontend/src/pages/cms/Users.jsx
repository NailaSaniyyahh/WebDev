import React, { useState } from "react";

const Users = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  });

  const openEditModal = (user) => {
    setEditData({
      username: user.username,
      email: user.email,
      password: "",
      retypePassword: "",
    });
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setEditData({ username: "", email: "", password: "", retypePassword: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    // Implement edit logic here (e.g., send data to server)
    console.log("Edited data:", editData);

    closeEditModal();
  };

  return (
    <div className="tw-px-4 tw-flex tw-flex-col tw-justify-start tw-items-center tw-bg-gray-100 tw-min-h-screen tw-w-full">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-overflow-hidden tw-w-full tw-mx-4 sm:tw-mx-6 lg:tw-mx-auto tw-my-4">
        <div className="tw-p-4">
          <div>
            <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800">Page Users</h2>
          </div>
          <div>
            <h1 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mt-4">Insert Users</h1>
            <div className="tw-flex tw-space-x-4 tw-items-center">
              <input
                type="text"
                placeholder="Enter username"
                className="tw-bg-indigo-100/30 tw-border tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              ></input>
              <input
                type="text"
                placeholder="Enter email"
                className="tw-bg-indigo-100/30 tw-border tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              ></input>
              <input
                type="text"
                placeholder="Enter password"
                className="tw-bg-indigo-100/30 tw-border tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              ></input>
            </div>
            <div className="tw-mt-2">
              <button>
                <a
                  className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-xl tw-bg-green-600 tw-py-2 tw-px-6 tw-font-dm tw-text-base tw-font-medium tw-text-white tw-shadow-xl tw-shadow-green-100/75 tw-transition-transform tw-duration-200 tw-ease-in-out hover:tw-scale-[1.02]"
                  href="#"
                >
                  Submit
                </a>
              </button>
            </div>

            <div className="tw-mt-2 tw-flex tw-justify-end">
              <input
                type="text"
                placeholder="Search..."
                className="tw-border tw-border-gray-400 focus:tw-outline-0 focus:tw-ring-1 focus:tw-ring-gray-300 tw-rounded-full tw-px-4 tw-py-1 tw-w-full sm:tw-w-auto"
              />
            </div>
          </div>

          <div className="tw-mt-4">
            <div className="tw-overflow-x-auto">
              <table className="tw-min-w-full tw-bg-white tw-border tw-border-gray-300">
                <thead>
                  <tr className="tw-bg-gray-100">
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">#</th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">Username</th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">Email</th>
                    <th className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300 tw-text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tw-bg-red-50">
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">1</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">Farrel</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">farrel.keiza@gmail.com</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      <a href="#" className="tw-text-red-600 hover:tw-underline tw-mr-2">
                        Suspend Account
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mx-2"
                        onClick={() => openEditModal({ username: "Farrel", email: "farrel.keiza@gmail.com" })}
                      >
                        Edit
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a href="#" className="tw-text-red-600 hover:tw-underline tw-ml-2">
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">2</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">Naila</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">naila@gmail.com</td>
                    <td className="tw-py-2 tw-px-4 tw-border-b tw-border-gray-300">
                      <a href="#" className="tw-text-red-600 hover:tw-underline tw-mr-2">
                        Suspend Account
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a
                        href="#"
                        className="tw-text-red-600 hover:tw-underline tw-mx-2"
                        onClick={() => openEditModal({ username: "Naila", email: "naila@gmail.com" })}
                      >
                        Edit
                      </a>
                      <span className="tw-text-gray-500">|</span>
                      <a href="#" className="tw-text-red-600 hover:tw-underline tw-ml-2">
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

      {/* Modal */}
      {isEditModalOpen && (
        <div className="tw-fixed tw-inset-0 tw-bg-black/30 tw-flex tw-justify-center tw-items-center tw-z-50">
          <div className="tw-bg-white tw-rounded-lg tw-shadow-lg tw-w-full sm:tw-w-3/4 lg:tw-w-1/2 tw-p-6">
            <h3 className="tw-text-xl tw-font-bold tw-text-gray-800">Edit User</h3>
            <form onSubmit={handleEditSubmit} className="tw-space-y-4 tw-mt-4">
              <input
                type="text"
                name="username"
                value={editData.username}
                onChange={handleInputChange}
                placeholder="Username"
                className="tw-w-full tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="tw-w-full tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              />
              <input
                type="password"
                name="password"
                value={editData.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="tw-w-full tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              />
              <input
                type="password"
                name="retypePassword"
                value={editData.retypePassword}
                onChange={handleInputChange}
                placeholder="Re-type Password"
                className="tw-w-full tw-bg-indigo-100/30 tw-px-4 tw-py-2 tw-rounded-lg focus:tw-outline-0 focus:tw-ring-2 focus:tw-ring-gray-300"
              />
              <div className="tw-flex tw-justify-end tw-space-x-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="tw-bg-gray-500 tw-px-4 tw-py-2 tw-rounded-lg tw-text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="tw-bg-green-600 tw-px-4 tw-py-2 tw-rounded-lg tw-text-white"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;


