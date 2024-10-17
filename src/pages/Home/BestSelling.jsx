import { Button } from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { products } from "../../assets/dummyData";
import ProductCard from "../../components/ProductCard";

const BestSelling = () => {
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

  /* function for random selection */
  const getRandomElements = (array, n) => {
    return array
      .map((item) => ({ item, sort: Math.random() })) // Assign random sort values
      .sort((a, b) => a.sort - b.sort) // Sort by random values
      .map(({ item }) => item) // Extract original values
      .slice(0, n); // Get n elements
  };

  let bestSelling = getRandomElements(products, 7);

  return (
    <div className="container mx-auto mt-16 sm:mt-20">
      <h3 className="text-xl sm:text-3xl capitalize font-medium sm:mb-3 pl-4 text-center">
        our best selling products
      </h3>

      <div className="relative">
        {/* carousel */}
        <div className="max-w-[1400px] mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex my-5">
            {bestSelling.map((product) => (
              <div key={nanoid()} className={`mr-10`}>
                <ProductCard
                  href={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
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
          className="absolute top-[50%] left-5 hidden sm:flex"
          onClick={scrollPrev}
        >
          <ArrowLeft size={20} />
        </Button>
        <Button
          isIconOnly
          radius="full"
          variant="flat"
          className="absolute top-[50%] right-5 hidden sm:flex"
          onClick={scrollNext}
        >
          <ArrowRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default BestSelling;
