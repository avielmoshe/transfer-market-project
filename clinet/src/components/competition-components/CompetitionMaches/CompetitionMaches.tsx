import { Params } from "@/components/InputSeason";
import { getGamePlan, getListGamePlan } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface GamePlanPlayDay {
  id: string;
  name: string;
  description: string;
  dateString: string;
}

const findClosestPlayDay = (
  playDays: GamePlanPlayDay[],
  today: Date
): string => {
  const todayTime = today.getTime();
  console.log(todayTime);
  

  const parsedPlayDays = playDays.map((playDay) => {
    const [start, end] = playDay.dateString
      .split(" - ")
      .map((date) => new Date(date.trim()));
    return { ...playDay, start, end };
  });
  console.log(parsedPlayDays);
  

  const exactMatch = parsedPlayDays.find(
    (playDay) =>
      todayTime >= playDay.start.getTime() && todayTime <= playDay.end.getTime()
  );
  if (exactMatch) return exactMatch.id;

  const closestMatch = parsedPlayDays.reduce((prev, curr) => {
    const prevDistance = Math.abs(todayTime - prev.start.getTime());
    const currDistance = Math.abs(todayTime - curr.start.getTime());
    return currDistance < prevDistance ? curr : prev;
  });

  return closestMatch.id;
};

const CompetitionMatches = () => {
  const { id } = useParams<Params>();
  const { seasonId } = useParams<Params>();

  const [selectedPlayDayId, setSelectedPlayDayId] = useState<string>("");
  const [gameDate, setGameDate] = useState<string>("");

  const {
    data: gamePlanData,
    error: gamePlanError,
    isLoading: isGamePlanLoading,
  } = useQuery({
    queryKey: ["gamePlan", { id, seasonId }],
    queryFn: () => getGamePlan(id, seasonId),
  });

  const {
    data: gameListData,
    error: gameListError,
    isLoading: isGameListLoading,
  } = useQuery({
    queryKey: ["gameList", { id, seasonId, gameDate }],
    queryFn: () => getListGamePlan(seasonId, id, gameDate, "com"),
    enabled: Boolean(selectedPlayDayId),
  });

  useEffect(() => {
    if (gamePlanData?.gamePlanPlayDays) {
      const today = new Date();
      const closestId = findClosestPlayDay(gamePlanData.gamePlanPlayDays, today);
      setSelectedPlayDayId(closestId);
      setGameDate(closestId);  // עדכן את gameDate באותו ID של פליידי
    }
  }, [gamePlanData]);

  if (isGamePlanLoading || isGameListLoading) return <p>Loading...</p>;
  if (gamePlanError || gameListError) return <p>Error loading data</p>;

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonValue = e.currentTarget.innerText.toLowerCase();
    const playDayId = parseInt(selectedPlayDayId, 10); // קרא את ה-ID באופן תקני
    if (buttonValue === "last matchday") {
      setGameDate((playDayId - 1).toString()); // הקטנה של היום הנבחר
    } else if (buttonValue === "current matchday") {
      setGameDate(playDayId.toString()); // הצגת המשחק הנוכחי
    } else if (buttonValue === "next matchday") {
      setGameDate((playDayId + 1).toString()); // הגדלת היום הנבחר
    }
  }
  console.log(gameDate);
  

  return (
    <div>
      <div className="flex justify-center gap-[25px]">
        <button
          className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 
          ${gameDate === selectedPlayDayId
            ? "bg-[#00193f]"
            : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"}`}
          onClick={handleOnClick}
        >
          Last matchday
        </button>
        <button
          className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 
          ${gameDate === selectedPlayDayId
            ? "bg-[#00193f]"
            : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"}`}
          onClick={handleOnClick}
        >
          Current matchday
        </button>
        <button
          className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 
          ${gameDate === selectedPlayDayId
            ? "bg-[#00193f]"
            : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"}`}
          onClick={handleOnClick}
        >
          Next matchday
        </button>
      </div>
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border text-center text-[12px] bg-[#f2f2f2]">
              Date
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Home team
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Away team
            </th>
          </tr>
        </thead>
        <tbody>
          {gameListData?.playDayMatches.map((match) => (
            <tr key={match.awayClubID}>
              <td className="border w-[200px] text-[13px]">
                <div className="flex justify-center items-center gap-[7px] text-[#314f7c] font-bold">
                  {match.fullMatchDate}
                </div>
              </td>
              <td className="border p-1 w-13 text-[12px] ">
                <div className="flex p-[5px] gap-[15px] items-center justify-end text-[#1d75a3] font-bold">
                  <Link to={`/clubProfile/${match.homeClubID}/overview`}>
                    <div>{match.homeClubName}</div>
                  </Link>
                  <img
                    src={match.homeClubImage}
                    alt="homeClubImage"
                    className="h-[30px]"
                  />
                </div>
              </td>
              <td className="border p-1 w-[100px] text-[15px]">
                <div
                  className={`flex justify-center font-bold text-white py-[3px] ${
                    match.result === "-:-"
                      ? "text-[#333333] bg-[#CCCCCC] font-normal"
                      : "bg-[#1D75A3]"
                  }`}
                >
                  {match.result === "-:-" ? match.matchTime : match.result}
                </div>
              </td>
              <td className="border p-1 w-13 text-[12px]">
                <div className="flex p-[5px] gap-[15px] items-center text-[#314b58] font-bold">
                  <img
                    src={match.awayClubImage}
                    alt="awayClubImage"
                    className="h-[30px]"
                  />
                  <Link to={`/clubProfile/${match.awayClubID}/overview`}>
                    <div>{match.awayClubName}</div>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompetitionMatches;

