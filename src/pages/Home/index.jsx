import BestSelling from "./BestSelling";
import Categories from "./Categories";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Services />
      <Categories />
      <BestSelling />
    </div>
  );
};

export default Home;
