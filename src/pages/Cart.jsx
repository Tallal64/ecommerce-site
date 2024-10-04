import { Divider } from "@nextui-org/react";
import { PackageOpen } from "lucide-react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.feature.cartItems);

  return (
    <div className="container mx-auto mt-5 min-h-[50vh]">
      {cartItems.length > 0 ? (
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="space-y-5">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  cartId={item.id}
                  cartImage={item.image}
                  cartPrice={item.price}
                  cartTitle={item.title}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="p-5 w-1/2">
              <h5 className="text-2xl font-medium uppercase mb-5">
                cart totals
              </h5>
              <div className="space-y-3">
                <p className="flex justify-between text-sm">
                  <span className="capitalize">subtotal</span>
                  <span>${"0.00"}</span>
                </p>
                <Divider />
                <p className="flex justify-between text-sm">
                  <span className="capitalize">shipping fee</span>
                  <span>${"0.00"}</span>
                </p>
                <Divider />
                <p className="flex justify-between text-sm">
                  <span className="capitalize">total</span>
                  <span>${"0.00"}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-y-5 h-[50vh]">
          <PackageOpen size={144} strokeWidth={0.4} />
          <p className="font-light text-2xl">Your cart is empty</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
