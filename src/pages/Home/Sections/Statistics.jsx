import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        Our Impact
      </h2>

      <div className="stats shadow w-full max-w-5xl mx-auto">

        <div className="stat">
          <div className="stat-title">
            Books
          </div>

          <div className="stat-value">
            {inView && (
              <CountUp
                end={500}
                duration={3}
              />
            )}
            +
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">
            Readers
          </div>

          <div className="stat-value">
            {inView && (
              <CountUp
                end={1000}
                duration={3}
              />
            )}
            +
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">
            Orders
          </div>

          <div className="stat-value">
            {inView && (
              <CountUp
                end={250}
                duration={3}
              />
            )}
            +
          </div>
        </div>

      </div>
    </section>
  );
};

export default Statistics;