import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-2 sm:p-3 rounded-md overflow-hidden">
      <p className="text-base-100 bg-secondary px-3 py-1 text-xs sm:text-sm">
        Latest
      </p>

      <div className="flex-1 text-sm sm:text-base">
        <Marquee pauseOnHover={true} speed={60}>
          <div className="flex gap-6 items-center">
            <p className="font-bold whitespace-nowrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="font-bold whitespace-nowrap">
              Consectetur adipisicing elit. Aliquam, accusantium?
            </p>
            <p className="font-bold whitespace-nowrap">
              More headlines to make the marquee look realistic.
            </p>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
