/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/button";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { setCartId, setCartValue } from "../redux/features/featureSlice";

const AddToCartButton = ({ id, text, size }) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(setCartId(id));
    dispatch(setCartValue());
  };
  return (
    <Button
      isIconOnly
      radius="full"
      color="primary"
      variant="shadow"
      size={size}
      onClick={handleCart}
    >
      {text}
      <Plus size={20} />
    </Button>
  );
};

export default AddToCartButton;
