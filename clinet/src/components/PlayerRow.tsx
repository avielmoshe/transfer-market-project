import { useQuery } from "@tanstack/react-query";
import { players } from "../types/types";
import { fetchDataOfOnePlayerForRow } from "../utils/api";

interface PlayerRowProp {
  player: players;
}

function PlayerRow({ player }: PlayerRowProp) {
  const playerId = player.id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOnePlayer", { playerId }],
    queryFn: () => fetchDataOfOnePlayerForRow(playerId),
  });

  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <tr>
      <td className="border p-1 flex">
        <img
          className="w-[28px] h-[36px]"
          src={player.playerImage}
          alt="playerImage"
        />
        <div className="ml-1 flex flex-col justify-center text-[12px] text-[#1d75a3]">
          <div className="font-bold">{player.playerName}</div>
          <div>{player.club}</div>
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">
        {data.playerProfile.playerSecondPosition}
      </td>
      <td className="border p-1 text-center ">
        <div className="flex justify-center">
          <img
            className="w-[20px] h-[20px] "
            src={data.playerProfile.clubImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">
        {data.playerProfile.age}
      </td>
      <td className="border p-1">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px] "
            src={player.nationImage}
            alt="nationImage"
          />
        </div>
      </td>
      <td className="border p-2 text-center text-[12px] font-bold text-[#57585a]">
        {data.playerProfile.marketValue
          ? data.playerProfile.marketValueCurrency +
            data.playerProfile.marketValue +
            data.playerProfile.marketValueNumeral
          : null}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
        {data.playerProfile.agent}
      </td>
    </tr>
  );
}

export default PlayerRow;
