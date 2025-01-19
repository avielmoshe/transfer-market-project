import { fetchDataOfNewsDetail } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// Define types for the data structure
interface PlayerPerformanceData {
  player: {
    name: string;
    position: string;
    image: string;
  };
  performance: {
    games: string;
    goals: string;
    assists: string;
  };
}

interface Club {
  name: string;
  image: string;
  marketValue?: {
    value: number;
    currency: string;
  };
}

interface WidgetData {
  [key: string]: any; // Add more specific types for widgetData as needed
}

interface NewsData {
  heroImage: string;
  heroImageSource: string;
  headline: string;
  author: string;
  timestamp: number;
  source: string;
  widgetData: WidgetData;
  text: Record<string, string>; // 'text-' keys containing HTML content
}

function NewsPage() {
  const { newsId } = useParams<{ newsId: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfNewsDetail", { newsId }],
    queryFn: () => fetchDataOfNewsDetail(newsId),
  });

  if (error) return <div>Error loading news data.</div>;
  if (!data || isLoading) return <div>Loading...</div>;

  const dataNews = data.news as NewsData;
  console.log(dataNews);

  // Extract dynamic fields
  const galleryKey = Object.keys(dataNews.widgetData).find((key) =>
    key.startsWith("gallery_")
  );
  const customLinkKey = Object.keys(dataNews.widgetData).find((key) =>
    key.startsWith("customLinkBox_")
  );
  const clubComparisonKey = Object.keys(dataNews.widgetData).find((key) =>
    key.startsWith("clubComparison_")
  );

  return (
    <div className="p-6 bg-gray-100">
      <HeroSection data={dataNews} />
      <TextSection data={dataNews.text} />
      {clubComparisonKey && (
        <ClubComparison data={dataNews.widgetData[clubComparisonKey]} />
      )}
      <PlayerPerformance data={dataNews.widgetData} />
      {customLinkKey && (
        <RelatedLinks data={dataNews.widgetData[customLinkKey]} />
      )}
      {galleryKey && <GallerySection data={dataNews.widgetData[galleryKey]} />}
    </div>
  );
}

const HeroSection = ({ data }: { data: NewsData }) => (
  <section className="mb-8">
    <img
      src={data.heroImage}
      alt="Hero"
      className="w-full h-96 object-cover rounded-lg"
    />
    <p className="text-sm text-gray-500 mt-2">
      Image Source: {data.heroImageSource}
    </p>
    <h1 className="text-4xl font-bold mt-4 text-gray-900">{data.headline}</h1>
    <div className="text-gray-600 mt-2">
      <p>
        By <span className="font-semibold">{data.author}</span>
      </p>
      <p>Published: {new Date(data.timestamp * 1000).toLocaleString()}</p>
      <p>Source: {data.source}</p>
    </div>
  </section>
);

const TextSection = ({ data }: { data: Record<string, string> }) => (
  <section className="mb-8 space-y-6">
    {Object.keys(data)
      .filter((key) => key.startsWith("text-"))
      .map((key) => (
        <div
          key={key}
          className="text-lg leading-7 text-gray-800"
          dangerouslySetInnerHTML={{ __html: data[key] }}
        />
      ))}
  </section>
);

const ClubComparison = ({ data }: { data: Club[] }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Club Comparison</h2>
    <div className="grid grid-cols-2 gap-4">
      {data.map((club, index) => (
        <div
          key={index}
          className="p-4 bg-white shadow-md rounded-lg flex flex-col items-center text-center"
        >
          <img src={club.image} alt={club.name} className="h-16 w-16 mb-2" />
          <h3 className="text-lg font-semibold text-gray-900">{club.name}</h3>
          <p className="text-gray-600">
            Market Value: {club.marketValue?.value}
            {club.marketValue?.currency}
          </p>
        </div>
      ))}
    </div>
  </section>
);

const PlayerPerformance = ({ data }: { data: WidgetData }) => {
  const performanceKeys = Object.keys(data).filter((key) =>
    key.startsWith("playerPerformanceValueBox")
  );

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Player Stats</h2>
      {performanceKeys.map((key) => {
        const playerData = data[key] as PlayerPerformanceData;
        return (
          <div key={key} className="p-4 bg-white shadow-md rounded-lg mb-4">
            <div className="flex items-center">
              <img
                src={playerData.player.image}
                alt={playerData.player.name}
                className="h-16 w-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {playerData.player.name}
                </h3>
                <p className="text-gray-600">{playerData.player.position}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {["games", "goals", "assists"].map((stat) => (
                <div key={stat} className="text-center">
                  <p className="text-sm text-gray-500">
                    {stat.charAt(0).toUpperCase() + stat.slice(1)}
                  </p>
                  <p className="text-lg font-semibold">
                    {playerData.performance[stat]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

const RelatedLinks = ({ data }: { data: { url: string; text: string } }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Links</h2>
    <a
      href={data.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      {data.text}
    </a>
  </section>
);

const GallerySection = ({
  data,
}: {
  data: { title: string; images: { url: string; caption?: string }[] };
}) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.title}</h2>
    <div className="grid grid-cols-3 gap-4">
      {data.images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.caption || "Gallery image"}
          className="w-full h-40 object-cover rounded-lg"
        />
      ))}
    </div>
  </section>
);

export default NewsPage;
