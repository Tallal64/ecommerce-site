import BestSelling from "./BestSelling";
import Categories from "./Categories";
import Cta from "./Cta";
import ExploreCta from "./ExploreCta";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Categories />
      <BestSelling />
      <Cta />
      <ExploreCta />
    </div>
  );
};

export default Home;
