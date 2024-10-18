/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { Heart, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFromCart,
  updateCartQuantity,
} from "../redux/features/featureSlice";

const CartCard = ({
  cartId,
  cartImage,
  cartTitle,
  cartPrice,
  cartQuantity,
}) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);

  const numbers = [...Array(10)].map((_, i) => ({
    key: i + 1,
    label: `${i + 1}`,
  }));

  const handleDelete = (cartId) => {
    dispatch(deleteFromCart(cartId));
  };

  const handleQuantityChange = (selectedKey) => {
    const quantity = parseInt(selectedKey.currentKey);
    dispatch(updateCartQuantity({ id: cartId, quantity }));
  };

  return (
    <Card
      isBlurred
      className="relative bg-background/60 dark:bg-default-100/50 w-full max-w-[600px]"
      shadow="sm"
    >
      <CardBody className="flex flex-col md:flex-row gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-full md:w-[130px]">
          <img
            src={cartImage}
            className="w-full h-auto object-cover max-h-[130px] rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex justify-between items-start md:items-center">
            <h6 className="text-sm md:text-base">{cartTitle}</h6>
            <p className="text-sm md:text-base font-semibold pl-2">${cartPrice}</p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-x-4">
            <p className="text-sm md:text-base text-secondary/55">Quantity</p>
            <Select
              size="sm"
              placeholder={`${cartQuantity}`}
              variant="flat"
              aria-label="Select quantity"
              className="max-w-[60px]"
              selectedKeys={new Set([`${cartQuantity}`])}
              onSelectionChange={(selectedKey) =>
                handleQuantityChange(selectedKey)
              }
            >
              {numbers.map((number) => (
                <SelectItem key={number.key} className="text-secondary/55">
                  {number.label}
                </SelectItem>
              ))}
            </Select>
          </div>

          {/* Action Buttons */}
          <div className="space-x-2 flex items-center">
            <Button
              isIconOnly
              size="sm"
              variant="light"
              onClick={() => setLike(!like)}
            >
              <Heart
                size={20}
                strokeWidth={1.5}
                className={`${like ? "fill-current text-red-500" : ""}`}
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
