import { Link } from "react-router";

const PeopleCard = ({
  image,
  description,
  title,
  link,
}: {
  image: string;
  description: string[];
  title: string;
  link: string;
}) => {
  return (
    <Link to={link}>
      <div className="bg-frontground shadow-sm text-text grid mb-3 grid-cols-1 md:grid-cols-9 grid-flow-col not-md:mx-2 rounded-2xl transition-transform duration-300 hover:scale-110">
        <div className="md:col-span-1 col-span-full">
          <img src={image} className="object-contain w-100 h-full p-3 m-auto" />
        </div>
        <div className="p-5 md:col-span-8 col-span-full md:max-h-35">
          <div className="overflow-y-hidden h-full w-full">
            <ul className="list-disc">
              <div className="font-bold text-2xl text-title">{title}</div>
              {description.map((value, index) => (
                <li className="text-text" key={index}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PeopleCard;
