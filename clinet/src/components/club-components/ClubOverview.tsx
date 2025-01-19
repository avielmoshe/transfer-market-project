import { Params, useParams } from "react-router-dom";
import PlayerRow from "../player-components/PlayerRow";
import { useQuery } from "@tanstack/react-query";
import { fetchDataOfSquadFromClub } from "@/utils/api";
import InputSeason from "../InputSeason";
import BigLoader from "../BigLoader";

const ClubOverview = () => {
  const { clubId } = useParams<Params>();
  const { seasonId } = useParams<Params>();
  if (!clubId) {
    throw new Error("ID is required");
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfSquadFromClub", { clubId, seasonId }],
    queryFn: () => fetchDataOfSquadFromClub(clubId, seasonId),
    enabled: !!clubId,
  });

  if (error) {
    console.error(error);
    return null;
  }
  if (isLoading) return <BigLoader />;

  if (!data) {
    return null;
  }

  return (
    <div>
      <InputSeason category={"overview"} profile={"clubProfile"} />
      <div className=" mr-2 ml-1">
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
              <PlayerRow key={player.id} player={player} from={"clubProfile"} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClubOverview;
