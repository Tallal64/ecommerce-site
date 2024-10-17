import { CircleDollarSign, Container, Headset } from "lucide-react";

const Services = () => {
  const listItems = [
    {
      icon: <Container className="sm:w-14 sm:h-14 w-12 h-12" strokeWidth={1} />,
      title: "Free shipping",
      description: "We offer free shipping on orders over $99",
    },
    {
      icon: (
        <CircleDollarSign
          className="sm:w-14 sm:h-14 w-12 h-12"
          strokeWidth={1}
        />
      ),
      title: "Flexible Payment",
      description: "We provide 7 days free return policy",
    },
    {
      icon: <Headset className="sm:w-14 sm:h-14 w-12 h-12" strokeWidth={1} />,
      title: "24/7 Support",
      description: "we provide 24/7 customer support",
    },
  ];

  return (
    <div className="container mx-auto flex flex-col sm:flex-row gap-y-5 sm:gap-y-0 justify-around mt-0 sm:mt-20">
      {listItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col text-center items-center gap-x-2"
        >
          <div>{item.icon}</div>
          <div>
            <h5 className="sm:text-lg text-md">{item.title}</h5>
            <p className="sm:text-sm text-xs text-secondary/60">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
