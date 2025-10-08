import type { ReactNode } from "react";

export interface props {
    img: string;
    title: ReactNode;
    description: string;
    children?: ReactNode;
    className?: string;
}

const Card = ({ img, title, description, children, className }: props) => {
    return (
        <div
            className={` flex-shrink-0 rounded-xl overflow-hidden shadow-xl bg-frontground w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto min-w-0 ${className}`}
        >
            <div className="w-full flex justify-center items-center h-15 sm:h-28 lg:h-32 px-3 sm:px-4 lg:px-6 lg:pt-10">
                <img
                    src={img}
                    className="max-w-full h-full"
                />
            </div>
            <div className="px-3 sm:p-4 lg:px-6">
                <h3 className="font-semibold text-center text-title-pos text-base sm:text-lg lg:text-xl mb-2 line-clamp-2">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-text text-justify leading-relaxed">
                    {description}
                </p>
                {children}
            </div>
        </div>
    );
}
export default Card