import type { ReactNode } from "react";

export interface Props {
  img: string;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  leftClassName?: string;
  rightClassName?: string;
}

const CenterImageWithFeatures = ({
  img,
  leftContent,
  rightContent,
  children,
  className,
  imageClassName = "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-96 sm:max-h-120 lg:max-h-140 object-contain",
  leftClassName = "",
  rightClassName = "",
}: Props) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8 mx-4 sm:mx-8 lg:mx-16 min-w-0 ${className}`}
    >
      {/* Left Content */}
      <div
        className={`w-full lg:w-1/3 lg:flex-1 px-2 sm:px-3 lg:px-4 order-2 lg:order-1 min-w-0 ${leftClassName}`}
      >
        <div className="space-y-4 sm:space-y-6">{leftContent}</div>
      </div>

      {/* Center Image */}
      <div className="flex-shrink-0 w-full lg:w-auto max-w-md mx-auto lg:mx-0 order-1 lg:order-2">
        <div className="flex justify-center items-center">
          <img
            src={img}
            alt="Feature Image"
            className={`${imageClassName} rounded-lg`}
          />
        </div>
      </div>

      {/* Right Content */}
      <div
        className={`w-full lg:w-1/3 lg:flex-1 px-2 sm:px-3 lg:px-4 order-3 min-w-0 ${rightClassName}`}
      >
        <div className="space-y-4 sm:space-y-6">{rightContent || children}</div>
      </div>
    </div>
  );
};

export default CenterImageWithFeatures;
