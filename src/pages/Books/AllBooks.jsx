import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAxiosPublic from "../../hooks/useAxiosPublic";

const AllBooks = () => {
  const axiosPublic = useAxiosPublic();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosPublic.get("/books").then((res) => {
      setBooks(res.data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-10">
        All Books
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-base-100 shadow-xl h-full"
          >
            <figure className="h-80">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {book.title}
              </h2>

              <p>
                <strong>Author:</strong>{" "}
                {book.author}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {book.category}
              </p>

              <p>
                <strong>Price:</strong> ৳
                {book.price}
              </p>

              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/books/${book._id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;