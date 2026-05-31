import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const BookDetails = () => {
  const book = useLoaderData();

  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const handleOrder = async (e) => {
    e.preventDefault();

    const form = e.target;

    const phone = form.phone.value;
    const address = form.address.value;

    const orderInfo = {
      bookId: book._id,

      bookTitle: book.title,
      bookImage: book.image,
      bookPrice: book.price,

      userName: user?.displayName,
      userEmail: user?.email,

      phone,
      address,

      orderStatus: "pending",
      paymentStatus: "unpaid",

      orderDate: new Date(),

      librarianEmail:
        book.librarianEmail,
    };

    try {
      const res =
        await axiosPublic.post(
          "/orders",
          orderInfo
        );

      if (res.data.insertedId) {
        toast.success(
          "Order placed successfully"
        );

        document
          .getElementById(
            "order_modal"
          )
          .close();

        form.reset();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">
            {book.title}
          </h2>

          <p className="mb-2">
            <strong>Author:</strong>{" "}
            {book.author}
          </p>

          <p className="mb-2">
            <strong>Category:</strong>{" "}
            {book.category}
          </p>

          <p className="mb-2">
            <strong>Status:</strong>{" "}
            {book.status}
          </p>

          <p className="mb-4">
            <strong>Price:</strong> ৳
            {book.price}
          </p>

          <p className="mb-6">
            {book.description}
          </p>

          <button
            className="btn btn-primary"
            onClick={() =>
              document
                .getElementById(
                  "order_modal"
                )
                .showModal()
            }
          >
            Order Now
          </button>
        </div>

      </div>

      <dialog
        id="order_modal"
        className="modal"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-4">
            Order Book
          </h3>

          <form
            onSubmit={handleOrder}
            className="space-y-4"
          >
            <input
              type="text"
              value={
                user?.displayName || ""
              }
              readOnly
              className="input input-bordered w-full"
            />

            <input
              type="email"
              value={
                user?.email || ""
              }
              readOnly
              className="input input-bordered w-full"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>

            <button className="btn btn-primary w-full">
              Place Order
            </button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BookDetails;