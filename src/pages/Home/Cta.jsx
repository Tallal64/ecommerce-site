import { Button } from "@nextui-org/button";
import { ctalmg } from "../../assets/imgsData";
import { ChevronRight } from "lucide-react";

const Cta = () => {
  return (
    <div className="container mx-auto h-[550px] overflow-hidden mt-20 flex items-center justify-between bg-foreground/10 rounded-xl">
      {/* img */}
      <div className="flex-1">
        <img
          src={ctalmg}
          alt="ctaImg"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* text */}
      <div className="flex-1 flex flex-col items-start gap-y-3">
        <p className="text-2xl font-medium">Limited Offer</p>
        <h2 className="text-6xl font-bold">
          Get 30% OFF on <br />
          All Fashion
        </h2>
        <p className="">
          Discover Your signature look for less. Enjoy discount All Fashion
          <br />
          item! Limited offer
        </p>
        <Button color="primary" className="w-40 text-base">
          Shop Now
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Cta;
