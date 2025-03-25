import { NewsItem } from "@/types/types";

interface NewsCardProp {
  newsItem: NewsItem;
}

function NewsCard({ newsItem }: NewsCardProp) {
  return (
    <div className="flex bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden max-w-[500px] max-h-[250px]">
      {/* Left Image Section */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={newsItem.newsFirstImage}
          alt={newsItem.newsHeadline}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 p-3">
        {/* Top Section (Category and Date) */}
        <div className="flex justify-between items-start">
          <span className="text-xs text-gray-500">
            {newsItem.newsDate} - {newsItem.newsTime}
          </span>
          {newsItem.newsSecondImage && (
            <img
              src={newsItem.newsSecondImage}
              alt="Second Image"
              className="w-8 h-8 object-contain"
            />
          )}
        </div>

        {/* Headline */}
        <p className="text-sm text-blue-500 font-semibold mt-1">
          {newsItem.newsTeaser}
        </p>
        <h3 className="text-base font-bold text-gray-800 mt-1">
          {newsItem.newsHeadline}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Louisville City receive six figure fee{" "}
          <span className="text-blue-500 font-bold cursor-pointer">
            Read More
          </span>
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
