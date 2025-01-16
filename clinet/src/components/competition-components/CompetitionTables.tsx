import { fetchLiveTable } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Params } from "../InputSeason";
import { TbSoccerField } from "react-icons/tb";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";
import { FaSquare } from "react-icons/fa";
import { useState } from "react";
import CompetitionMatches from "./CompetitionMaches/CompetitionMaches";
interface CompetitionTablesProps {
  competition?: string;
}
function CompetitionTables({ competition }: CompetitionTablesProps) {
  const { seasonId } = useParams<Params>();
  let competition_Id;
  const { competitionId } = useParams<Params>();
  if (!competitionId) {
    competition_Id = competition;
  } else {
    competition_Id = competitionId;
  }

  const [homeAway, setHomeAway] = useState<string | undefined>("");
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfLiveTable", { competition_Id, seasonId, homeAway }],
    queryFn: () => fetchLiveTable(competition_Id, seasonId, "com", homeAway),
  });
  if (error) return null;
  if (!data) {
    return null;
  }
  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonValue = e.currentTarget.innerText.toLowerCase();
    setHomeAway(buttonValue === "all" ? "" : buttonValue);
  }

  return (
    <div>
      {" "}
      <div>
        <h2 className="bg-[#00193f] text-white px-2 font-bold">{`TABLE - ${seasonId}`}</h2>
        <div className="flex justify-center gap-[25px]">
          <button
            className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
      transition-colors duration-200 
      ${
        homeAway === ""
          ? "bg-[#00193f]"
          : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"
      }`}
            onClick={handleOnClick}
          >
            All
          </button>
          <button
            className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
      transition-colors duration-200 
      ${
        homeAway === "home"
          ? "bg-[#00193f]"
          : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"
      }`}
            onClick={handleOnClick}
          >
            Home
          </button>
          <button
            className={`py-[3px] px-[10px] text-white my-[7px] rounded-sm 
      transition-colors duration-200 
      ${
        homeAway === "away"
          ? "bg-[#00193f]"
          : "bg-[rgb(92,166,255)] hover:bg-[#00193f]"
      }`}
            onClick={handleOnClick}
          >
            Away
          </button>
        </div>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className="border text-center text-[12px] bg-[#f2f2f2]">#</th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Club
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2] flex justify-center items-center">
                <TbSoccerField className="text-[#147da3] text-[20px]" />
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                W
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                D
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                L
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Goals
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                +/-
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Pts
              </th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((club) => (
              <tr key={club.id}>
                <td
                  className="border w-[70px] text-[13px]"
                  style={{ backgroundColor: club.markColor }}
                >
                  <div className="flex justify-center items-center gap-[7px]">
                    <div className="flex justify-end">{club.rank}</div>
                  </div>
                </td>
                <td className="border p-1 w-[300px] ">
                  <div className="flex p-[5px] gap-[15px] items-center">
                    <img
                      className="w-[20px] h-[25px]"
                      src={club.clubImage}
                      alt="logoImage"
                    />
                    <Link to={`/clubProfile/${club.id}/overview/2024`}>
                      <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">
                        {club.clubName}
                      </div>
                    </Link>
                  </div>
                </td>
                <td className="border p-1 w-13 text-[12px]">
                  <div className="flex justify-center">{club.matches}</div>
                </td>
                <td className="border p-1 w-13 text-[12px]">
                  <div className="flex justify-center">{club.wins}</div>
                </td>
                <td className="border p-1 w-13 text-[12px]">
                  <div className="flex justify-center">{club.draw}</div>
                </td>
                <td className="border p-1 w-13 text-[12px]">
                  <div className="flex justify-center">{club.losses}</div>
                </td>
                <td className="border p-1 w-13 text-[12px]">
                  <div className="flex justify-center">{club.goals}</div>
                </td>
                <td className="border p-1 text-right text-[12px] ">
                  <div className="flex justify-center">
                    {club.goalDifference}
                  </div>
                </td>
                <td className="border p-1 text-right text-[12px]">
                  <div className="flex justify-center">{club.points}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompetitionTables;
