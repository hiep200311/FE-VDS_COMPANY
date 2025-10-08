import { useEffect, useState, type ReactNode } from "react";

interface Props {
  bgSet: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  image: string;
  children?: ReactNode;
  className?: string;
}

const HeroBanner = ({ bgSet, image, children, className }: Props) => {
  const [bg, setBg] = useState(bgSet.desktop);

  useEffect(() => {
    const updateBg = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBg(bgSet.mobile); // <sm
      } else if (width < 1024) {
        setBg(bgSet.tablet); // sm to md
      } else {
        setBg(bgSet.desktop); // lg+
      }
    };

    updateBg(); // init
    window.addEventListener("resize", updateBg);
    return () => window.removeEventListener("resize", updateBg);
  }, [bgSet]);

  return (
    <section
      className={`pt-8 pb-8 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-x-16">
          <div className="order-2 lg:order-1">{children}</div>
          <div className="order-1 lg:order-2">
            <img
              className="w-full max-w-md sm:max-w-lg lg:max-w-none mx-auto rounded-2xl shadow-lg"
              src={image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
