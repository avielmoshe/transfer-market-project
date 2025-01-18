import { getMostValuableTeam } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MostValuableFeild from "../MostValubleFeild";

const MostValuableTeam = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["achievementsData"],
    queryFn: () => getMostValuableTeam(),
  });

  const [playerPositions, setPlayerPositions] = useState<
    { name: string; position: string }[]
  >([]);

  useEffect(() => {
    if (data) {
      const positions = data.players.map((player: any) => ({
          name: player.playerName,
          position: player.mainPosition,
          image: player.playerImage
      }));
      setPlayerPositions(positions);
    }
  }, [data]);

  if (error instanceof Error) return <p>Error loading.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;

  const mostData = data.players;
  console.log(playerPositions);
  return (
    <div className="p-[10px]">
      <h2 className="bg-[#00193f] text-white px-2 font-bold">{`Most Valuable Team`}</h2>
          <div className="flex justify-center p-[10px]">
              <MostValuableFeild playerPositions={playerPositions}/>
          </div>
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Name</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2] flex justify-center items-center">Player Image</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Club</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Club Image</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Position</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Value</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Age</th>
          </tr>
        </thead>
        <tbody>
          {mostData.map((player: any) => (
            <tr key={player.id}>
              <td className="border w-[150px] text-[13px]">
                <div className="flex items-center p-[5px] text-[#1d75a3] font-bold">
                  <Link to={`/clubProfile/${player.id}/overview/2024`}>
                    <div className="flex justify-end">{player.playerName}</div>
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-[100px]">
                <div className="flex p-[5px] gap-[15px] items-center justify-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src={player.playerImage}
                    alt="logoImage"
                  />
                </div>
              </td>
              <td className="border p-1 w-[150px]">
                <div>
                  <Link to={`/clubProfile/${player.clubID}/overview/2024`}>
                    <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">{player.clubName}</div>
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-13 text-[12px]">
                <div className="flex justify-center">
                  <img className="w-[30px] h-[35px]" src={player.clubImage} alt="logoImage" />
                </div>
              </td>
              <td className="border p-1 w-[170px] text-[12px]">
                <div className="flex justify-center">{player.mainPosition}</div>
              </td>
              <td className="border p-1 w-[170px] text-[12px]">
                <div className="flex justify-center">
                  {player.marketValue} mil {player.marketValueCurrency}
                </div>
              </td>
              <td className="border p-1 w-13 text-[12px]">
                <div className="flex justify-center">{player.age}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default MostValuableTeam;
