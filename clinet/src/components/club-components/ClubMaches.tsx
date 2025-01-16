import { Params } from "@/components/InputSeason";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import {
  fetchDataOfOneComRow,
  getGamePlan,
  getListGamePlan,
} from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface GamePlanPlayDay {
  id: string;
  name: string;
  description: string;
  dateString: string;
}
interface CompetitionMatchesProps {
  competition?: string;
}
const CompetitionMatches = ({ competition }: CompetitionMatchesProps) => {
  const { seasonId } = useParams<Params>();

  const seasonIdInNum = Number(seasonId);
  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { competition }],
    queryFn: () => fetchDataOfOneComRow(competition),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  const currentMatchDay = data.competition.currentMatchDay;
  const competitionName = data.competition.competitionName;
  const [gameDate, setGameDate] = useState<number>(currentMatchDay);

  const {
    data: gameListData,
    error: gameListError,
    isLoading: isGameListLoading,
  } = useQuery({
    queryKey: ["gameList", { competition, seasonIdInNum, gameDate }],
    queryFn: () => getListGamePlan(seasonIdInNum, competition, gameDate, "com"),
  });

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonValue = e.currentTarget.getAttribute("data-action"); // Use a data attribute

    if (buttonValue === "previous") {
      setGameDate(gameDate - 1); // Decrease the selected matchday
    } else if (buttonValue === "current") {
      setGameDate(currentMatchDay); // Show the current matchday
    } else if (buttonValue === "next") {
      setGameDate(gameDate + 1); // Increase the selected matchday
    }
  }

  if (gameListError) return null;
  if (!gameListData) {
    return null;
  }
  return (
    <div>
      <div className="flex justify-center gap-[30px]">
        <button
          className={`py-[3px] px-[15px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 bg-[rgb(92,166,255)] hover:bg-[#00193f]`}
          data-action="previous"
          onClick={handleOnClick}
        >
          <IoMdArrowRoundBack className="text-[22px]" />
        </button>
        <button
          className={`py-[3px] px-[40px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 
          ${
            gameDate === currentMatchDay
              ? "bg-[#00193f]"
              : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"
          }`}
          data-action="current"
          onClick={handleOnClick}
        >
          Current matchday
        </button>
        <button
          className={`py-[3px] px-[15px] text-white my-[7px] rounded-sm 
          transition-colors duration-200 bg-[rgb(92,166,255)] hover:bg-[#00193f] `}
          data-action="next"
          onClick={handleOnClick}
        >
          <IoMdArrowRoundForward className="text-[22px]" />
        </button>
      </div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold flex justify-center">{`Round number ${gameDate} in ${competitionName}`}</h2>
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
                  <Link to={`/clubProfile/${match.homeClubID}/overview/2024`}>
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
