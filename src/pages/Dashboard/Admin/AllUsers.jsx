import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();

  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axiosPublic.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleMakeAdmin = async (id) => {
    try {
      const res = await axiosPublic.patch(
        `/users/admin/${id}`
      );

      if (res.data.modifiedCount > 0) {
        toast.success(
          "User promoted to Admin"
        );

        fetchUsers();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleMakeLibrarian = async (
    id
  ) => {
    try {
      const res = await axiosPublic.patch(
        `/users/librarian/${id}`
      );

      if (res.data.modifiedCount > 0) {
        toast.success(
          "User promoted to Librarian"
        );

        fetchUsers();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        All Users
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Librarian</th>
              <th>Make Admin</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td>{user.name}</td>

                <td>{user.email}</td>

                <td>
                  <span className="badge badge-primary">
                    {user.role}
                  </span>
                </td>

                <td>
                  {user.role !==
                    "librarian" &&
                    user.role !==
                      "admin" && (
                      <button
                        onClick={() =>
                          handleMakeLibrarian(
                            user._id
                          )
                        }
                        className="btn btn-sm btn-success"
                      >
                        Make Librarian
                      </button>
                    )}
                </td>

                <td>
                  {user.role !==
                    "admin" && (
                    <button
                      onClick={() =>
                        handleMakeAdmin(
                          user._id
                        )
                      }
                      className="btn btn-sm btn-warning"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;