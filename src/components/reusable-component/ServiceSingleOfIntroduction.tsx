import { useState, type ReactNode, useEffect } from "react";
import { easeOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface props {
  title: string;
  image: string;
  children?: ReactNode;
  detail?: boolean;
}

const ServiceSingle = ({ title, image }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeVariants}
      initial="hidden"
      animate={controls}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
      className="w-full h-50 lg:h-80"
    >
      <div className="w-full h-full rounded-lg relative overflow-hidden">
        {/* Mặt trước */}
        <div className="absolute w-full h-full bg-frontground rounded-lg p-6 text-center flex flex-col items-center justify-center">
          <img src={image} className="w-20 h-20 mb-4" />
          <h3 className="lg:text-xl text-base text-title font-semibold mb-2">
            {title}
          </h3>
        </div>

        {/* Mặt sau (hover mở rộng) */}
        {/*      <div*/}
        {/*          className={`absolute w-full h-full bg-title p-6 text-center flex flex-col items-center justify-center */}
        {/*${isOpen ? "" : "translate-y-[-100%]"} */}
        {/*transition-all duration-300 ease-in-out`}*/}
        {/*      >*/}
        {/*          <p*/}
        {/*              className={`text-frontground text-sm min-h-20 overflow-auto mb-4 */}
        {/*  ${isOpen ? "opacity-100" : "opacity-0"} */}
        {/*  transition-all duration-300 ease-in-out`}*/}
        {/*          >*/}
        {/*              {children}*/}
        {/*          </p>*/}
        {/*          <button*/}
        {/*              className={`bg-background text-title px-2 py-1 lg:px-4 lg:py-2 ${detail?'':'hidden'} rounded */}
        {/*  ${isOpen ? "opacity-100" : "opacity-0"} */}
        {/*  transition-all duration-300 ease-in-out`}*/}
        {/*          >*/}
        {/*              Xem thêm*/}
        {/*          </button>*/}
        {/*      </div>*/}
      </div>
    </motion.div>
  );
};

export default ServiceSingle;
