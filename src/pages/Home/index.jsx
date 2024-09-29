import BestSelling from "./BestSelling";
import Categories from "./Categories";
import Cta from "./Cta";
import HeroSection from "./HeroSection";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <Categories />
      <BestSelling />
      <Cta />
    </>
  );
};

export default Home;
