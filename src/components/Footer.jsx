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
    <div className="bg-foreground/10 py-10 mt-20">
      <div className="container mx-auto">
        {/* upperFooter */}
        <div className="flex justify-between">
          {/* leftSide */}
          <div className="flex flex-auto flex-col gap-y-4">
            {/* logo */}
            <div>
              <NavLink className="text-5xl radley-italic">ventore</NavLink>
            </div>
            <p>
              Explore a world of fashion with exclusive Discounts. Dive into
              <br />
              Your Ultimate style destination today.
            </p>
            <NavLink className="">virtore@mail.com</NavLink>
          </div>
          {/* rightSide */}
          <div className="flex flex-1 justify-between">
            {footerLinks.map((link) => (
              <div key={nanoid()} className="">
                <h2 className="text-lg font-medium">{link.title}</h2>
                {link.links.map((link) => (
                  <Link
                    className="flex mt-2 capitalize text-foreground/50"
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
        <div className="flex items-center justify-between mt-10">
          <p>&copy; 2024 All rights reserved</p>

          <div className="flex gap-x-5">
            <Button isIconOnly radius="full" variant="flat">
              <Instagram />
            </Button>
            <Button isIconOnly radius="full" variant="flat">
              <Twitter />
            </Button>
            <Button isIconOnly radius="full" variant="flat">
              <Linkedin />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
