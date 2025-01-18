import { CompetitionPerformanceSummary, getPlayerStats } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { TbSoccerField } from "react-icons/tb";
import { IoIosFootball } from "react-icons/io";
import yellowCard from "../../assets/img/yellowCard.svg";
import redYellowCard from "../../assets/img/yellowRedCard.svg";
import redCard from "../../assets/img/redCard.svg";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const PlayerStats = () => {
  const { id } = useParams<{ id?: string }>();
  const seasonId = "2024";

  // הפעלת ה-query תמיד, גם אם id חסר
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsFromTable", { id }],
    queryFn: () =>
      id
        ? getPlayerStats(Number(id), seasonId)
        : Promise.reject("Invalid player ID"),
    enabled: Boolean(id), // מבטיח שה-query לא יופעל אם id חסר
  });

  const [selectedLeague, setSelectedLeague] =
    useState<CompetitionPerformanceSummary | null>(
      data?.competitionPerformanceSummery?.[0] || null
    );

  const [percentMinutes, setPercentMinutes] = useState(
    Math.round(
      100 *
        ((selectedLeague?.performance.minutesPlayed ?? 0) /
          90 /
          Number(selectedLeague?.performance.matches))
    )
  );
  const [percentGoalPerMatch, setPercentPercentGoalPerMatch] = useState(
    Number(selectedLeague?.performance.goals) === 0 || !selectedLeague?.performance.matches
      ? 0
      : Math.round(
          100 * (Number(selectedLeague?.performance.goals) / Number(selectedLeague?.performance.matches))
        )
  );

  const handleLeagueClick = (leagueId: string) => {
    if (data) {
      const league = data.competitionPerformanceSummery.find(
        (summary) => summary.competition.id === leagueId
      );
      if (league) {
        setSelectedLeague(league);
  
        const percentMinutes = Math.round(
          100 *
            ((league.performance.minutesPlayed ?? 0) /
              90 /
              Number(league.performance.matches))
        );
        setPercentMinutes(percentMinutes);

  
        const percentGoalPerMatch = Math.round(
          Number(league.performance.goals) === 0 ||
          !league.performance.matches
            ? 0
            : 100 * (Number(league.performance.goals) / Number(league.performance.matches))
        );
        setPercentPercentGoalPerMatch(percentGoalPerMatch);
      }
    }
  };
  
  
  
  if (!id) {
    return <p className="text-red-500">Invalid player ID.</p>;
  }
  if (error) {
    console.error(error);
    return (
      <p className="text-red-500">
        Failed to load data. Please try again later.
      </p>
    );
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!data) {
    return <p>No data available for the selected competition.</p>;
  }
  console.log(data);
  return (
    <div className="flex flex-col items-center p-[10px]">
      <div className="flex flex-col items-center bg-[#cccc] p-5 border border-gray-300 w-[600px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-4 mb-8 w-[400px]">
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
          <h2 className="text-xl font-bold mb-2 text-[rgb(92,166,255)]">
              {selectedLeague?.competition.name}
            </h2>
        </div>
        {selectedLeague ? (
          <div className="p-3 border border-gray-300 rounded-md bg-white w-full max-w-md">

            <div className="flex justify-between">
              <div>
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <TbSoccerField className=" text-[#00193f]" />
                    </div>
                    <div>Appearances</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.matches}
                  </div>
                </div>
                <hr className="my-[5px]" />
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <IoIosFootball className="text-[#00193f]" />
                    </div>
                    <div>Goals</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.goals}
                  </div>
                </div>
                <hr className="my-[5px]" />
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <IoIosFootball className="text-[#4fad5f]" />
                    </div>
                    <div>Assists</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.goals}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <img
                        src={yellowCard}
                        alt="yellowCard"
                        className="w-[12px] h-[20px]"
                      />
                    </div>
                    <div>Yellow Cards</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.yellowCards}
                  </div>
                </div>
                <hr className="my-[5px]" />
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <img
                        src={redYellowCard}
                        alt="redYellowCard"
                        className="w-[12px] h-[20px]"
                      />
                    </div>
                    <div>Second Yellows</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.yellowRedCards}
                  </div>
                </div>
                <hr className="my-[5px]" />
                <div className="flex text-[13px]">
                  <div className="flex items-center gap-[5px] w-[170px]">
                    <div>
                      <img
                        src={redCard}
                        alt="redCard"
                        className="w-[12px] h-[20px]"
                      />
                    </div>
                    <div>Red Cards</div>
                  </div>
                  <div className="text-[rgb(92,166,255)] font-bold">
                    {selectedLeague.performance.redCards}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-[30px] gap-[10px] justify-around">
              <div className="flex items-center  gap-[5px]">
                {" "}
                <div className="w-[60px]">
                <CircularProgressbar
                    value={percentMinutes}
                    text={`${percentMinutes}%`}
                    styles={buildStyles({
                      textColor: "#00193f", // צבע הטקסט
                      pathColor: "#00193f", // צבע המעגל
                      trailColor: "#d6d6d6", // צבע השביל
                      textSize: "20px",
                    })}
                  />
              </div>
                <div className="text-[13px]  text-[#00193f]">Minutes</div>
              </div>
                    <div className="flex items-center gap-[5px] ">
                    <div className="w-[60px]">
                      <CircularProgressbar
                          value={percentGoalPerMatch}
                          text={`${percentGoalPerMatch}%`}
                          styles={buildStyles({
                            textColor: "#00193f", // צבע הטקסט
                            pathColor: "#00193f", // צבע המעגל
                            trailColor: "#d6d6d6", // צבע השביל
                            textSize: "20px",
                          })}
                        />
                    </div>
                      <div className="text-[13px]  text-[#00193f] ">Goal Per Match</div>
                    </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a league to see details</p>
        )}
      </div>
    </div>
  );
};

export default PlayerStats;
