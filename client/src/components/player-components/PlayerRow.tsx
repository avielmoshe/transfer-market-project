import { useQuery } from "@tanstack/react-query";
import { players } from "../../types/types";
import { fetchDataOfOnePlayerForRow } from "../../utils/api";
import { Link } from "react-router-dom";
import { formatNumber } from "@/utils/function.service";
import { MdLocalHospital } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import BtnToggleFavorite from "../BtnToggleFavorite";
import SmallLoader from "../SmallLoader";

interface PlayerRowProp {
  player?: players;
  from?: string;
  playerID?: string;
}

function PlayerRow({ player, from, playerID }: PlayerRowProp) {
  let playerId: string;
  if (playerID) {
    playerId = playerID;
  } else {
    if (player) {
      playerId = player.id;
    } else {
      return;
    }
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOnePlayer", { playerId }],
    queryFn: () => fetchDataOfOnePlayerForRow(playerId),
  });

  if (error instanceof Error) return null;
  if (isLoading) {
    return <SmallLoader />;
  }
  if (!data) {
    return null;
  }

  return (
    <tr>
      <td className="border p-1 flex">
        <img
          className="w-[28px] h-[36px]"
          src={data.playerProfile.playerImage}
          alt="playerImage"
        />
        <div className="ml-1 flex flex-col justify-center text-[12px] text-[#1d75a3]">
          <Link to={`/playerProfile/${playerId}/profile`}>
            <div className="font-bold">{data.playerProfile.playerName}</div>
          </Link>

          <Link to={`/clubProfile/${data.playerProfile.clubID}/overview/2024`}>
            <div>{data.playerProfile.club}</div>
          </Link>
        </div>
        {from === "clubProfile" ? (
          player?.captain ? (
            <div className="flex items-center ml-2">
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="https://as2.ftcdn.net/jpg/04/72/99/01/1000_F_472990172_yXu0lx3MKpVJ5qy84yCcGi0Gr56IsKbF.jpg"
                    alt=""
                    className="w-[20px] h-[15px]"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="text-[12px] p-2 bg-black text-white">
                  Captain
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : null
        ) : null}
        {from === "clubProfile" ? (
          player?.suspension ? (
            <div className="flex items-center ml-2">
              <HoverCard>
                <HoverCardTrigger>
                  <img
                    src="https://www.iconpacks.net/icons/1/free-red-card-icon-460-thumb.png"
                    alt=""
                    className="w-[40px] h-[30px]"
                  />
                </HoverCardTrigger>
                <HoverCardContent className="text-[12px] p-2 bg-black text-white">
                  RED CARD
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : null
        ) : null}
        {from === "clubProfile" ? (
          player?.injury ? (
            <div className="flex items-center ml-2">
              <HoverCard>
                <HoverCardTrigger>
                  <MdLocalHospital className="text-red-800 text-[20px]" />
                </HoverCardTrigger>
                <HoverCardContent className="text-[12px] p-2 bg-black text-white">
                  {`${player.injury.description} Return time ${
                    player.injury.until ? player.injury.until : "Unknown"
                  }`}
                </HoverCardContent>
              </HoverCard>
            </div>
          ) : null
        ) : null}
      </td>
      <td className="border p-1 text-center text-[12px]">
        {data.playerProfile.playerMainPosition}
      </td>
      {from === "clubProfile" ? null : (
        <td className="border p-1 text-center ">
          <div className="flex justify-center">
            <img
              className="w-[27px] h-[30px] "
              src={data.playerProfile.clubImage}
              alt="clubImage"
            />
          </div>
        </td>
      )}
      <td className="border p-1 text-center text-[12px]">
        {data.playerProfile.age}
      </td>
      <td className="border p-1">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px] "
            src={data.playerProfile.countryImage}
            alt="nationImage"
          />
        </div>
      </td>
      <td className="border p-2 text-center text-[12px] font-bold text-[#57585a]">
        {from === "clubProfile" && player
          ? formatNumber(player.marketValue.value)
          : data.playerProfile.marketValue > 0
          ? data.playerProfile.marketValueCurrency +
            data.playerProfile.marketValue +
            data.playerProfile.marketValueNumeral
          : "--"}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
        {data.playerProfile.agent}
      </td>
      {playerID ? (
        <td className="border p-2 text-center text-[12px] w-[300px]">
          <BtnToggleFavorite id={playerID} type={"player"} />
        </td>
      ) : null}
    </tr>
  );
}

export default PlayerRow;
