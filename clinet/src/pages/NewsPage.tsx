import { fetchDataOfNewsDetail } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Params, useParams } from "react-router-dom";

function NewsPage() {
  const { newsId } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfNewsDetail", { newsId }],
    queryFn: () => fetchDataOfNewsDetail(newsId),
  });

  if (error) return <div>Error loading news data.</div>;
  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  const dataNews = data.news;

  return (
    <div className="p-6 bg-gray-100">
      {/* Hero Section */}
      <section className="mb-8">
        <img
          src={dataNews.heroImage}
          alt="Hero"
          className="w-full h-96 object-cover rounded-lg"
        />
        <p className="text-sm text-gray-500 mt-2">
          Image Source: {dataNews.heroImageSource}
        </p>
        <h1 className="text-4xl font-bold mt-4 text-gray-900">
          {dataNews.headline}
        </h1>
        <div className="text-gray-600 mt-2">
          <p>
            By <span className="font-semibold">{dataNews.author}</span>
          </p>
          <p>
            Published: {new Date(dataNews.timestamp * 1000).toLocaleString()}
          </p>
          <p>Source: {dataNews.source}</p>
        </div>
      </section>

      {/* News Text Section */}
      <section className="mb-8 space-y-6">
        {Object.keys(dataNews)
          .filter((key) => key.startsWith("text-"))
          .map((key) => (
            <div
              key={key}
              className="text-lg leading-7 text-gray-800"
              dangerouslySetInnerHTML={{ __html: dataNews[key] }}
            />
          ))}
      </section>

      {/* Club Comparison Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Club Comparison
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {dataNews.widgetData.clubComparison_1934497067.map((club, index) => (
            <div
              key={index}
              className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
            >
              <img
                src={club.image}
                alt={club.name}
                className="h-16 w-16 mb-2"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {club.name}
              </h3>
              <p className="text-gray-600">
                Market Value: {club.marketValue?.value}
                {club.marketValue?.currency}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Player Performance Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Player Stats</h2>
        {Object.keys(dataNews.widgetData)
          .filter((key) => key.startsWith("playerPerformanceValueBox"))
          .map((key, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-lg mb-4">
              <div className="flex items-center">
                <img
                  src={dataNews.widgetData[key].player.image}
                  alt={dataNews.widgetData[key].player.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {dataNews.widgetData[key].player.name}
                  </h3>
                  <p className="text-gray-600">
                    {dataNews.widgetData[key].player.position}
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500">Games</p>
                  <p className="text-lg font-semibold">
                    {dataNews.widgetData[key].performance.games}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Goals</p>
                  <p className="text-lg font-semibold">
                    {dataNews.widgetData[key].performance.goals}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500">Assists</p>
                  <p className="text-lg font-semibold">
                    {dataNews.widgetData[key].performance.assists}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Additional Links */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Links</h2>
        <a
          href={dataNews.widgetData.customLinkBox_2029678016.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {dataNews.widgetData.customLinkBox_2029678016.text}
        </a>
      </section>

      {/* Gallery Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {dataNews.widgetData.gallery_892040392.title}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {dataNews.widgetData.gallery_892040392.images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.caption}
              className="w-full h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default NewsPage;
