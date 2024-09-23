import { Button } from "@nextui-org/button";
import {
  bannerGrey,
  bannerOrange2,
  hoodieOrginal,
} from "../../assets/imgsData";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[820px] overflow-hidden">
      <div className="container mx-auto flex flex-col gap-y-12 items-center h-full md:flex-row ">
        {/* for text */}
        <div className="px-10 flex flex-col gap-y-5 text-center md:text-left">
          <h2 className="text-3xl lg:text-6xl font-semibold text-secondary-50">
            Step into Fashion at your <br /> Ultimate Style Destination.
          </h2>
          <p className="text-lg text-secondary-100">
            Dive into your ultimate style destination today and transform your
            <br /> wardrobe with premium fashion at unbeatable prices.
          </p>
          <div>
            <Button color="primary" className="w-40 text-base">
              Shop Now
              <ChevronRight />
            </Button>
          </div>
        </div>

        {/* for img */}
        <div className="absolute bg-black/60 w-full h-full top-0 right-0 -z-10" />
        <img
          src={bannerOrange2}
          alt="img"
          className="absolute w-full h-full object-cover object-top top-0 right-0 -z-20"
        />
      </div>
    </div>
  );
};

export default HeroSection;
