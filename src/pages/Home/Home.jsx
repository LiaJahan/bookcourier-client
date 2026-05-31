import Banner from "./Sections/Banner";
import LatestBooks from "./Sections/LatestBooks";
import Coverage from "./Sections/Coverage";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Statistics from "./Sections/Statistics";
import Testimonials from "./Sections/Testimonials";
import CTA from "./Sections/CTA";

const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <Coverage />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;