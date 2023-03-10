import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";

import { Avatar } from "@material-tailwind/react";

const userData = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!Array.isArray(users)) {
    return null; // or return an error message
  }

  //  function deleteUser(id) {
  //    axios.delete(`https:reqres.in/api/users/${id}`).then(loadUsers());
  //  }
  const notify = () => toast.success("Successfully Deleted!");

  return (
    <div>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold"> HOME PAGE</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        First-Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Last-Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Avatar
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  slice(0,currentPage *2) */}
                    {users &&
                      users.map((data, index) => (
                        <tr
                          key={index}
                          className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-bold">
                            {index+1 }
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {data.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {data.first_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {data.last_name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            <Avatar
                              src={data.avatar}
                              alt="avatar"
                              variant="circular"
                            />
                          </td>
                          <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                            <Link
                              to={`/view/${data.id}`}
                              className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                            >
                              VIew
                            </Link>
                            <Link
                              to={`/edit-user/${data.id}`}
                              className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                            >
                              Edit
                            </Link>

                            <Link
                            
                              onClick={notify}
                              to={"#"}
                              className="bg-red-600 text-white px-6 py-2 rounded-lg"
                            >
                              Delete
                            </Link>
                            <Toaster />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userData;
