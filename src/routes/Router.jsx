import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";

import AllBooks from "../pages/Books/AllBooks";
import BookDetails from "../pages/Books/BookDetails";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import MyProfile from "../pages/Dashboard/User/MyProfile";
import MyOrders from "../pages/Dashboard/User/MyOrders";
import Wishlist from "../pages/Dashboard/User/Wishlist";
import Invoices from "../pages/Dashboard/User/Invoices";

import AddBook from "../pages/Dashboard/Librarian/AddBook";
import MyBooks from "../pages/Dashboard/Librarian/MyBooks";
import Orders from "../pages/Dashboard/Librarian/Orders";

import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import ManageBooks from "../pages/Dashboard/Admin/ManageBooks";

import ErrorPage from "../pages/Error/ErrorPage";

import EditBook from "../pages/Dashboard/Librarian/EditBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      // 
      {
  path: "/books/:id",
  element: <BookDetails />,
  loader: async ({ params }) =>
    fetch(
      `http://localhost:5000/books/${params.id}`
    ),
},
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },

      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "my-books",
        element: <MyBooks />,
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
        loader: async ({ params }) =>
        fetch(`http://localhost:5000/books/${params.id}`),
      },
      {
        path: "orders",
        element: <Orders />,
      },

      {
        path: "all-users",
        element: <AllUsers />,
      },
      {
        path: "manage-books",
        element: <ManageBooks />,
      },
    ],
  },
]);

export default router;