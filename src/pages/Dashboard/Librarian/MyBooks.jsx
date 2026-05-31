import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyBooks = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axiosPublic
      .get(
        `/books/librarian/${user.email}`
      )
      .then((res) => {
        setBooks(res.data);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        My Books
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>

                <td>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-16 h-20 object-cover rounded"
                  />
                </td>

                <td>{book.title}</td>

                <td>{book.author}</td>

                <td>
                  <span className="badge badge-primary">
                    {book.status}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/dashboard/edit-book/${book._id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooks;