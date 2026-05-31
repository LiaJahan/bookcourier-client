import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAxiosPublic from "../../../hooks/useAxiosPublic";

const EditBook = () => {
  const loadedBook = useLoaderData();

  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const [book, setBook] =
    useState(loadedBook);

  useEffect(() => {
    setBook(loadedBook);
  }, [loadedBook]);

  const handleUpdateBook = async (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedBook = {
      title: form.title.value,
      author: form.author.value,
      category: form.category.value,
      description:
        form.description.value,
      price: parseFloat(
        form.price.value
      ),
      status: form.status.value,
    };

    try {
      const res =
        await axiosPublic.patch(
          `/books/${book._id}`,
          updatedBook
        );

      if (res.data.modifiedCount > 0) {
        toast.success(
          "Book updated successfully"
        );

        navigate(
          "/dashboard/my-books"
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">
        Edit Book
      </h2>

      <form
        onSubmit={handleUpdateBook}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          defaultValue={book.title}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="author"
          defaultValue={book.author}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="category"
          defaultValue={book.category}
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          defaultValue={
            book.description
          }
          className="textarea textarea-bordered w-full"
          rows="5"
          required
        ></textarea>

        <input
          type="number"
          name="price"
          defaultValue={book.price}
          className="input input-bordered w-full"
          required
        />

        <select
          name="status"
          defaultValue={book.status}
          className="select select-bordered w-full"
        >
          <option value="published">
            Published
          </option>

          <option value="unpublished">
            Unpublished
          </option>
        </select>

        <button className="btn btn-primary">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;