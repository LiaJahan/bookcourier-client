import Banner from "./Sections/Banner";
import LatestBooks from "./Sections/LatestBooks";
import Coverage from "./Sections/Coverage";
import WhyChooseUs from "./Sections/WhyChooseUs";
import Statistics from "./Sections/Statistics";
import Testimonials from "./Sections/Testimonials";
import CTA from "./Sections/CTA";
import ReadingJourney from "./Sections/ReadingJourney";
import MovingBooks from "./Sections/MovingBooks";
const Home = () => {
  return (
    <div>
      <Banner />
      <LatestBooks />
      <MovingBooks />
      <Coverage />
      <WhyChooseUs />
      <ReadingJourney />
      <Statistics />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;