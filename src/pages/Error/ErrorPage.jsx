import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-4">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-error">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="btn btn-primary mt-6"
        >
          Back To Home
        </Link>

      </div>

    </div>
  );
};

export default ErrorPage;