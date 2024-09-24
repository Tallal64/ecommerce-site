import { Button, Tab, Tabs } from "@nextui-org/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { nanoid } from "nanoid";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { products } from "../../assets/dummyData";
import ProductCard from "../../components/ProductCard";

const BestSelling = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center" });
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const tabs = [
    { title: "All" },
    { title: "Women" },
    { title: "Men" },
    { title: "Kids" },
  ];

  return (
    <div className="container mx-auto mt-20">
      <h3 className="text-3xl capitalize font-medium mb-3 pl-4">
        our best selling products
      </h3>
      <Tabs
        color={`${isDarkMode ? "primary" : "secondary"}`}
        size="lg"
        radius="sm"
        className="pl-4"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} title={tab.title} />
        ))}
      </Tabs>

      <div className="relative">
        {/* carousel */}
        <div className="max-w-[1400px] mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex my-5">
            {products.map((product, index) => (
              <div
                key={nanoid()}
                className={`
                ${index === 0 ? "ml-0 mr-8 pl-2" : "mx-8"} 
                ${index === products.length - 1 ? "mr-0 ml-8 pr-2" : ""}

              `}
              >
                <ProductCard
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

export default BestSelling;
