import type { ReactNode } from "react";
import { easeOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface props {
  image: string;
  children?: ReactNode;
  imageFirstDesktop?: boolean;
  imageFirstMobile?: boolean;
}

const SectionWithImage = ({
  image,
  children,
  imageFirstDesktop = false,
  imageFirstMobile = true,
}: props) => {
  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [imgRef, imgInView] = useInView({ threshold: 0.2 });

  const textControls = useAnimation();
  const imgControls = useAnimation();

  useEffect(() => {
    textControls.start(textInView ? "visible" : "hidden");
  }, [textInView]);

  useEffect(() => {
    imgControls.start(imgInView ? "visible" : "hidden");
  }, [imgInView]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  return (
    <div className="w-full  h-max rounded-xl p-5 my-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
      {/* Text Block */}
      <motion.div
        ref={textRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={textControls}
        className={`
        ${imageFirstMobile ? "order-2" : "order-1"} 
        ${imageFirstDesktop ? "lg:order-2" : "lg:order-1"} 
        h-full p-5 text-text flex flex-col justify-center
    `}
      >
        {children}
      </motion.div>

      {/* Image Block */}
      <motion.div
        ref={imgRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={imgControls}
        className={`
                    ${imageFirstMobile ? "order-1" : "order-2"} 
                    ${imageFirstDesktop ? "lg:order-1" : "lg:order-2"} 
                    lg:h-full flex items-center justify-center
                `}
      >
        <img
          src={image}
          alt=""
          className=" bg-frontground rounded-2xl lg:h-full object-cover max-h-150"
        />
      </motion.div>
    </div>
  );
};

export default SectionWithImage;
