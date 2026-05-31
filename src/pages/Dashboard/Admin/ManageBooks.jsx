import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageBooks = () => {
  const axiosPublic = useAxiosPublic();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosPublic
      .get("/all-books")
      .then((res) => {
        setBooks(res.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Manage Books
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
                  <span
                    className={`badge ${
                      book.status ===
                      "published"
                        ? "badge-success"
                        : "badge-warning"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>

                <td>
                  <Link
                    to={`/dashboard/edit-book/${book._id}`}
                    className="btn btn-sm btn-primary"
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

export default ManageBooks;