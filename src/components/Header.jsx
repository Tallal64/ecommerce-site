import { Input, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Moon, Search, ShoppingBag, Sun, User2 } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themeSlice";

const Header = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  const cartValue = useSelector((state) => state.feature.cartValue);
  const dispatch = useDispatch();

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
    >
      <nav className="flex-[0.7]">
        <NavLink to={"/"} className="text-4xl radley-italic">
          ventore
        </NavLink>
      </nav>
      <NavbarContent
        className="hidden gap-4 md:flex md:gap-x-10"
        justify="center"
      >
        {navlinks.map((link) => (
          <NavbarItem key={link.id} className="">
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                `${
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
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Input
            type="email"
            placeholder="you@example.com"
            size="md"
            radius="lg"
            startContent={
              <Search strokeWidth={1.5} className="text-foreground/50" />
            }
          />
        </NavbarItem>
        <NavbarItem className="relative flex items-enter space-x-3 ml-5">
          <button onClick={handleToggle}>
            {isDarkMode ? (
              <Sun size={22} strokeWidth={1.5} className="fill-current" />
            ) : (
              <Moon size={22} strokeWidth={0.5} className="fill-current" />
            )}
          </button>
          <NavLink to={"#"} className={``}>
            <User2 size={21} strokeWidth={1.5} />
          </NavLink>
          <NavLink to={"cart"} className={``}>
            {cartValue > 0 ? (
              <div className="absolute text-white bg-primary -top-2 -right-2 text-[10px] w-[16px] h-[16px] flex items-center justify-center rounded-full font-semibold">
                {cartValue}
              </div>
            ) : null}
            <ShoppingBag size={20} strokeWidth={1.5} />
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
