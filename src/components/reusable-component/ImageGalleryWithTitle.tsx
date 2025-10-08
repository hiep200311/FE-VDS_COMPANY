import React from "react";

export interface GalleryItem {
  image: string;
  caption:
    | string
    | {
        text: string;
        color?: string;
        size?: string;
        weight?: string;
      };
}

interface Props {
  title: string;
  description?: string;
  items: GalleryItem[];

  titleColor?: string;
  titleSize?: string;
  titleWeight?: string;

  descColor?: string;
  descSize?: string;
  descWeight?: string;

  captionColor?: string;
  captionSize?: string;
  captionWeight?: string;
}

const isHexColor = (value?: string): boolean => {
  return typeof value === "string" && value.startsWith("#");
};

const ImageGalleryWithTitle: React.FC<Props> = ({
  title,
  description,
  items,

  titleColor = "text-green-600",
  titleSize = "text-3xl",
  titleWeight = "font-bold",

  descColor = "text-text",
  descSize = "text-base",
  descWeight = "font-normal",

  captionColor = "text-black",
  captionSize = "text-sm",
  captionWeight = "font-medium",
}) => {
  return (
    <div className="w-full px-4 py-16">
      {/* Title & Description */}
      <div className="text-center max-w-[90%] mx-auto mb-6">
        <h2
          className={`${titleSize} ${
            !isHexColor(titleColor) ? titleColor : ""
          } ${titleWeight}`}
          style={isHexColor(titleColor) ? { color: titleColor } : undefined}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 ${descSize} ${
              !isHexColor(descColor) ? descColor : ""
            } ${descWeight}`}
            style={isHexColor(descColor) ? { color: descColor } : undefined}
          >
            {description}
          </p>
        )}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[95%] mx-auto">
        {items.map((item, i) => {
          const captionText =
            typeof item.caption === "string" ? item.caption : item.caption.text;
          const customColor =
            typeof item.caption === "string"
              ? captionColor
              : item.caption.color ?? captionColor;
          const customSize =
            typeof item.caption === "string"
              ? captionSize
              : item.caption.size ?? captionSize;
          const customWeight =
            typeof item.caption === "string"
              ? captionWeight
              : item.caption.weight ?? captionWeight;

          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="w-full max-w-[400px] h-[200px] shadow-2xl rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={captionText}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className={`text-center ${customSize} ${
                  !isHexColor(customColor) ? customColor : ""
                } ${customWeight}`}
                style={
                  isHexColor(customColor) ? { color: customColor } : undefined
                }
              >
                {captionText}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGalleryWithTitle;
