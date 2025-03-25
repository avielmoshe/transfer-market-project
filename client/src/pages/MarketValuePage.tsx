import MostValuableClubs from "@/components/nav-componensts/MostValuableClubs";
import MostValuableTeam from "@/components/nav-componensts/MostValuableTeam";

function MarketValuePage() {
  return <div  style={{
    background:
      "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
  }}>
    <MostValuableTeam/>
    <MostValuableClubs/>
  </div>;
}

export default MarketValuePage;
