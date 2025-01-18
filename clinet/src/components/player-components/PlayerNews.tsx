import { fetchDataOfNewsByClub, fetchDataOfNewsByPlayer } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, Params, useParams } from "react-router-dom";
import NewsCard from "../NewsCard";

function PlayerNews() {
  const { id } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfNewsByPlayer", { id }],
    queryFn: () => fetchDataOfNewsByPlayer(id),
  });
  if (error) return null;
  if (!data) {
    return null;
  }
  console.log(data);
  const news = data.news;
  return (
    <div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold text-center">
        {data.share.title}
      </h2>
      <div className="flex flex-col items-center gap-4 mt-4">
        {news.length > 0 ? (
          news.map((newsItem) => (
            <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
              <NewsCard newsItem={newsItem} />
            </Link>
          ))
        ) : (
          <div>The player doesn't have news</div>
        )}
      </div>
    </div>
  );
}

export default PlayerNews;
