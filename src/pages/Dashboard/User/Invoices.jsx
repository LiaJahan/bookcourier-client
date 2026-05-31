import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Invoices = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();

  const [invoices, setInvoices] =
    useState([]);

  useEffect(() => {
    if (!user?.email) return;

    axiosPublic
      .get(`/orders/${user.email}`)
      .then((res) => {
        const paidOrders =
          res.data.filter(
            (order) =>
              order.paymentStatus ===
              "paid"
          );

        setInvoices(paidOrders);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">
        Invoices
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Payment ID</th>
              <th>Book</th>
              <th>Amount</th>
              <th>Payment Date</th>
            </tr>
          </thead>

          <tbody>
            {invoices.map(
              (invoice, index) => (
                <tr key={invoice._id}>
                  <td>
                    {index + 1}
                  </td>

                  <td>
                    {invoice.paymentId ||
                      "Old Payment"}
                  </td>

                  <td>
                    {
                      invoice.bookTitle
                    }
                  </td>

                  <td>
                    ৳
                    {
                      invoice.bookPrice
                    }
                  </td>

                  <td>
                    {invoice.paymentDate
                      ? new Date(
                          invoice.paymentDate
                        ).toLocaleDateString()
                      : "N/A"}
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

export default Invoices;