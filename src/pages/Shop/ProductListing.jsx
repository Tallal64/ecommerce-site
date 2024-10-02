import { Tab, Tabs } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { products } from "../../assets/dummyData";
import ProductCard from "../../components/ProductCard";

const ProductListing = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  const tabs = [
    { title: "All" },
    { title: "Women" },
    { title: "Men" },
    { title: "Kids" },
  ];

  return (
    <div className="container mx-auto mt-10 flex flex-col">
      <Tabs
        color={`${isDarkMode ? "primary" : "secondary"}`}
        size="lg"
        radius="sm"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            className={`${isDarkMode ? "border-none" : "border"}`}
          />
        ))}
      </Tabs>

      <div className="grid grid-cols-4 gap-8 mt-5">
        {products.map((item) => (
          <div key={item.id}>
            <ProductCard
              href={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              className={
                "max-w-[380px] max-h-[480px] bg-transparent cursor-pointer"
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
