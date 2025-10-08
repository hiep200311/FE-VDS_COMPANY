import type { ReactNode } from "react";
import { easeOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const isHexColor = (value?: string): boolean =>
  typeof value === "string" && value.startsWith("#");

type ListItem =
  | string
  | {
      text: string;
      color?: string;
      size?: string;
      weight?: string;
    };

interface Props {
  image: string;
  imageLeft?: boolean;

  title?: string;
  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;

  listItems?: ListItem[];
  listColor?: string;
  listSize?: string;
  listWeight?: string;
  listIconBg?: string;
  listIcon?: ReactNode;

  children?: ReactNode;
}

const ImageWithTextBlock = ({
  image,
  imageLeft = true,
  title,
  titleColor,
  titleSize = "text-xl",
  titleWeight = "font-bold",

  listItems,
  listColor = "text-gray-800",
  listSize = "text-base",
  listWeight = "font-normal",
  listIconBg = "bg-green-500 dark:bg-green-400",
  listIcon,

  children,
}: Props) => {
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
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: -20,
      transition: { duration: 0.6, ease: easeOut },
    },
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
    <div className="w-full h-max rounded-xl px-3 sm:px-5 lg:px-8 mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Image Block */}
      <motion.div
        ref={imgRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={imgControls}
        className={`${
          imageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
        } lg:h-full flex items-center justify-center`}
      >
        <img
          src={image}
          alt=""
          className="w-auto h-auto max-h-96 sm:max-h-180 lg:max-h-180 object-cover rounded-lg"
        />
      </motion.div>

      {/* Text Block */}
      <motion.div
        ref={textRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={textControls}
        className={`${
          imageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
        } h-full p-3 sm:p-5 lg:p-8  text-text flex flex-col justify-center`}
      >
        {title && (
          <h2
            className={`${titleSize} ${
              !isHexColor(titleColor) ? titleColor : ""
            } ${titleWeight} mb-3  sm:mb-4 lg:mb-6 text-center`}
            style={isHexColor(titleColor) ? { color: titleColor } : undefined}
          >
            {title}
          </h2>
        )}

        {/* Custom List Items */}
        {listItems && (
          <ul className="space-y-3 sm:space-y-4 mb-4">
            {listItems.map((item, index) => {
              const content = typeof item === "string" ? item : item.text;
              const customColor =
                typeof item === "string" ? listColor : item.color || listColor;
              const customSize =
                typeof item === "string" ? listSize : item.size || listSize;
              const customWeight =
                typeof item === "string"
                  ? listWeight
                  : item.weight || listWeight;

              return (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {listIcon ?? defaultIcon}
                  </div>
                  <span
                    className={`${customSize} ${
                      !isHexColor(customColor) ? customColor : ""
                    } ${customWeight} leading-relaxed`}
                    style={
                      isHexColor(customColor)
                        ? { color: customColor }
                        : undefined
                    }
                  >
                    {content}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {children}
      </motion.div>
    </div>
  );
};

export default ImageWithTextBlock;
