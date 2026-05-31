import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axiosPublic
      .get(
        `/librarian-orders/${user.email}`
      )
      .then((res) => {
        setOrders(res.data);
      });
  }, [user]);

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
              <th>Order Status</th>
              <th>Payment</th>
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