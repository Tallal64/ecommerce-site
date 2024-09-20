/* eslint-disable react/prop-types */
const CategroriesCard = ({ img, title }) => {
  return (
    <div className="max-w-[480px] max-h-[580px] relative rounded-lg overflow-hidden cursor-pointer group">
      <div>
        <img src={img} alt="img" className="object-cover group-hover:scale-125 duration-500" />
      </div>

      <div className="absolute bottom-0 bg-black/50 text-white w-full py-8 text-xl text-center font-medium">
        <p className="capitalize">{title}</p>
      </div>
    </div>
  );
};

export default CategroriesCard;
