import CarouselComponents from "@/components/CarouselComponents";
import MostValuableFeild from "@/components/MostValubleFeild";
import MostTenValuableClubs from "@/components/nav-componensts/MostTenValubleClubs";
import MostValuableTeam from "@/components/nav-componensts/MostValuableTeam";
import BestPlayet from "@/components/nav-componensts/statistic/BestPlayet";
import FifaRankings from "@/components/nav-componensts/statistic/FifaRankings";
import TopScore from "@/components/nav-componensts/statistic/TopScore";
import { getLatestNews } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
export interface itemsType {
  id: string;newsHeadline: 
  string; 
  newsFirstImage: string;
  newsSpotlightFirstImage: string;
  newsTeaser: string;
}
const HomePage = () => {
  const { data, error } = useQuery({
    queryKey: ["getLatestNews"],
    queryFn: () => getLatestNews(),
  });

  console.log(data);
  
  const [newsArr , setNewsArr] = useState<itemsType[]>([]);

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
  if (!data || data.news.length === 0) return <p>No news available.</p>;

  return <div className="flex flex-col" style={{
    background:
      "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
  }}>
    <div className="flex flex-col p-[15px]">
    <h2 className="bg-white text-[20px] text-[#00193f] px-2 font-bold flex justify-center">
    Spotlight
      </h2>
      <CarouselComponents items={newsArr}/>
    </div>
    <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
      <div className="w-[600px]"><MostValuableTeam/></div>
      <div>
        <div><MostTenValuableClubs/></div>
        <div>
          <FifaRankings type = {"home"}/>
          </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
      <div><TopScore type = {"home"}/></div>
      <div><BestPlayet type = {"home"}/></div>
    </div>
 
  </div>;
};

export default HomePage;
