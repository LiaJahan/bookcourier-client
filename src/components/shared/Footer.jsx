import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-emerald-400 text-2xl" />

              <h2 className="text-2xl font-bold">
                BookCourier
              </h2>
            </div>

            <p className="text-gray-300">
              Connecting readers with trusted librarians and delivering books directly to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>

              <Link to="/books">
                All Books
              </Link>

              <Link to="/dashboard">
                Dashboard
              </Link>

              <Link to="/login">
                Login
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Services
            </h3>

            <div className="flex flex-col gap-2">
              <p>Book Delivery</p>

              <p>Wishlist</p>

              <p>Order Tracking</p>

              <p>Secure Payments</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-2 text-gray-300">
              <p>
                Email:
                support@bookcourier.com
              </p>

              <p>
                Phone:
                +880 19234 56789
              </p>

              <p>
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="flex gap-4 mt-5 text-2xl">
              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaGithub />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-400">
          © 2026 BookCourier. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;