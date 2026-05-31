import { useContext } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const handleAddBook = async (e) => {
    e.preventDefault();

    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value);
    const status = form.status.value;

    const image = form.image.files[0];

    try {
      const formData = new FormData();

      formData.append("image", image);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

      const imageResponse = await fetch(
        imageUploadUrl,
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData =
        await imageResponse.json();

      const imageUrl =
        imageData.data.display_url;

      const bookInfo = {
        title,
        image: imageUrl,
        author,
        category,
        description,
        price,
        status,

        librarianName:
          user?.displayName,
        librarianEmail:
          user?.email,

        createdAt: new Date(),
      };

      const res =
        await axiosPublic.post(
          "/books",
          bookInfo
        );

      if (res.data.insertedId) {
        toast.success(
          "Book added successfully"
        );

        form.reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-4xl">
      <h2 className="text-3xl font-bold mb-6">
        Add Book
      </h2>

      <form
        onSubmit={handleAddBook}
        className="space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Book Description"
          className="textarea textarea-bordered w-full"
          rows="5"
          required
        ></textarea>

        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full"
          required
        />

        <select
          name="status"
          className="select select-bordered w-full"
          required
        >
          <option value="published">
            Published
          </option>

          <option value="unpublished">
            Unpublished
          </option>
        </select>

        <input
          type="file"
          name="image"
          className="file-input file-input-bordered w-full"
          required
        />

        <button className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;