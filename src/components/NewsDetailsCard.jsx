import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      {news?.image_url && (
        <img
          src={news.image_url}
          alt=""
          className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover rounded-md"
        />
      )}
      <h2 className="text-xl sm:text-2xl font-semibold">{news.title}</h2>
      <p className="text-sm sm:text-base leading-relaxed">{news.details}</p>

      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        Back to Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
