import { useQuery } from "@tanstack/react-query";
import ClubRow from "../club-components/ClubRow";
import { fetchDataOfClubsFromCom } from "@/utils/api";
import { useParams } from "react-router-dom";
import { log } from "console";

const CompetitionOverview = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["transferMarketClubsData", { id }],
    queryFn: () => fetchDataOfClubsFromCom(id),
  });
  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div>
      <div>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                club
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Country
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Total Market Value
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Transfers
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Stadium
              </th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                forum
              </th>
            </tr>
          </thead>
          <tbody>
            {data.clubs.map((club) => (
              <ClubRow key={club.id} club={club} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompetitionOverview;
