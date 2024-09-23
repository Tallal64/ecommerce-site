import { kids, men1, women } from "../../assets/imgsData";
import CategroriesCard from "../../components/CategroriesCard";

const Categories = () => {
  const categoriesData = [
    { img: men1, title: "men fashion" },
    { img: women, title: "women fashion" },
    { img: kids, title: "kids fashion" },
  ];

  return (
    <div className="container mx-auto flex items-center justify-around mt-20">
      {categoriesData.map((category, index) => (
        <CategroriesCard
          key={index}
          img={category.img}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default Categories;
