import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center p-4">
      <span className="loading loading-dots loading-xl"></span>
      <p className="mt-3 text-sm text-gray-500">Loading, please wait...</p>
    </div>
  );
};

export default Loading;
