import { getPlayerProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const PlayerNationalTeam = () => {
  const { id } = useParams<{ id?: string }>();
  const { data, error } = useQuery({
    queryKey: ["achievementsData", { id }],
    queryFn: () => getPlayerProfile(Number(id)),
  });

  if (error instanceof Error) return <p>Error loading achievements.</p>;
  if (!data) return <p>No achievements data found.</p>;
console.log(data);

const nationalDate = data.playerProfile

  return <div className=" p-[10px]">
     <h2 className="bg-[#00193f] text-white px-2 font-bold ">National Team</h2>
     <div className="flex justify-between  border border-black">
       <div className="flex flex-col gap-[15px] justify-center p-[10px]">
        <div className="flex gap-[13px] items-center">
          <div className="text-[#00193f] font-bold">Country:</div>
          <div>{nationalDate.country}</div>
        </div>
        <div className="flex gap-[13px] items-center">
          <div className="text-[#00193f] font-bold">International Games:</div>
          <div>{nationalDate.internationalGames}</div>
        </div>
        <div className="flex gap-[13px]">
           <div className="text-[#00193f] font-bold">International Goals:</div>
           <div>{nationalDate.internationalGoals}</div>
        </div>
        <div className="flex gap-[13px] items-center">
           <div className="text-[#00193f] font-bold">International Shirt Number:</div>
           <div>{nationalDate.internationalShirtNumber}</div>
        </div>
       </div>
        <img src={nationalDate.internationalTeamImage} alt="" className="w-[55%]"/>
     </div>
  </div>;
};

export default PlayerNationalTeam;
