const Testimonials = () => {
  return (
    <section className="py-16 bg-base-200">
      <h2 className="text-4xl font-bold text-center mb-10">
        Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              ⭐⭐⭐⭐⭐ Amazing service and quick delivery.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              ⭐⭐⭐⭐⭐ Found books I couldn't find elsewhere.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <p>
              ⭐⭐⭐⭐⭐ Very smooth ordering process.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;