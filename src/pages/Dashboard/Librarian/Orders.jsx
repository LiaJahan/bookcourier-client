import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [orders, setOrders] =
    useState([]);

  const fetchOrders = async () => {
    if (!user?.email) return;

    const res =
      await axiosPublic.get(
        `/librarian-orders/${user.email}`
      );

    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const updateStatus = async (
    id,
    status
  ) => {
    try {
      const res =
        await axiosPublic.patch(
          `/orders/status/${id}`,
          { status }
        );

      if (res.data.modifiedCount > 0) {
        toast.success(
          `Order marked as ${status}`
        );

        fetchOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Book Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Status</th>
              <th>Payment</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map(
              (order, index) => (
                <tr key={order._id}>
                  <td>
                    {index + 1}
                  </td>

                  <td>
                    {order.bookTitle}
                  </td>

                  <td>
                    {order.userName}
                  </td>

                  <td>
                    {order.phone}
                  </td>

                  <td>
                    {order.address}
                  </td>

                  <td>
                    <span className="badge badge-info">
                      {
                        order.orderStatus
                      }
                    </span>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        order.paymentStatus ===
                        "paid"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {
                        order.paymentStatus
                      }
                    </span>
                  </td>

                  <td>
                    <div className="flex gap-2 flex-wrap">

                      {order.orderStatus ===
                        "pending" && (
                        <button
                          onClick={() =>
                            updateStatus(
                              order._id,
                              "processing"
                            )
                          }
                          className="btn btn-sm btn-primary"
                        >
                          Processing
                        </button>
                      )}

                      {order.orderStatus ===
                        "processing" && (
                        <button
                          onClick={() =>
                            updateStatus(
                              order._id,
                              "delivered"
                            )
                          }
                          className="btn btn-sm btn-success"
                        >
                          Delivered
                        </button>
                      )}

                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;