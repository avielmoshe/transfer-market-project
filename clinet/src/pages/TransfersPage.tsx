import BigLoader from "@/components/BigLoader";
import CarouselComponents from "@/components/CarouselComponents";
import { getLatestNews } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export interface itemsType {
  id: string;
  newsHeadline: string;
  newsFirstImage: string;
  newsSpotlightFirstImage: string;
  newsTeaser: string;
}
function TransfersPage() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getLatestNews"],
    queryFn: () => getLatestNews(),
  });

  const [newsArr, setNewsArr] = useState<itemsType[]>([]);

  useEffect(() => {
    if (data?.news) {
      const items = data.news.map((item) => ({
        id: item.id,
        newsHeadline: item.newsHeadline,
        newsFirstImage: item.newsFirstImage,
        newsSpotlightFirstImage: item.newsSpotlightFirstImage,
        newsTeaser: item.newsTeaser,
      }));
      setNewsArr(items);
    }
  }, [data]);

  if (error instanceof Error) return <p>Error loading achievements.</p>;
  if (isLoading) return <BigLoader />;
  if (!data || data.news.length === 0) return <BigLoader />;
  return (
    <div
      style={{
        background:
          "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
      }}
    >
      <CarouselComponents items={newsArr} />
    </div>
  );
}

export default TransfersPage;
