import {
    Button,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    useDisclosure,
  } from "@nextui-org/react";
  import { Moon, ShoppingBag, Sun, User2 } from "lucide-react";
  import { nanoid } from "nanoid";
  import { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { NavLink } from "react-router-dom";
  import { toggleTheme } from "../redux/theme/themeSlice";
  import SearchFunctionality from "./SearchFunctionality";
  
  const Header = () => {
    const isDarkMode = useSelector((state) => state.theme.darkMode);
    const cartValue = useSelector((state) => state.feature.cartValue);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [isDarkMode]);
    const handleToggle = () => {
      dispatch(toggleTheme());
    };
  
    const navlinks = [
      {
        id: nanoid(),
        title: "Home",
        href: "/",
      },
      {
        id: nanoid(),
        title: "Shop",
        href: "shop",
      },
      {
        id: nanoid(),
        title: "About",
        href: "about",
      },
      {
        id: nanoid(),
        title: "Contact Us",
        href: "contact",
      },
    ];
  
    return (
      <Navbar
        maxWidth="2xl"
        position="static"
        shouldHideOnScroll
        className="mx-auto py-2"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="flex-1">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
          <NavbarBrand className="w-fit">
            <NavLink
              to={"/"}
              className="text-xl xs:text-2xl lg:text-3xl radley-italic"
            >
              ventore
            </NavLink>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent
          className="hidden md:flex md:gap-x-6 xl:gap-x-10 flex-auto"
          justify="center"
        >
          {navlinks.map((link) => (
            <NavbarItem key={link.id} className="">
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm lg:text-base ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/50"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>
  
        <NavbarContent className="flex-1" justify="end">
          <NavbarItem className="relative flex items-center space-x-3 ml-5">
            <Button isIconOnly variant="solid" onClick={handleToggle}>
              {isDarkMode ? (
                <Sun
                  strokeWidth={1.5}
                  className="fill-current w-4 h-4 xs:w-5 xs:h-5"
                />
              ) : (
                <Moon
                  strokeWidth={0.5}
                  className="fill-current w-4 h-4 xs:w-5 xs:h-5"
                />
              )}
            </Button>
            <NavLink to={"#"} className={``}>
              <Button isIconOnly variant="solid">
                <User2 className="w-4 h-4 xs:w-5 xs:h-5" strokeWidth={1.5} />
              </Button>
            </NavLink>
            <NavLink to={"cart"} className={``}>
              {cartValue > 0 ? (
                <div className="absolute text-white bg-primary -top-2 -right-2 text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full font-semibold">
                  {cartValue}
                </div>
              ) : null}
              <Button isIconOnly variant="solid">
                <ShoppingBag
                  className="w-4 h-4 xs:w-5 xs:h-5"
                  strokeWidth={1.5}
                />
              </Button>
            </NavLink>
          </NavbarItem>
          
          <NavbarItem>
            <SearchFunctionality
              onOpen={onOpen}
              isOpen={isOpen}
              onOpenChange={onOpenChange}
            />
          </NavbarItem>
        </NavbarContent>
  
        <NavbarMenu className="mt-4 w-3/4 sm:w-1/3">
          {navlinks.map((link) => (
            <NavbarMenuItem key={link.id}>
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `text-sm sm:text-base ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-foreground/50"
                  }`
                }
              >
                {link.title}
              </NavLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  };
  
  export default Header;
  