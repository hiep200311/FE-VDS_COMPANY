import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
    title: string;
    description: string;
    image: string;
    date?: string;
}

interface Props {
    items: SlideItem[];
    title?: string;
    titleColor?: string;
    titleSize?: string;
    titleWeight?: string;
    titleAlign?: string;
}

const CARD_WIDTH = 340;
const CARD_GAP = 16;
const TOTAL_WIDTH = CARD_WIDTH + CARD_GAP;
const VISIBLE_CARDS = 3;

const FocusCenterSlider: React.FC<Props> = ({
    items,
    title,
    titleColor = "text-black",
    titleSize = "text-3xl",
    titleWeight = "font-bold",
    titleAlign = "text-center",
}) => {
    const loopItems = [...items, ...items, ...items];
    const middleIndex = items.length;

    const [activeIndex, setActiveIndex] = useState(middleIndex);
    const [transitioning, setTransitioning] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);

    const prevSlide = () => {
        if (!transitioning) {
            setActiveIndex((prev) => prev - 1);
            setTransitioning(true);
        }
    };

    const nextSlide = () => {
        if (!transitioning) {
            setActiveIndex((prev) => prev + 1);
            setTransitioning(true);
        }
    };

    const getTransform = () => {
        const offset = (activeIndex - Math.floor(VISIBLE_CARDS / 2)) * TOTAL_WIDTH;
        return `translateX(-${offset}px)`;
    };

    const handleTransitionEnd = () => {
        setTransitioning(false);
        if (activeIndex < items.length) {
            setActiveIndex((prev) => prev + items.length);
        } else if (activeIndex >= items.length * 2) {
            setActiveIndex((prev) => prev - items.length);
        }
    };

    return (
        <div className="w-full py-10 flex flex-col items-center gap-6">
            {/* Optional Title */}
            {title && (
                <h2
                    className={`${titleColor} ${titleSize} ${titleWeight} ${titleAlign}`}
                >
                    {title}
                </h2>
            )}

            <div className="relative w-full px-4 overflow-hidden">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="overflow-hidden w-full">
                    <motion.div
                        ref={containerRef}
                        className="flex"
                        style={{
                            width: `${loopItems.length * TOTAL_WIDTH}px`,
                            transform: getTransform(),
                            gap: `${CARD_GAP}px`,
                            transition: transitioning ? "transform 0.5s ease" : "none"
                        }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {loopItems.map((item, index) => {
                            const isActive = index === activeIndex;
                            const scale = isActive ? 1 : 0.9;
                            const opacity = isActive ? 1 : 0.5;

                            return (
                                <motion.div
                                    key={`slide-${index}`}
                                    animate={transitioning ? false : { scale, opacity }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0 rounded-xl overflow-hidden shadow-xl bg-white"
                                    style={{ width: `${CARD_WIDTH}px` }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        {item.date && (
                                            <p className="text-xs text-gray-500 mb-1">
                                                {item.date}
                                            </p>
                                        )}
                                        <h3 className="font-semibold text-lg mb-1 line-clamp-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-100 ${index === activeIndex % items.length
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FocusCenterSlider;
