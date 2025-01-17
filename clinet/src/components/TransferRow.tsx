import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatNumber } from "@/utils/function.service";
import { MdLocalHospital } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import { players, PlayerTransfer } from "@/types/types";
import { fetchDataOfTransferHistory } from "@/utils/api";

interface TransferRowProp {
  player: PlayerTransfer;
  from?: string;
}

function TransferRow({ player, from }: TransferRowProp) {
  const playerId = player.playerID;

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfTransferHistory", { playerId }],
    queryFn: () => fetchDataOfTransferHistory(playerId),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  const transferHistory = data.transferHistory[0];
  console.log(transferHistory.loan);

  return (
    <tr>
      <td className="border p-1 flex">
        <img
          className="w-[28px] h-[36px]"
          src={transferHistory.playerImage}
          alt="playerImage"
        />
        <div className="ml-1 flex flex-col justify-center text-[12px] text-[#1d75a3]">
          <Link to={`/playerProfile/${playerId}/profile`}>
            <div className="font-bold">{transferHistory.playerName}</div>
          </Link>
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">
        {transferHistory.date}
      </td>
      <td className="border p-1 text-center text-[12px]">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px] "
            src={transferHistory.countryImage}
            alt="nationImage"
          />
        </div>
      </td>

      <td className="border p-1">
        <Link to={`/clubProfile/${transferHistory.oldClubID}/overview/2024`}>
          <div className="flex gap-3 items-center">
            <img
              className="w-[25x] h-[30px] "
              src={transferHistory.oldClubImage}
              alt="oldClubImage"
            />
            <div>{transferHistory.oldClubName}</div>
          </div>
        </Link>
      </td>
      <td className="border p-1">
        <Link to={`/clubProfile/${transferHistory.newClubID}/overview/2024`}>
          <div className="flex gap-3 items-center">
            <img
              className="w-[25x] h-[30px]"
              src={transferHistory.newClubImage}
              alt="newClubImage"
            />
            <div>{transferHistory.newClubName}</div>
          </div>
        </Link>
      </td>
      <td className="border p-2 text-center text-[12px] font-bold text-[#57585a]">
        {formatNumber(player.transferMarketValue.value)}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
        {transferHistory.loan ? "Loan" : "Transfer"}
      </td>
    </tr>
  );
}

export default TransferRow;
