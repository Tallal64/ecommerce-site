import { Button, ButtonGroup } from "@nextui-org/button";
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
  const [like, setLike] = useState(false);

  const product = products.find((item) => item.id === id); // Find the product based on the ID

  if (!product) {
    return (
      <div className="container mx-auto h-[50vh] mt-10 text-red-500 flex justify-center items-center text-xl capitalize">
        Product not found
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10 px-2 xl:px-0">
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-10 xl:gap-x-20">
        {/* image side */}
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src={product.image}
            alt={product.title}
            className="h-[282px] w-[282px] md:h-[352px] md:w-[352px] lg:h-[380px] lg:w-[380px] xl:h-[492px] xl:w-[492px] 2xl:h-[592px] 2xl:w-[592px] max-h-[592px] max-w-[592px]"
          />
        </div>
        {/* text side */}
        <div className="w-full text-center md:text-left mt-4">
          <h6 className="text-xl lg:text-2xl xl:text-4xl font-semibold xl:font-bold text-secondary">
            {product.title}
          </h6>
          <p className="text-sm xl:text-lg text-secondary/55 mt-2">
            {product.description}
          </p>
          <p className="text-2xl xl:text-3xl font-semibold xl:font-bold mt-4 text-secondary">
            ${product.price}
          </p>

          {/* size */}
          <div className="flex gap-x-2 my-6 justify-center md:justify-start">
            {sizes.map((size, index) => (
              <Button
                key={index}
                radius="md"
                isIconOnly
                size="lg"
                color="secondary"
                variant={selectedSize === size ? "solid" : "faded"}
                className="text-sm xl:text-base font-medium uppercase"
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>

          {/* Buttons */}
          <ButtonGroup className="hidden sm:block">
            <AddToCartButton
              text={"add to cart"}
              variant={"solid"}
              size={"lg"}
              className={"text-sm lg:text-base xl:text-lg capitalize"}
              icon={<Plus size={20} />}
              cartId={product.id}
              cartImage={product.image}
              cartTitle={product.title}
              cartPrice={product.price}
            />
            <Button
              size="lg"
              color="primary"
              variant="bordered"
              className="text-sm lg:text-base xl:text-lg capitalize"
              onClick={() => setLike(!like)}
            >
              add to wishlist
              <Heart size={18} className={`${like ? "fill-current" : ""}`} />
            </Button>
          </ButtonGroup>

          <div className="flex flex-col sm:hidden gap-y-4">
            <AddToCartButton
              text={"add to cart"}
              variant={"solid"}
              size={"lg"}
              className={"text-sm lg:text-base xl:text-lg capitalize"}
              icon={<Plus size={20} />}
              cartId={product.id}
              cartImage={product.image}
              cartTitle={product.title}
              cartPrice={product.price}
            />
            <Button
              size="lg"
              color="primary"
              variant="bordered"
              className="text-sm lg:text-base xl:text-lg capitalize"
              onClick={() => setLike(!like)}
            >
              add to wishlist
              <Heart size={18} className={`${like ? "fill-current" : ""}`} />
            </Button>
          </div>

          {/*  */}
          <p className="hidden xl:flex mt-6 mb-1 text-secondary/70">
            {product.warrantyInformation}
          </p>
          <p className="hidden xl:flex text-secondary/70 capitalize">
            {product.shippingInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
