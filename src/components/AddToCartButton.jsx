/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/featureSlice";

const AddToCartButton = ({
  text,
  size,
  icon,
  cartId,
  cartImage,
  cartTitle,
  cartPrice,
  ...restProps
}) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    const product = {
      id: cartId,
      image: cartImage,
      title: cartTitle,
      price: cartPrice,
    };

    dispatch(addToCart(product));
  };

  return (
    <Button
      radius="md"
      color="primary"
      variant="shadow"
      size={size}
      onClick={handleCart}
      {...restProps}
    >
      {text}
      {icon}
    </Button>
  );
};

export default AddToCartButton;
