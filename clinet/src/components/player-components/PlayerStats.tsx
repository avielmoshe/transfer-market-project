import { CompetitionPerformanceSummary, getPlayerStats } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TbSoccerField } from "react-icons/tb";
import { IoIosFootball } from "react-icons/io";
import yellowCard from "../../assets/img/yellow.svg"

const PlayerStats = () => {
  const { id } = useParams<{ id?: string }>();
  const seasonId = "2024";

  // הפעלת ה-query תמיד, גם אם id חסר
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsFromTable", { id }],
    queryFn: () => (id ? getPlayerStats(Number(id), seasonId) : Promise.reject("Invalid player ID")),
    enabled: Boolean(id), // מבטיח שה-query לא יופעל אם id חסר
  });
  
  
  const [selectedLeague, setSelectedLeague] = useState<CompetitionPerformanceSummary | null>(
    data?.competitionPerformanceSummery?.[0] || null
  );
  
  const handleLeagueClick = (leagueId: string) => {
    if (data) {
      const league = data.competitionPerformanceSummery.find(
        (summary) => summary.competition.id === leagueId
      );
      setSelectedLeague(league || null);
    }
  };
  
  if (!id) {
    return <p className="text-red-500">Invalid player ID.</p>;
  }
  if (error) {
    console.error(error);
    return <p className="text-red-500">Failed to load data. Please try again later.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data available for the selected competition.</p>;
  }
  
  console.log(data);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Leagues</h1>
      <div className="flex gap-4 mb-8">
        {data.competitionPerformanceSummery.map((summary) => (
          <img
            key={summary.competition.id}
            src={summary.competition.image}
            alt={summary.competition.name}
            className="w-16 h-16 cursor-pointer"
            onClick={() => handleLeagueClick(summary.competition.id)}
          />
        ))}
      </div>

      {selectedLeague ? (
        <div className="p-4 border border-gray-300 rounded-md bg-white w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{selectedLeague.competition.name}</h2>
          <div className="flex justify-between">
            <div>
              <div className="flex text-[13px]">
                <div className="flex items-center gap-[5px] w-[170px]">
                  <div>
                  <TbSoccerField className=" text-[#00193f]" />
                  </div>
                  <div>
                  Appearances
                  </div>
                </div>
                <div>{selectedLeague.performance.matches}</div>
              </div>
              <hr className="my-[5px]"/>
              <div  className="flex text-[13px]">
              <div className="flex items-center gap-[5px] w-[170px]">
                <div><IoIosFootball className="text-[#00193f]"/></div>
                <div>Goals</div> 
              </div>
                <div>{selectedLeague.performance.goals}</div>
              </div>
              <hr className="my-[5px]"/>
              <div  className="flex text-[13px]">
              <div className="flex items-center gap-[5px] w-[170px]">
                <div><IoIosFootball className="text-[#4fad5f]"/></div>
                <div>Assists</div> 
              </div>
                <div>{selectedLeague.performance.goals}</div>
              </div>
            </div>
            <div>
            <div  className="flex text-[13px]">
              <div className="flex items-center gap-[5px] w-[170px]">
                <div><IoIosFootball className="text-[#4fad5f]"/></div>
                <div>Yellow Cards</div> 
              </div>
                <div>{selectedLeague.performance.yellowCards}</div>
              </div>
              <hr className="my-[5px]"/>
            <div  className="flex text-[13px]">
              <div className="flex items-center gap-[5px] w-[170px]">
                <div><IoIosFootball className="text-[#4fad5f]"/></div>
                <div>Second Yellows</div> 
              </div>
                <div>{selectedLeague.performance.yellowRedCards}</div>
              </div>
              <hr className="my-[5px]"/>
            <div  className="flex text-[13px]">
              <div className="flex items-center gap-[5px] w-[170px]">
                <div><img className="" src={yellowCard} alt=""/></div>
                <div>Red Cards</div> 
              </div>
                <div>{selectedLeague.performance.redCards}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Select a league to see details</p>
      )}
    </div>
  );
};

export default PlayerStats;
