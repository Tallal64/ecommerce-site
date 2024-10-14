import { CircleDollarSign, Container, Headset } from "lucide-react";

const Services = () => {
  const listItems = [
    {
      icon: <Container size={62} strokeWidth={1} />,
      title: "Free shipping",
      description: "We offer free shipping on orders over $99",
    },
    {
      icon: <CircleDollarSign size={62} strokeWidth={1} />,
      title: "Flexible Payment",
      description: "We provide 7 days free return policy",
    },
    {
      icon: <Headset size={62} strokeWidth={1} />,
      title: "24/7 Support",
      description: "we provide 24/7 customer support",
    },
  ];

  return (
    <div className="container mx-auto flex justify-around mt-20">
      {listItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col text-center items-center gap-x-2"
        >
          <div>{item.icon}</div>
          <div>
            <h5 className="text-xl font-medium">{item.title}</h5>
            <p className="text-secondary/60">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
