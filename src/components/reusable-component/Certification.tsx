interface props {
  image: string;
  title: string;
  location: string;
  description: string;
  time: string;
}

const Certification = ({
  image,
  title,
  location,
  description,
  time,
}: props) => {
  return (
    <>
      <hr className="w-full border-text/50" />
      <div className="lg:flex flex-row text-text min-h-50 px-4">
        <div className="md:flex-2/12 w-full p-4">
          <img
            src={image}
            alt=""
            className="w-[80%] mx-auto lg:w-full h-full object-contain rounded-lg"
          />
        </div>
        <div className="md:flex-3/12 w-full text-center flex justify-center items-center flex-col">
          <span className="font-bold text-title">{title}</span>
        </div>
        <div className="md:flex-3/12 w-full text-center flex justify-center items-center flex-col">
          <span>{location}</span>
          <span>{time}</span>
        </div>
        <div className="md:flex-3/12 w-full text-center flex justify-center items-center flex-col">
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default Certification;
