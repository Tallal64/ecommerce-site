/* eslint-disable react/prop-types */
import {
  Button,
  Kbd,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
} from "@nextui-org/react";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { products } from "../assets/dummyData";

const SearchFunctionality = ({ onOpen, isOpen, onOpenChange }) => {
  const [value, setValue] = useState("");

  const searchProducts = products.filter((product) =>
    value === ""
      ? true
      : product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.category.toLowerCase().includes(value.toLowerCase())
  );
  console.log(searchProducts);
  console.log(value);

  // Function to handle keydown event (Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
  }, [onOpen]);

  return (
    <>
      <Button
        onPress={onOpen}
        type="email"
        placeholder="you@example.com"
        size="md"
        radius="lg"
        variant="flat"
        className="text-foreground/80 capitalize hidden lg:flex"
        startContent={
          <Search size={20} strokeWidth={1.5} className="text-foreground/50" />
        }
        endContent={<Kbd keys={["ctrl"]}>K</Kbd>}
      >
        Quick Search...
      </Button>

      <Button
        onPress={onOpen}
        size="sm"
        isIconOnly
        variant="light"
        className="capitalize flex lg:hidden"
      >
        <Search className="w-4 h-4 xs:w-5 xs:h-5" />
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex items-center gap-x-2">
                <Search
                  size={24}
                  strokeWidth={1.5}
                  className="text-secondary/60"
                />
                <input
                  placeholder="Search..."
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  autoFocus={true}
                  className="outline-none text-lg font-normal text-secondary/70 bg-transparent"
                />
                <Kbd className="text-secondary/70">Esc</Kbd>
              </ModalHeader>
              <ModalBody>
                {searchProducts.length > 0 ? (
                  searchProducts.map((product) => (
                    <NavLink
                      key={product.id}
                      to={`product/${product.id}`}
                      className="text-secondary/70 hover:text-secondary duration-150"
                    >
                      {product.title}
                    </NavLink>
                  ))
                ) : (
                  <p className="text-secondary/70">No products found</p>
                )}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchFunctionality;
