interface props {
  title: string;
  image: string;
}

const IntroduceSingle = ({ title, image }: props) => {
  return (
    <div className="w-auto  lg:h-50 h-auto xl:ml-10 xl:mr-0 md:mr-2 sm:mx-5 mx-10  my-3     ">
      <div className="h-32 overflow-hidden flex justify-center">
        <img
          src={image}
          alt="Event"
          className="  h-full object-cover rounded-lg bg-no-repeat  "
        />
      </div>
      <div className="flex justify-center my-3">
        <div>
          <h3 className="text-2xl text-title font-semibold mb-2">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default IntroduceSingle;
