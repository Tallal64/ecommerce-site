import BestSelling from "./BestSelling";
import Categories from "./Categories";
import Cta from "./Cta";
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
    </div>
  );
};

export default Home;
