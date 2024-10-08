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
      description:
        "Hey there, I'm Talal Khan, the passionate developer behind this site. I love to build intuitive and engaging user experiences. From crafting interactive features to refining every detail, I aim to bring ideas to life through code.",
    },
    {
      title: "Technologies I Use",
      description:
        "In the development of this website, I've harnessed the power of the following frameworks and technologies to create a modern, single-page application (SPA):",
      icons: [
        {
          href: "https://tailwindcss.com ",
          icon: <SiTailwindcss size={62} />,
          hoverClass: "hover:text-[#06B6D4]",
        },
        {
          href: "https://reactrouter.com/",
          icon: <SiReactrouter size={65} />,
          hoverClass: "hover:text-[#CA4245]",
        },
        {
          href: "https://redux-toolkit.js.org/",
          icon: <SiRedux size={55} />,
          hoverClass: "hover:text-[#764ABC]",
        },
        {
          href: "https://nextui.org/",
          icon: <SiNextui size={55} />,
          hoverClass: "hover:text-foreground",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto flex items-center justify-center mt-5">
      <div className="h-[45vh] max-w-screen-lg mx-auto">
        {data.map((item, index) => (
          <div key={index} className="mt-6 space-y-4">
            <h2 className="text-2xl font-semibold text-secondary capitalize">
              {item.title}
            </h2>
            <p className="text-secondary/60 text-lg">{item.description}</p>
            <div className="flex items-center justify-around mx-20">
              {item.icons?.map((icon, index) => (
                <div key={index} className="h-16">
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
