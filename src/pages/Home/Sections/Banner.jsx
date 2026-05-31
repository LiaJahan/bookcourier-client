import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="carousel w-full h-[500px]">

      {/* Slide 1 */}
      <div
        id="slide1"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
          alt="Library"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-2xl text-white px-8 md:px-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Discover Your Next Favorite Book
            </h2>

            <p className="mt-4 mb-6 text-lg">
              Explore thousands of books from trusted librarians and enjoy a smooth ordering experience.
            </p>

            <Link
              to="/books"
              className="btn btn-primary"
            >
              Browse Books
            </Link>
          </div>
        </div>

        <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
          <a
            href="#slide3"
            className="btn btn-circle"
          >
            ❮
          </a>

          <a
            href="#slide2"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div
        id="slide2"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
          alt="Books"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-2xl text-white px-8 md:px-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Summer Reading Sale
            </h2>

            <p className="mt-4 mb-6 text-lg">
              Get up to 25% off selected books and expand your reading collection today.
            </p>

            <Link
              to="/books"
              className="btn btn-secondary"
            >
              Shop Now
            </Link>
          </div>
        </div>

        <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
          <a
            href="#slide1"
            className="btn btn-circle"
          >
            ❮
          </a>

          <a
            href="#slide3"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div
        id="slide3"
        className="carousel-item relative w-full"
      >
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Reading"
          className="w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-2xl text-white px-8 md:px-16">
            <h2 className="text-4xl md:text-6xl font-bold">
              Fast Delivery Across Bangladesh
            </h2>

            <p className="mt-4 mb-6 text-lg">
              Order books online and receive them quickly at your doorstep from verified librarians.
            </p>

            <Link
              to="/books"
              className="btn btn-accent"
            >
              View Collection
            </Link>
          </div>
        </div>

        <div className="absolute flex justify-between left-5 right-5 top-1/2 -translate-y-1/2">
          <a
            href="#slide2"
            className="btn btn-circle"
          >
            ❮
          </a>

          <a
            href="#slide1"
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>

    </div>
  );
};

export default Banner;