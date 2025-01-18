import { Achievement, Achievements } from "@/types/types";
import { fetchDataOfOnePlayerAchievements } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PlayerTrophyRaw from "./PlayerTrophyRaw";

const PlayerAchievements = () => {
  const { id } = useParams<{ id?: string }>();

  const { data: achievementsData, error: errAchievementsData } = useQuery({
    queryKey: ["achievementsData", { id }],
    queryFn: () => fetchDataOfOnePlayerAchievements(id),
  });

  if (errAchievementsData instanceof Error) return <p>Error loading achievements.</p>;
  if (!achievementsData) return <p>No achievements data found.</p>;

  const successesData: Achievement[] = achievementsData.playerAchievements;

  return (
    <div className="grid grid-cols-2 gap-[10px] p-[10px]">
      {successesData.map((trophy, index) => (
        <div key={index} className="border border-black">
          <div className="">
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{trophy.title}</h2>
            <div className="">
              <PlayerTrophyRaw trophy = {trophy}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerAchievements;