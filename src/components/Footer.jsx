import { Button } from "@nextui-org/button";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { nanoid } from "nanoid";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        { title: "Landing pages", href: "/men" },
        { title: "Shop", href: "/men" },
        { title: "Men", href: "/men" },
        { title: "Women", href: "/women" },
        { title: "Kids", href: "/kids" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "/men" },
        { title: "Terms & Conditons    ", href: "/women" },
        { title: "Partners", href: "/kids" },
        { title: "contacts", href: "/kids" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", href: "/men" },
        { title: "tools", href: "/women" },
        { title: "support", href: "/kids" },
      ],
    },
  ];

  return (
    <footer className="bg-foreground/10 py-10 px-2 mt-auto">
      <div className="container mx-auto">
        {/* upperFooter */}
        <div className="flex flex-col sm:flex-row justify-between">
          {/* leftSide */}
          <div className="flex flex-1 lg:flex-auto text-center sm:text-left flex-col gap-y-1.5 sm:gap-y-3">
            {/* logo */}
            <div>
              <NavLink className="text-3xl radley-italic">ventore</NavLink>
            </div>
            <p className="text-xs md:text-sm">
              Explore a world of fashion with exclusive Discounts.
              <br className="block lg:hidden" /> Dive into
              <br className="hidden lg:block" />
              Your Ultimate style destination today.
            </p>
            <NavLink className="text-xs md:text-sm">virtore@mail.com</NavLink>
          </div>
          {/* rightSide */}
          <div className="hidden sm:flex flex-1 mt-10 sm:mt-0 gap-y-3 sm:gap-y-0 justify-between">
            {footerLinks.map((link) => (
              <div key={nanoid()} className="">
                <h2 className="text-base lg:text-lg sm:font-medium">
                  {link.title}
                </h2>
                {link.links.map((link) => (
                  <Link
                    className="flex text-xs lg:text-sm mt-2 capitalize text-foreground/50"
                    key={nanoid()}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* lowerFooter */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
          <p className="text-xs md:text-sm">&copy; 2024 All rights reserved</p>

          <div className="flex gap-x-5 mt-3 sm:mt-0">
            <Button isIconOnly radius="full" variant="flat">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button isIconOnly radius="full" variant="flat">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button isIconOnly radius="full" variant="flat">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
