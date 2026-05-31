import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const LatestBooks = () => {
  const axiosPublic = useAxiosPublic();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axiosPublic.get("/books").then((res) => {
      setBooks(res.data.slice(0, 6));
    });
  }, []);

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Latest Books
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={book.image}
                alt={book.title}
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title">
                {book.title}
              </h2>

              <Link
                to={`/books/${book._id}`}
                className="btn btn-primary"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBooks;