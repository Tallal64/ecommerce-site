/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardBody,
  Image,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/features/featureSlice";

const CartCard = ({
  cartId,
  cartImage,
  cartTitle,
  cartPrice,
}) => {
  const dispatch = useDispatch();
  const [like, Setlike] = useState(false);

  const numbers = [...Array(10)].map((_, i) => ({
    key: i + 1,
    label: `${i + 1}`,
  }));

  function handleDelete(cartId) {
    dispatch(deleteFromCart(cartId));
  }

  return (
    <Card
      isBlurred
      className="relative bg-background/60 dark:bg-default-100/50 max-w-[700px]"
      shadow="sm"
    >
      <CardBody className="flex flex-row items-center">
        <div>
          <Image src={cartImage} className="max-h-[130px] max-w-[130px]" />
        </div>
        <div className="w-full mx-5 flex flex-col gap-y-2">
          <div className="flex items-center justify-between">
            <h6>{cartTitle}</h6>
            <p className="font-medium">${cartPrice}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="text-secondary/55">Quantity</p>
            <Select
              size="sm"
              // placeholder={`${cartQuantity}`}
              placeholder="1"
              variant="flat"
              aria-label="Select quantity" 
              className="max-w-[60px]"
            >
              {numbers.map((number) => (
                <SelectItem key={number.key} className="text-secondary/55">
                  {number.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="space-x-2">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => Setlike(!like)}
            >
              <Heart
                size={20}
                strokeWidth={1.5}
                className={`${like ? "fill-current" : ""}`}
              />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => handleDelete(cartId)}
            >
              <Trash2 size={20} strokeWidth={1.5} />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartCard;
