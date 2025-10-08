import type { ReactNode } from "react";
import { easeOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Utility to check if string is a hex color
const isHexColor = (value?: string): boolean => {
  return typeof value === "string" && value.startsWith("#");
};

interface Props {
  image: string;
  children?: ReactNode;
  imageFirstDesktop?: boolean;
  imageFirstMobile?: boolean;

  navTitle?: string;
  subTitle?: string;
  navTitleColor?: string;
  subTitleColor?: string;
  navTitleSize?: string;
  subTitleSize?: string;
  navTitleWeight?: string;
  subTitleWeight?: string;

  title?: string;
  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;

  listItems?: string[];
  listColor?: string;
  listSize?: string;
  listWeight?: string;
  listIconBg?: string;
  listIcon?: ReactNode;
}

const SectionImageForTracibility = ({
  image,
  children,
  imageFirstDesktop = false,
  imageFirstMobile = true,
  navTitle,
  subTitle,
  navTitleColor,
  subTitleColor,
  navTitleSize = "text-3xl",
  subTitleSize = "text-3xl",
  navTitleWeight = "font-bold",
  subTitleWeight = "font-bold",
  title,
  titleColor,
  titleSize = "text-xl",
  titleWeight = "font-bold",
  listItems,
  listColor,
  listSize = "text-base",
  listWeight = "font-normal",
  listIconBg = "bg-green-500 dark:bg-green-400",
  listIcon,
}: Props) => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2 });
  const headerControls = useAnimation();

  const [textRef, textInView] = useInView({ threshold: 0.2 });
  const [imgRef, imgInView] = useInView({ threshold: 0.2 });

  const textControls = useAnimation();
  const imgControls = useAnimation();

  useEffect(() => {
    headerControls.start(headerInView ? "visible" : "hidden");
  }, [headerInView]);

  useEffect(() => {
    textControls.start(textInView ? "visible" : "hidden");
  }, [textInView]);

  useEffect(() => {
    imgControls.start(imgInView ? "visible" : "hidden");
  }, [imgInView]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  };

  const defaultIcon = (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center ${listIconBg}`}
    >
      <svg
        className="w-3 h-3 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );

  return (
    <div className="w-full h-max rounded-xl px-10 mt-16 flex flex-col gap-10">
      {/* Tiêu đề lớn */}
      {(navTitle || subTitle) && (
        <motion.div
          ref={headerRef}
          variants={fadeInVariant}
          initial="hidden"
          animate={headerControls}
          className="text-center"
        >
          {navTitle && (
            <h2
              className={`${navTitleSize} ${
                !isHexColor(navTitleColor) ? navTitleColor : ""
              } ${navTitleWeight}`}
              style={
                isHexColor(navTitleColor) ? { color: navTitleColor } : undefined
              }
            >
              {navTitle}
            </h2>
          )}
          {subTitle && (
            <h3
              className={`${subTitleSize} ${
                !isHexColor(subTitleColor) ? subTitleColor : ""
              } ${subTitleWeight}`}
              style={
                isHexColor(subTitleColor) ? { color: subTitleColor } : undefined
              }
            >
              {subTitle}
            </h3>
          )}
        </motion.div>
      )}

      {/* Nội dung */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <motion.div
          ref={textRef}
          variants={fadeInVariant}
          initial="hidden"
          animate={textControls}
          className={`
            ${imageFirstMobile ? "order-2" : "order-1"} 
            ${imageFirstDesktop ? "lg:order-2" : "lg:order-1"} 
            h-full py-5 text-text flex flex-col justify-center
          `}
        >
          {title && (
            <h2
              className={`${titleSize} ${
                !isHexColor(titleColor) ? titleColor : ""
              } ${titleWeight} mb-4`}
              style={isHexColor(titleColor) ? { color: titleColor } : undefined}
            >
              {title}
            </h2>
          )}

          {listItems && (
            <ul className="space-y-2 mb-4">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {listIcon ?? defaultIcon}
                  </div>
                  <span
                    className={`${listSize} ${
                      !isHexColor(listColor) ? listColor : ""
                    } ${listWeight}`}
                    style={
                      isHexColor(listColor) ? { color: listColor } : undefined
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {children}
        </motion.div>

        <motion.div
          ref={imgRef}
          variants={fadeInVariant}
          initial="hidden"
          animate={imgControls}
          className={`
            ${imageFirstMobile ? "order-1" : "order-2"} 
            ${imageFirstDesktop ? "lg:order-1" : "lg:order-2"} 
            lg:h-full flex items-center p-8 rounded-2xl justify-center
          `}
        >
          <img
            src={image}
            alt=""
            className="lg:h-full object-cover min-h-100"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionImageForTracibility;
