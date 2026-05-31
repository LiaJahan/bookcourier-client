const Statistics = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-10">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-5xl font-bold text-primary">
                500+
              </h3>

              <p>Books Available</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-5xl font-bold text-secondary">
                1000+
              </h3>

              <p>Active Readers</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-5xl font-bold text-accent">
                250+
              </h3>

              <p>Orders Delivered</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-5xl font-bold text-success">
                8
              </h3>

              <p>Cities Covered</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Statistics;