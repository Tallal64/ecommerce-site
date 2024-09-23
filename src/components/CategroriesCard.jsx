/* eslint-disable react/prop-types */
import { Card, CardFooter, Image } from "@nextui-org/react";

const CategroriesCard = ({ img, title }) => {
  return (
    <Card
      isFooterBlurred
      className="max-w-[480px] max-h-[580px] cursor-pointer"
    >
      <Image
        removeWrapper
        isZoomed
        alt="Img"
        className="z-0 w-full h-full object-cover"
        src={img}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 py-8">
        <p className="text-xl text-center font-medium w-full text-white capitalize">
          {title}
        </p>
      </CardFooter>
    </Card>
  );
};

export default CategroriesCard;
