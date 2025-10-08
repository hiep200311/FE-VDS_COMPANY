import type { ReactNode } from "react";
import { easeOut, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const isHexColor = (value?: string): boolean => {
  return typeof value === "string" && value.startsWith("#");
};

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

const TextLeftImageRight = ({
  image,
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
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
    <div className="w-full h-max rounded-xl px-5 mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4">
      {/* Text Block (Left) */}
      <motion.div
        ref={textRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={textControls}
        className="order-2 lg:order-1 h-full p-5 flex flex-col justify-center"
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
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {listIcon ?? defaultIcon}
                  </div>
                  <span
                    className={`${customSize} ${
                      !isHexColor(customColor) ? customColor : ""
                    } ${customWeight}`}
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

      {/* Image Block (Right) */}
      <motion.div
        ref={imgRef}
        variants={fadeInVariant}
        initial="hidden"
        animate={imgControls}
        className="order-1 lg:order-2 flex items-center justify-center"
      >
        <img src={image} alt="" className="lg:h-full object-cover max-h-150" />
      </motion.div>
    </div>
  );
};

export default TextLeftImageRight;
