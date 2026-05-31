import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-5xl font-bold mb-4">
        Ready to Find Your Next Book?
      </h2>

      <Link
        to="/books"
        className="btn btn-primary"
      >
        Browse Books
      </Link>
    </section>
  );
};

export default CTA;