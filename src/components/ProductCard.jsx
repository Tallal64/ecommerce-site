/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Heart } from "lucide-react";
import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ image, title, price, ...restProps }) => {
  const [like, Setlike] = useState(false);

  return (
    <Card
      shadow="sm"
      className="bg-transparent w-[420px] h-[520px] max-w-[420px] max-h-[520px] cursor-pointer"
      {...restProps}
    >
      <CardHeader className="absolute z-10 top-4 right-4 flex-col items-end">
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="shadow"
          size="sm"
          onClick={() => Setlike(!like)}
          className="mb-3"
        >
          <Heart size={16} className={`${like ? "fill-current" : ""}`} />
        </Button>
        <AddToCartButton size={"sm"} />
      </CardHeader>

      <CardBody className="overflow-visible">
        <Image
          radius="lg"
          isZoomed
          alt={title}
          src={image}
          className="w-full h-full object-cover z-0 "
        />
      </CardBody>
      <CardFooter className="flex-col items-start h-full">
        <p className=" text-lg font-medium">{title}</p>
        <p className=" text-2xl font-bold">${price}</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
