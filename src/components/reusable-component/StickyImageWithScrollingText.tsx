import type { ReactNode } from "react";
import { motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import useIsMobile from "@/libs/hook/use-is-mobile";
import SectionWithImage from "./SectionWithImage";

interface SectionData {
  image: string;
  title?: string;
  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;
  children?: ReactNode;
}

interface Props {
  sections: SectionData[];
  imagePosition?: "left" | "right";
  className?: string;
}

const StickyImageWithScrollingText = ({
  sections,
  imagePosition = "left",
  className = "",
}: Props) => {
  const containerRef = useRef(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Tính toán index của ảnh dựa trên scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      const newIndex = Math.floor(progress * sections.length);
      const clampedIndex = Math.min(Math.max(newIndex, 0), sections.length - 1);
      setActiveImageIndex(clampedIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress, sections.length]);

  return (
    <>
      {isMobile ? (
        <>
          {sections.map((section, index) => (
            <SectionWithImage
              key={index}
              imageClass="aspect-square object-cover mx-auto w-75"
              image={section.image}
            >
              {section.children}
            </SectionWithImage>
          ))}
        </>
      ) : (
        <div ref={containerRef} className={`relative ${className}`}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {/* Sticky Image Container */}
            <div
              className={`${
                imagePosition === "right" ? "order-2" : "order-1"
              } md:sticky md:top-0 md:h-screen md:flex md:items-center`}
            >
              <div className="relative w-full h-96 md:h-[80vh] overflow-hidden rounded-xl">
                {sections.map((section, index) => (
                  <motion.img
                    key={index}
                    src={section.image}
                    alt={section.title || ""}
                    className="absolute top-0 inset-0 w-full h-full object-cover rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeImageIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>

            {/* Scrolling Text Content */}
            <div
              className={`${
                imagePosition === "right" ? "order-1" : "order-2"
              } space-y-32`}
            >
              <div className="md:min-h-[80vh] flex flex-col justify-center items-center p-8">
                {sections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="min-h-screen flex flex-col justify-center items-center p-8"
                    initial={{ opacity: 0.5, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, delay: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {section.children && section.children}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StickyImageWithScrollingText;

// {sections.map((section, index) => (
//     <motion.div
//         key={index}
//         className="min-h-screen lg:min-h-[80vh] flex flex-col justify-center items-center p-8"
//         initial={{ opacity: 0, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3, delay: 0.2 }}
//         viewport={{ once: false, amount: 0.3 }}
//     >
//         {section.title && (
//             <motion.h2
//                 className={`${section.titleSize || "text-3xl"} ${!isHexColor(section.titleColor) ? section.titleColor : ""
//                     } ${section.titleWeight || "font-bold"} mb-6`}
//                 style={isHexColor(section.titleColor) ? { color: section.titleColor } : undefined}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.3 }}
//             >
//                 {section.title}
//             </motion.h2>
//         )}

//         {section.listItems && (
//             <motion.ul
//                 className="space-y-4"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ duration: 0.3, delay: 0.4 }}
//             >
//                 {section.listItems.map((item, itemIndex) => {
//                     const content = typeof item === "string" ? item : item.text;
//                     const customColor = typeof item === "string" ? section.listColor : item.color || section.listColor;
//                     const customSize = typeof item === "string" ? section.listSize : item.size || section.listSize;
//                     const customWeight = typeof item === "string" ? section.listWeight : item.weight || section.listWeight;

//                     return (
//                         <motion.li
//                             key={itemIndex}
//                             className="flex items-start gap-4"
//                             initial={{ opacity: 0, x: -30 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.3, delay: 0.1 * itemIndex + 0.5 }}
//                         >
//                             <div className="flex-shrink-0 mt-1">
//                                 {section.listIcon ?? defaultIcon(section.listIconBg || "bg-green-500")}
//                             </div>
//                             <span
//                                 className={`${customSize || "text-base"} ${!isHexColor(customColor) ? customColor : ""
//                                     } ${customWeight || "font-normal"} leading-relaxed`}
//                                 style={isHexColor(customColor) ? { color: customColor } : undefined}
//                             >
//                                 {content}
//                             </span>
//                         </motion.li>
//                     );
//                 })}
//             </motion.ul>
//         )}

//         {section.children && (
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: 0.6 }}
//             >
//                 {section.children}
//             </motion.div>
//         )}
//     </motion.div>
// ))}
