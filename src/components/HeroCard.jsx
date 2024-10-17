/* eslint-disable react/prop-types */
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const HeroCard = ({ href, image, title, price, description }) => {
  const [like, Setlike] = useState(false);

  return (
    <Card
      shadow="none"
      className="w-[300px] h-[400px] sm:w-[650px] sm:h-[350px] lg:w-[750px] lg:h-[450px] cursor-pointer bg-transparent"
    >
      <CardHeader className="absolute z-10 top-4 right-4 flex-col items-end">
        <Button
          isIconOnly
          radius="md"
          color="primary"
          variant="shadow"
          size="sm"
          onClick={() => Setlike(!like)}
          className="mb-3 hidden sm:flex"
        >
          <Heart size={18} className={`${like ? "fill-current" : ""}`} />
        </Button>
        <AddToCartButton
          icon={<Plus size={18} />}
          isIconOnly
          cartId={href}
          cartImage={image}
          cartTitle={title}
          cartPrice={price}
          size={"sm"}
          className=" hidden sm:flex"
        />
      </CardHeader>

      <Link to={`/product/${href}`}>
        <Image
          removeWrapper
          isZoomed
          alt="Img"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        
        <div className="absolute bg-black/50 bottom-[28%] sm:bottom-4 left-10 right-10 z-10 rounded-lg">
          <div className="p-2 sm:p-5 overflow-hidden">
            <div className="flex justify-between">
              <p className="text-sm sm:text-xl font-medium sm:font-semibold text-white capitalize truncate">
                {title}
              </p>
              <p className="text-xl font-bold text-white hidden sm:block">
                ${price}
              </p>
            </div>

            <p className="text-xs sm:text-base text-white w-full truncate">{description}</p>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default HeroCard;
