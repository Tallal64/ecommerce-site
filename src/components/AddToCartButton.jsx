/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { useDispatch } from "react-redux";
import { setCartId, setCartValue } from "../redux/features/featureSlice";

const AddToCartButton = ({ id, text, size, icon, ...restProps }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(setCartId(id));
    dispatch(setCartValue());
  };
  return (
    <Button
      radius="full"
      color="primary"
      variant="solid"
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
