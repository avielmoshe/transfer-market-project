import { fetchDataOfNewsByCompetition } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, Params, useParams } from "react-router-dom";
import NewsCard from "../NewsCard";

function CompetitionNews() {
  const { competitionId } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfNewsByCompetition", { competitionId }],
    queryFn: () => fetchDataOfNewsByCompetition(competitionId),
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
        {news.map((newsItem) => (
          <Link key={newsItem.id} to={`/news/${newsItem.id}`}>
            <NewsCard newsItem={newsItem} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CompetitionNews;
