import MostValuableFeild from "@/components/MostValubleFeild";
import MostTenValuableClubs from "@/components/nav-componensts/MostTenValubleClubs";
import MostValuableTeam from "@/components/nav-componensts/MostValuableTeam";

const HomePage = () => {
  return <div style={{
    background:
      "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
  }}>
    <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row">
      <div className="w-[600px]"><MostValuableTeam/></div>
      <div><MostTenValuableClubs/></div>
    </div>
  </div>;
};

export default HomePage;
