import BestPlayet from "@/components/nav-componensts/statistic/BestPlayet";
import FifaRankings from "@/components/nav-componensts/statistic/FifaRankings";
import TopScore from "@/components/nav-componensts/statistic/TopScore";

function StatisticsPage() {
  return <div style={{
    background:
      "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
  }}>
    <TopScore type=""/>
    <BestPlayet type=""/>
    <FifaRankings type=""/>
  </div>;
}

export default StatisticsPage;
