import { Button } from "@nextui-org/button";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback } from "react";
import { heroCarousel } from "../../assets/dummyData";
import HeroCard from "../../components/HeroCard";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl font-semibold uppercase text-center mb-1">
        new released
      </h2>

      <div className="relative">
        <div
          className="max-w-[1400px] mx-auto rounded-xl overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex">
            {heroCarousel.map((item) => (
              <div key={item.id} className="mr-8">
                <HeroCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <Button
          isIconOnly
          radius="full"
          variant="flat"
          className="absolute top-[50%] left-5"
          onClick={scrollPrev}
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          isIconOnly
          radius="full"
          variant="flat"
          className="absolute top-[50%] right-5"
          onClick={scrollNext}
        >
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
