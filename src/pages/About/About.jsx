import {
  SiNextui,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { NavLink } from "react-router-dom";

const About = () => {
  const data = [
    {
      title: "about developer",
      description: `Hey there, I'm `,
      highlightedText: "Talal Khan",
      afterText: `, the passionate developer behind this site. I love to build intuitive and engaging user experiences. From crafting interactive features to refining every detail, I aim to bring ideas to life through code.`,
    },
    {
      title: "Technologies I Use",
      description:
        "In the development of this website, I've harnessed the power of the following frameworks and technologies to create a modern ecommerce site.",
      icons: [
        {
          href: "https://tailwindcss.com ",
          icon: <SiTailwindcss className="h-8 w-8 lg:h-12 lg:w-12" />,
          hoverClass: "hover:text-[#06B6D4]",
        },
        {
          href: "https://reactrouter.com/",
          icon: <SiReactrouter className="h-8 w-8 lg:h-12 lg:w-12" />,
          hoverClass: "hover:text-[#CA4245]",
        },
        {
          href: "https://redux-toolkit.js.org/",
          icon: <SiRedux className="h-8 w-8 lg:h-12 lg:w-12" />,
          hoverClass: "hover:text-[#764ABC]",
        },
        {
          href: "https://nextui.org/",
          icon: <SiNextui className="h-8 w-8 lg:h-12 lg:w-12" />,
          hoverClass: "hover:text-foreground",
        },
      ],
    },
  ];

  return (
    <div className="h-[50vh] md:h-[45vh] container mx-auto flex items-center justify-center mt-5">
      <div className="max-w-screen-lg mx-auto px-4">
        {data.map((item, index) => (
          <div key={index} className="mt-6 space-y-4 text-center lg:text-start">
            <h2 className="text-xl md:text-2xl font-semibold text-secondary capitalize">
              {item.title}
            </h2>
            <p className="text-secondary/60 text-sm md:text-lg">
              {item.description}
              <span className="text-primary font-medium">
                {item.highlightedText}
              </span>
              {item.afterText}
            </p>
            <div className="flex items-center justify-around md:justify-center md:gap-x-14">
              {item.icons?.map((icon, index) => (
                <div key={index} className="max-h-16">
                  <NavLink
                    to={icon.href}
                    className={`text-secondary ${icon.hoverClass} duration-300`}
                  >
                    {icon.icon}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
