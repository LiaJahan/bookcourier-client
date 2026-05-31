import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Wishlist = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [wishlist, setWishlist] =
    useState([]);

  const fetchWishlist = async () => {
    if (!user?.email) return;

    const res =
      await axiosPublic.get(
        `/wishlist/${user.email}`
      );

    setWishlist(res.data);
  };

  useEffect(() => {
    fetchWishlist();
  }, [user]);

  const handleRemove = async (id) => {
    try {
      const res =
        await axiosPublic.delete(
          `/wishlist/${id}`
        );

      if (res.data.deletedCount > 0) {
        toast.success(
          "Removed from wishlist"
        );

        fetchWishlist();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-10">
          <h3 className="text-xl">
            No books in wishlist
          </h3>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item._id}
              className="card bg-base-100 shadow-xl"
            >
              <figure className="h-72">
                <img
                  src={item.bookImage}
                  alt={item.bookTitle}
                  className="w-full h-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {item.bookTitle}
                </h2>

                <p>
                  Author:{" "}
                  {item.bookAuthor}
                </p>

                <p>
                  Price: ৳
                  {item.bookPrice}
                </p>

                <div className="card-actions justify-end">
                  <button
                    onClick={() =>
                      handleRemove(
                        item._id
                      )
                    }
                    className="btn btn-error btn-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;