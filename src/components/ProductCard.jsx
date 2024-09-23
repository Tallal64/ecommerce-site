/* eslint-disable react/prop-types */
import {
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

const ProductCard = ({ image, title, price, ...restProps }) => {
  const [like, Setlike] = useState(false);

  return (
    <Card
      shadow="sm"
      className="bg-transparent w-[420px] h-[520px] cursor-pointer"
      {...restProps}
    >
      <CardHeader className="absolute z-10 top-4 right-4 flex-col items-end">
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="shadow"
          size="sm"
        >
          <MdAddShoppingCart size={18} />
        </Button>
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="shadow"
          size="sm"
          className="mt-3"
          onClick={() => Setlike(!like)}
        >
          {like ? <FaHeart size={16} /> : <FaRegHeart size={17} />}
        </Button>
      </CardHeader>

      <CardBody className="overflow-visible">
        <Image
          radius="lg"
          isZoomed
          alt={title}
          className="w-full h-full object-cover z-0"
          src={image}
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
