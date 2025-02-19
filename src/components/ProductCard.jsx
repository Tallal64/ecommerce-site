/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ href, image, title, price, ...restProps }) => {
  const [like, Setlike] = useState(false);

  return (
    <Card
      shadow="sm"
      className="bg-transparent w-[320px] h-[420px] sm:w-[420px] sm:h-[520px] max-w-[420px] max-h-[520px] cursor-pointer"
      {...restProps}
    >
      <CardHeader className="absolute z-10 top-4 right-4 flex-col items-end">
        <Button
          isIconOnly
          radius="md"
          color="primary"
          variant="shadow"
          size="sm"
          onClick={() => Setlike(!like)}
          className="mb-3"
        >
          <Heart size={16} className={`${like ? "fill-current" : ""}`} />
        </Button>
        <AddToCartButton
          size={"sm"}
          isIconOnly
          icon={<Plus size={18} />}
          cartId={href}
          cartImage={image}
          cartTitle={title}
          cartPrice={price}
        />
      </CardHeader>

      <Link to={`/product/${href}`}>
        <CardBody className="overflow-visible">
          <Image
            radius="lg"
            isZoomed
            alt={title}
            src={image}
            className="w-full h-full object-cover z-0 "
          />
        </CardBody>
        <CardFooter className="flex-col items-start h-full overflow-hidden">
          <p className="text-sm sm:text-lg font-medium w-full truncate text-secondary">
            {title}
          </p>
          <p className="text-lg sm:text-2xl font-bold text-secondary">${price}</p>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default ProductCard;
