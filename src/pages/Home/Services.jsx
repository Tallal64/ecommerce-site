import { GiReceiveMoney } from "react-icons/gi";
import { LuContainer } from "react-icons/lu";
import { RiCustomerServiceFill } from "react-icons/ri";

const Services = () => {
  const listItems = [
    {
      icon: <LuContainer size={32} />,
      title: "Free shipping",
      description: "We offer free shipping on orders over $99",
    },
    {
      icon: <GiReceiveMoney size={32} />,
      title: "Flexible Payment",
      description: "We offer free shipping on orders over $99",
    },
    {
      icon: <RiCustomerServiceFill size={32} />,
      title: "24/7 Support",
      description: "We offer free shipping on orders over $99",
    },
  ];

  return (
    <div className="container mx-auto flex justify-around mt-10">
      {listItems.map((item, index) => (
        <div key={index} className="flex items-center gap-x-2">
          <div>{item.icon}</div>
          <div>
            <h5 className="text-lg font-medium">{item.title}</h5>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
