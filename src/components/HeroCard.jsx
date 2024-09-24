/* eslint-disable react/prop-types */
import { Button, Card, CardHeader, Image } from "@nextui-org/react";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";

const HeroCard = ({ image, title, price, description }) => {
  const [like, Setlike] = useState(false);

  return (
    <Card isFooterBlurred className="w-[750px] h-[450px] cursor-pointer">
      <CardHeader className="absolute z-10 top-4 right-4 flex-col items-end">
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="shadow"
          size="md"
          onClick={() => Setlike(!like)}
          className="mb-3"
        >
          <Heart size={18} className={`${like ? "fill-current" : ""}`} />
        </Button>
        <Button
          isIconOnly
          radius="full"
          color="primary"
          variant="shadow"
          size="md"
        >
          <Plus size={20} />
        </Button>
      </CardHeader>

      <Image
        removeWrapper
        isZoomed
        alt="Img"
        className="z-0 w-full h-full object-contain bg-white"
        src={image}
      />
      <footer className="absolute bg-black/50 bottom-4 left-10 right-10 z-10 rounded-lg">
        <div className="p-5">
          <div className="flex justify-between">
            <p className="text-xl font-semibold text-white capitalize ">
              {title}
            </p>
            <p className="text-xl font-bold text-white">${price}</p>
          </div>

          <p className="text-white">{description}</p>
        </div>
      </footer>
    </Card>
  );
};

export default HeroCard;
