import { kid, man, woman } from "../../assets/dummyData";
import CategroriesCard from "../../components/CategroriesCard";

const Categories = () => {
  const categoriesData = [
    { img: man, title: "men fashion" },
    { img: woman, title: "women fashion" },
    { img: kid, title: "kids fashion" },
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
