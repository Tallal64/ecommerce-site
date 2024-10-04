import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../assets/dummyData";
import AddToCartButton from "../components/AddToCartButton";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size
  const sizes = ["s", "m", "lg", "xl", "xxl"]; // Array of sizes

  const product = products.find((item) => item.id === id); // Find the product based on the ID

  if (!product) {
    return (
      <div className="container mx-auto h-[50vh] mt-10 text-red-500 flex justify-center items-center text-xl capitalize">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-center items-center gap-x-20">
        {/* image side */}
        <div className="w-full flex justify-end">
          <Image
            src={product.image}
            alt={product.title}
            className="h-[592px] w-[592px] max-h-[592px] max-w-[592px]"
          />
        </div>
        {/* text side */}
        <div className="w-full">
          <h6 className="text-5xl font-bold text-secondary">{product.title}</h6>
          <p className="text-lg text-secondary/55 mt-2">
            {product.description}
          </p>
          <p className="text-3xl font-bold mt-4">${product.price}</p>

          {/* size */}
          <div className="flex gap-x-2 my-6">
            {sizes.map((size, index) => (
              <Button
                key={index}
                radius="full"
                isIconOnly
                size="lg"
                color="secondary"
                variant={selectedSize === size ? "solid" : "faded"} // Only solid for selected size
                className="font-medium uppercase"
                onClick={() => setSelectedSize(size)} // Set the clicked size as selected
              >
                {size}
              </Button>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-y-4">
            <AddToCartButton
              text={"add to cart"}
              variant={"solid"}
              size={"lg"}
              className={"text-lg capitalize w-2/3"}
              icon={<Plus size={22} />}
              cartId={product.id}
              cartImage={product.image}
              cartTitle={product.title}
              cartPrice={product.price}
            />
            <AddToCartButton
              text={"add to wishlist"}
              variant={"bordered"}
              size={"lg"}
              className={"text-lg capitalize w-2/3"}
              icon={<Heart size={20} />}
            />
          </div>

          {/*  */}
          <p className="mt-6 mb-1 text-secondary/70">
            {product.warrantyInformation}
          </p>
          <p className="text-secondary/70 capitalize">
            {product.shippingInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
