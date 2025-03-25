import BigLoader from "@/components/BigLoader";
import { getBestPlayer } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const BestPlayet = ({ type }: { type: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getBestPlayer"],
    queryFn: () => getBestPlayer(),
  });
  if (error instanceof Error) return <p>Error loading.</p>;
  if (isLoading) return <BigLoader />;
  if (!data) return <p>No data found.</p>;
  const playerData = type === "home" ? data.player.slice(0, 10) : data.player;
  return (
    <div className={`p-[50px] ${type === "home" && "w-[500px]"}`}>
      <h2 className="bg-white text-[#00193f] mb-[7px] px-2 font-bold flex justify-center">
        Best Fifa Players By Years
      </h2>{" "}
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Name
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2] flex justify-center items-center">
              Club
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Country
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Year
            </th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((player, index) => (
            <tr key={index}>
              <td className="border p-1 w-[100px] ">
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
              <td className="border p-1 w-[100px] ">
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
              <td className="border p-1 w-[20px] ">
                <div className="flex p-[5px] gap-[15px] items-center justify-center">
                  <Link to={`/clubProfile/${player.countryID}/overview/2024`}>
                    <img
                      className="w-[35px] h-[25px] border"
                      src={player.countryImage}
                      alt="logoImage"
                    />
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-[50px] text-[12px]">
                <div className="flex justify-center text-[#00193f] font-bold">
                  {player.year}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BestPlayet;
