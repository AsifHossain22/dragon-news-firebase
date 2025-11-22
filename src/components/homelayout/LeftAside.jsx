import React, { Suspense } from "react";
import Categories from "../Categories";

const LeftAside = () => {
  return (
    <div className="px-2 md:px-0">
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <div className="bg-transparent">
          <Categories />
        </div>
      </Suspense>
    </div>
  );
};

export default LeftAside;
