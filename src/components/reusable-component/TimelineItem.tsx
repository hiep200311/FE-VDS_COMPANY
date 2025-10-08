import type { ReactNode } from "react";

interface props {
  time?: string;
  title?: string;
  location?: string;
  children: ReactNode;
}

const TimelineItem = ({ time, title, children, location }: props) => {
  return (
    <div
      className={`relative ${
        time === undefined ? "pl-3 sm:pl-10" : "pl-8 sm:pl-32"
      } py-6 group`}
    >
      {/* Vertical line */}
      <div
        className={`absolute top-0 ${
          time === undefined
            ? "left-0 sm:ml-0"
            : "left-2 sm:left-0 sm:ml-[6.5rem]"
        } w-px h-full bg-slate-300 -translate-x-1/2`}
      />

      {/* Dot */}
      <div
        className={`absolute ${
          time === undefined
            ? "left-0 sm:ml-0"
            : "left-2 sm:left-0 sm:ml-[6.5rem]"
        } w-2 h-2 border-title border-4 rounded-full -translate-x-1/2 translate-y-1.5`}
      />

      {/* Time + Content */}
      <div className="flex flex-col sm:flex-row items-start gap-2">
        {time && (
          <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 text-text bg-frontground rounded-full">
            {time}
          </time>
        )}
        <div>
          <div className="text-xl font-bold text-title">{title}</div>
          <div className="text-xl font-semibold text-slate-900">{location}</div>
        </div>
      </div>

      <div className="text-text mt-2">{children}</div>
    </div>
  );
};

export default TimelineItem;
