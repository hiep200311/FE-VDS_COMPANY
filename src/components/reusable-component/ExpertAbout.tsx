import type { ExpertInformation } from "@/libs/chuyen-gia-data";

interface props {
  information: ExpertInformation;
}

const ExpertAbout = ({ information }: props) => {
  return (
    <div className="flex text-text md:flex-row flex-col mt-5 px-3">
      <div className="flex-4/12 md:order-1 order-2">
        <div className="flex items-center justify-center ">
          {information.image && (
            <img
              className="rounded-md aspect-8/10 object-cover"
              src={information.image}
              alt=""
            />
          )}
        </div>

        <ul className="text-lg mt-10 md:block hidden">
          {information.bio.map((b) => (
            <li className="mt-2">
              <div className="grid grid-cols-11">
                <span className="col-span-10">{b}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-8/12 p-5 md:order-2 order-1">
        <p className="text-2xl font-bold text-title">{information.name}</p>
        <p className="text-text italic">{information.subtitle}</p>
        <ul className="text-lg my-5 block md:hidden">
          {information.bio.map((b) => (
            <li className="mt-2">
              <div className="grid grid-cols-11">
                <span className="col-span-10">{b}</span>
              </div>
            </li>
          ))}
        </ul>
        <div
          dangerouslySetInnerHTML={{ __html: information.description }}
        ></div>
      </div>
    </div>
  );
};

export default ExpertAbout;
