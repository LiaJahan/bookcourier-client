import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    if (!user?.email) return;

    const res = await axiosPublic.get(
      `/orders/${user.email}`
    );

    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, [user]);

  const handleCancelOrder = async (
    id
  ) => {
    try {
      const res =
        await axiosPublic.patch(
          `/orders/cancel/${id}`
        );

      if (res.data.modifiedCount > 0) {
        toast.success(
          "Order cancelled"
        );

        fetchOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handlePayment = async (id) => {
    try {
      const res =
        await axiosPublic.patch(
          `/orders/pay/${id}`
        );

      if (res.data.modifiedCount > 0) {
        toast.success(
          "Payment successful"
        );

        fetchOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRefundRequest = () => {
    document
      .getElementById(
        "refund_modal"
      )
      .showModal();
  };

  const getOrderBadgeClass = (
    status
  ) => {
    switch (status) {
      case "pending":
        return "badge-warning";

      case "processing":
        return "badge-info";

      case "delivered":
        return "badge-success";

      case "cancelled":
        return "badge-error";

      default:
        return "badge-neutral";
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        My Orders
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>Order Status</th>
              <th>Payment</th>
              <th>Order Date</th>
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
                    <span
                      className={`badge ${getOrderBadgeClass(
                        order.orderStatus
                      )}`}
                    >
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
                    {new Date(
                      order.orderDate
                    ).toLocaleDateString()}
                  </td>

                  <td>
                    <div className="flex gap-2 flex-wrap">

                      {order.orderStatus ===
                        "pending" &&
                        order.paymentStatus ===
                          "unpaid" && (
                          <>
                            <button
                              onClick={() =>
                                handleCancelOrder(
                                  order._id
                                )
                              }
                              className="btn btn-sm btn-error"
                            >
                              Cancel
                            </button>

                            <button
                              onClick={() =>
                                handlePayment(
                                  order._id
                                )
                              }
                              className="btn btn-sm btn-primary"
                            >
                              Pay Now
                            </button>
                          </>
                        )}

                      {order.orderStatus ===
                        "pending" &&
                        order.paymentStatus ===
                          "paid" && (
                          <button
                            onClick={
                              handleRefundRequest
                            }
                            className="btn btn-sm btn-warning"
                          >
                            Request Refund
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

      <dialog
        id="refund_modal"
        className="modal"
      >
        <div className="modal-box">
          <h3 className="font-bold text-xl">
            Refund Request
          </h3>

          <p className="py-4">
            Your refund request has
            been recorded.
          </p>

          <p>
            Our support team will
            contact you within 72
            hours regarding the next
            steps of your refund
            process.
          </p>

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

export default MyOrders;