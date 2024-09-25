import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { useSelector } from "react-redux";

const Cta = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="container mx-auto my-20 space-y-4">
      <h4 className="text-5xl font-semibold text-center">
        Subscribe now & get 20% off
      </h4>
      <p className="text-xl font-normal text-foreground/60 text-center">
        Its get so maad. when the rock is cooking!
      </p>
      <div className="max-w-screen-md mx-auto">
        <Input
          type="email"
          placeholder="Enter your email"
          size="lg"
          className={`rounded-xl ${
            isDarkMode
              ? "border-transparent bg-background text-foreground"
              : "border border-secondary/20"
          }`}
          endContent={
            <Button
              color="primary"
              className="absolute right-0 h-full w-32 font-medium rounded-r-lg rounded-l-none"
            >
              Subscribe
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default Cta;
