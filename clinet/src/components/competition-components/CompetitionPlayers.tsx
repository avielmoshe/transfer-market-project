import { Params, useParams } from "react-router-dom";
import PlayerRow from "../player-components/PlayerRow";
import { useQuery } from "@tanstack/react-query";
import { fetchDataOfSquadFromClub } from "@/utils/api";
import InputSeason from "../InputSeason";
import InputClubs from "./InputClubs";
import { useState } from "react";
import SmallLoader from "../SmallLoader";

const CompetitionPlayers = () => {
  const { seasonId } = useParams<Params>();
  const [clubId, setClubId] = useState<string | undefined>(undefined);

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfSquadFromClub", { clubId, seasonId }],
    queryFn: () => fetchDataOfSquadFromClub(clubId, seasonId),
    enabled: !!clubId, // Ensure the query only runs when clubId is defined
  });

  if (error) {
    return (
      <p className="text-red-500">
        An error occurred while fetching the squad data. Please try again later.
      </p>
    );
  }

  return (
    <div>
      <InputSeason category="players" profile="competitionProfile" />
      <InputClubs
        category="players"
        profile="competitionProfile"
        setClubId={setClubId}
        clubId={clubId || ""}
      />
      {isLoading && <p>Loading squad data...</p>}
      {!data && !isLoading && <SmallLoader />}
      {data && (
        <div className="mr-2 ml-1">
          <h2 className="bg-[#00193f] text-white px-2 font-bold">{` Squad Detailed`}</h2>
          <table className="bg-white table-auto border-collapse w-full mb-4">
            <thead>
              <tr>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Name/Club
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Position
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Age
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Nat
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Market Value
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Agents
                </th>
              </tr>
            </thead>
            <tbody>
              {data.squad.map((player) => (
                <PlayerRow key={player.id} player={player} from="clubProfile" />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompetitionPlayers;
