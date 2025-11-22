import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } =
    news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <article className="card bg-base-100 shadow-md mb-6 overflow-hidden">
      {/* Author + Share */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-base-200 p-3 md:p-4 gap-3">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={author.img}
                alt={author.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="ml-auto">
          <button className="text-gray-500 hover:text-primary flex gap-2 items-center text-sm">
            <FaRegBookmark />
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title + Image row on larger screens */}
      <div className="px-4 py-3">
        <h2 className="text-lg font-bold text-primary cursor-pointer mb-3">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <img
              src={thumbnail_url}
              alt={title}
              className="w-full h-44 md:h-32 lg:h-40 object-cover rounded-md"
            />
          </div>

          <div className="md:col-span-2 text-accent text-sm md:text-base">
            {details.length > 200 ? (
              <>
                {details.slice(0, 220)}...
                <Link
                  to={`/news-details/${id}`}
                  className="text-primary font-semibold ml-1 hover:underline"
                >
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3 border-t border-base-200 mt-3 gap-3">
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-600">{rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
