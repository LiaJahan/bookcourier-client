import {
  FaBook,
  FaTruck,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-200">
      <h2 className="text-4xl font-bold text-center mb-10">
        Why Choose BookCourier?
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        <div className="text-center">
          <FaBook className="mx-auto text-5xl mb-4" />
          <h3 className="font-bold">
            Huge Collection
          </h3>
        </div>

        <div className="text-center">
          <FaTruck className="mx-auto text-5xl mb-4" />
          <h3 className="font-bold">
            Fast Delivery
          </h3>
        </div>

        <div className="text-center">
          <FaShieldAlt className="mx-auto text-5xl mb-4" />
          <h3 className="font-bold">
            Secure Payments
          </h3>
        </div>

        <div className="text-center">
          <FaUsers className="mx-auto text-5xl mb-4" />
          <h3 className="font-bold">
            Trusted Community
          </h3>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;