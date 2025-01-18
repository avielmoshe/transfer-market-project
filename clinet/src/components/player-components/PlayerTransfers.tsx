import { fetchDataOfTransferHistory } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Params, useParams } from "react-router-dom";
import TransferRow from "../TransferRow";
import TransferRowPlayer from "./TransferRowPlayer";

function PlayerTransfers() {
  const { id } = useParams<Params>();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfTransferHistory", { id }],
    queryFn: () => fetchDataOfTransferHistory(id),
    enabled: !!id,
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }
  console.log(data);

  return (
    <div>
      <div className=" mr-2 ml-1">
        <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR PLAYERS  -  HITS`}</h2>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Season
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Date
              </th>

              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Left
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Join
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Club Country
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Transfer Fee
              </th>

              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Loan/Transfer
              </th>
            </tr>
          </thead>
          <tbody>
            {data.transferHistory.map((transfer, i) => (
              <TransferRowPlayer key={i} transfer={transfer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PlayerTransfers;
