import { Tab, Tabs } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { products } from "../../assets/dummyData";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";

const ProductListing = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const categories = [
    { title: "All" },
    { title: "women" },
    { title: "men" },
    { title: "kids" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center xl:items-start">
      <div className="w-full xl:w-fit flex justify-center">
        <Tabs
          color={`${isDarkMode ? "primary" : "secondary"}`}
          size="lg"
          radius="sm"
          selectedKey={selectedCategory}
          onSelectionChange={setSelectedCategory}
        >
          {categories.map((category) => (
            <Tab
              key={category.title}
              title={category.title}
              className="capitalize"
            />
          ))}
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 justify-center mt-5">
        {filteredProducts.map((item) => (
          <div key={item.id}>
            <ProductCard
              href={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              className={
                "w-[280px] h-[280px] xs:w-[480px] xs:h-[480px] max-w-[380px] max-h-[480px] bg-transparent cursor-pointer"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
