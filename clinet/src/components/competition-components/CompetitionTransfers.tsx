import { fetchDataOfTransfers } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Params, useParams } from "react-router-dom";
import TransferRow from "../TransferRow";
import BigLoader from "../BigLoader";

function CompetitionTransfers() {
  const { competitionId } = useParams<Params>();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfTransfers", { competitionId }],
    queryFn: () => fetchDataOfTransfers(competitionId),
    enabled: !!competitionId,
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
      <div className=" mr-2 ml-1">
        <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR PLAYERS  -  HITS`}</h2>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Name
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Date
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Nat
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                From
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                To
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Market Value
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Loan/Transfer
              </th>
            </tr>
          </thead>
          <tbody>
            {data.player.map((onePlayer) => (
              <TransferRow
                key={onePlayer.id}
                player={onePlayer}
                from="clubProfile"
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompetitionTransfers;
