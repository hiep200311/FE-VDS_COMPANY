import { useState, type ReactNode } from "react";

interface props {
  title: string;
  photo: string;
  children: ReactNode;
}

const ActivityArticle = ({ title, photo, children }: props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      style={{
        backgroundImage: `url(${photo})`,
      }}
      className={`bg-cover bg-center bg-no-repeat rounded-2xl ${
        isOpen ? "pt-0" : "pt-45"
      } h-80 transition-all duration-300 ease-in-out shadow-all-3xl overflow-hidden`}
    >
      <div
        className={`p-4 bg-frontground/70 h-full transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className="text-title font-black">{title}</div>

        <p
          className={`transition-all text-text duration-300 ease-in-out overflow-hidden ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default ActivityArticle;
