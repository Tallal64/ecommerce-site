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
        <NavLink to={"/"} className="text-4xl radley-italic">ventore</NavLink>
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
            className={`rounded-xl ${
              isDarkMode
                ? "border-transparent bg-background text-foreground"
                : "border border-secondary/20"
            }`}
            startContent={
              <Search strokeWidth={1.5} className="text-foreground/50" />
            }
          />
        </NavbarItem>
        <NavbarItem className="relative flex items-center gap-x-4 ml-5">
          <button onClick={handleToggle}>
            {isDarkMode ? (
              <Sun size={24} strokeWidth={1.5} />
            ) : (
              <Moon size={24} strokeWidth={1.5} />
            )}
          </button>
          <NavLink to={"#"} className={``}>
            <User2 size={22} strokeWidth={1.5} />
          </NavLink>
          <NavLink to={"#"} className={``}>
            {cartValue > 0 ? (
              <div className="absolute text-white bg-primary -top-2 -right-2 w-[18px] h-[18px] flex items-center justify-center rounded-full text-xs font-semibold">
                {cartValue}
              </div>
            ) : null}
            <ShoppingBag size={22} strokeWidth={1.5} />
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

{
  /* <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Features
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Autoscaling
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Usage Metrics
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Production Ready
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                +99% Uptime
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                +Supreme Support
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */
}
