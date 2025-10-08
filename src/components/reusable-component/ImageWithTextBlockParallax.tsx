import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

  // Animation props
  parallaxSpeed?: number;
  imageParallaxSpeed?: number;
  textParallaxSpeed?: number;
  fadeDuration?: number;
  fadeDelay?: number;
}

const ImageWithTextBlockParallax = ({
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
  textParallaxSpeed = 0.7,
  fadeDuration = 0.8,
  fadeDelay = 0.2,
}: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Text parallax (giữ nguyên cho text)
  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [50 * textParallaxSpeed, -50 * textParallaxSpeed]
  );

  // Fade animation cho toàn bộ component
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

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
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="w-full h-max rounded-xl px-5 mt-10 grid lg:grid-cols-2 grid-cols-1 gap-4"
    >
      {/* Image Block với Fade Animation */}
      <motion.div
        className={`${
          imageLeft ? "order-1 lg:order-1" : "order-1 lg:order-2"
        } lg:h-full flex items-center justify-center`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: fadeDuration,
          delay: fadeDelay,
          ease: "easeOut",
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.img
          src={image}
          alt=""
          className="lg:h-full object-cover max-h-150 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: fadeDuration + 0.2,
            delay: fadeDelay + 0.1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        />
      </motion.div>

      {/* Text Block với Parallax */}
      <motion.div
        style={{ y: textY }}
        className={`${
          imageLeft ? "order-2 lg:order-2" : "order-2 lg:order-1"
        } h-full p-5 text-text flex flex-col justify-center`}
      >
        {title && (
          <motion.h2
            className={`${titleSize} ${
              !isHexColor(titleColor) ? titleColor : ""
            } ${titleWeight} mb-4`}
            style={isHexColor(titleColor) ? { color: titleColor } : undefined}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h2>
        )}

        {/* Custom List Items */}
        {listItems && (
          <motion.ul
            className="space-y-2 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                >
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
                </motion.li>
              );
            })}
          </motion.ul>
        )}

        {children}
      </motion.div>
    </motion.div>
  );
};

export default ImageWithTextBlockParallax;
