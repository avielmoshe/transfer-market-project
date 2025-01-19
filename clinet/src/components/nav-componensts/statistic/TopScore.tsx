import { getTopScorer } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const TopScore = ({ type }: { type: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getTopScorer"],
    queryFn: () => getTopScorer(),
  });
  if (error instanceof Error) return <p>Error loading.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;
  const playerData =type === 'home' ?data.player.slice(0, 10) : data.player; 
  return (
    <div className={`p-[50px] ${type === "home"&& "w-[560px]"}`}>
                     <h2 className="bg-white text-[#00193f] mb-[7px] px-2 font-bold flex justify-center">
        Top Scorer
      </h2>
      {" "}
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border text-center text-[12px] bg-[#f2f2f2]">#</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Name
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2] flex justify-center items-center">
              Club
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Goals
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Matches
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Points
            </th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player , index) => (
            <tr key={player.id}>
              <td
                className="border w-[60px] text-[13px]" >
                <div className="flex justify-center items-center gap-[7px]">
                  <div className="flex justify-end text-[#00193f] font-bold">{index + 1}</div>
                </div>
              </td>
              <td className="border p-1 w-[170px] ">
                <div className="flex p-[5px] gap-[15px] items-center">
                  <img
                    className="w-[20px] h-[25px]"
                    src={player.playerImage}
                    alt="logoImage"
                  />
                  <Link to={`/PlayerProfile/${player.id}/profile`}>
                    <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">
                      {player.playerName}
                    </div>
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-[170px] ">
                <div className="flex p-[5px] gap-[15px] items-center">
                  <img
                    className="w-[20px] h-[25px]"
                    src={player.clubImage}
                    alt="logoImage"
                  />
                  <Link to={`/clubProfile/${player.clubID}/overview/2024`}>
                    <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">
                      {player.clubName}
                    </div>
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-[50px] text-[12px]">
                <div className="flex justify-center">{player.goals}</div>
              </td>
              <td className="border p-1 w-[50px] text-[12px]">
                <div className="flex justify-center">{player.matches}</div>
              </td>
              <td className="border p-1 w-[100px] text-[12px]">
                <div className="flex justify-center">{player.points}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopScore;
