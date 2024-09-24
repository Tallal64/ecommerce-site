import { Button } from "@nextui-org/button";

const ExploreCta = () => {
  const cardsData = [
    {
      offer: "flat 20% OFF",
      title: `Explore the latest in men fashion`,
      description: "Step into style unveiling the Newwest Trends",
      button: "explore more",
      img: "",
    },
    {
      offer: "flat 20% OFF",
      title: `Explore the latest in men fashion`,
      description: "Step into style unveiling the Newwest Trends",
      button: "explore more",
      img: "",
    },
  ];

  return (
    <div className="container mx-auto flex justify-between gap-x-5">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="h-[420px] w-[750px] overflow-hidden my-20 pl-6 flex items-center justify-between bg-secondary/15 rounded-xl"
        >
          {/* text */}
          <div className="flex-1 flex flex-col items-start gap-y-3">
            <p className="text-xl font-medium capitalize">{card.offer}</p>
            <h2 className="text-4xl font-semibold">{card.title}</h2>
            <p className="">{card.description}</p>
            <Button color="secondary" className="w-40 text-base capitalize">
              {card.button}
            </Button>
          </div>
          {/* img */}
          <div className="flex-1">
            <img
              src={card.img}
              alt="ctaImg"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExploreCta;
