import { Button, Divider } from "@nextui-org/react";
import { PackageOpen } from "lucide-react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";

const Cart = () => {
  const cartItems = useSelector((state) => state.feature.cartItems);

  const cartTotals = () => {
    const shippingRatePercent = 0.05; // 5% of the item's price
    const shippingFee = cartItems.reduce(
      (acc, item) => acc + item.price * shippingRatePercent * item.quantity,
      0
    );
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const grandTotal = totalPrice + shippingFee;

    return {
      totalPrice,
      shippingFee,
      grandTotal,
    };
  };
  const { totalPrice, shippingFee, grandTotal } = cartTotals();

  return (
    <div className="container mx-auto mt-5 px-3 xl:px-0">
      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Cart Items */}
          <div className="flex-auto w-full md:w-2/3">
            <div className="space-y-5 w-full">
              {cartItems.map((item) => (
                <CartCard
                  key={item.id}
                  cartId={item.id}
                  cartImage={item.image}
                  cartPrice={item.price}
                  cartTitle={item.title}
                  cartQuantity={item.quantity}
                />
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="w-full md:w-1/3 flex justify-center lg:justify-end">
            <div className="p-5 w-full max-w-[320px] shadow-lg rounded-lg">
              <h5 className="text-2xl md:text-3xl font-medium capitalize mb-5 text-secondary">
                Summary
              </h5>
              <div className="space-y-3">
                <div className="space-y-4">
                  <p className="flex justify-between">
                    <span className="text-secondary/80 capitalize">
                      subtotal
                    </span>
                    <span className="text-secondary">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-secondary/80 capitalize">
                      shipping fee
                    </span>
                    <span className="text-secondary">
                      ${shippingFee.toFixed(2)}
                    </span>
                  </p>
                </div>
                <Divider />
                <p className="flex justify-between">
                  <span className="font-medium text-secondary/80 capitalize">
                    total
                  </span>
                  <span className="font-medium text-secondary">
                    ${grandTotal.toFixed(2)}
                  </span>
                </p>
              </div>
              <Button
                size="lg"
                color="primary"
                variant="solid"
                className="w-full mt-10"
              >
                Proceed to checkout
              </Button>
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
