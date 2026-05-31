const ReadingJourney = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto">

        <h2
          data-aos="fade-up"
          className="text-4xl font-bold text-center mb-16"
        >
          Your Reading Journey
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div
            data-aos="fade-right"
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body text-center">
              <h3 className="text-5xl">
                📖
              </h3>

              <h2 className="font-bold">
                Discover
              </h2>

              <p>
                Explore books from trusted librarians.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body text-center">
              <h3 className="text-5xl">
                ❤️
              </h3>

              <h2 className="font-bold">
                Wishlist
              </h2>

              <p>
                Save your favorite books.
              </p>
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body text-center">
              <h3 className="text-5xl">
                🛒
              </h3>

              <h2 className="font-bold">
                Order
              </h2>

              <p>
                Place orders securely online.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body text-center">
              <h3 className="text-5xl">
                🚚
              </h3>

              <h2 className="font-bold">
                Receive
              </h2>

              <p>
                Get books delivered to your doorstep.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReadingJourney;