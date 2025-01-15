import { useQuery } from "@tanstack/react-query";
import ClubRow from "../club-components/ClubRow";
import { fetchDataOfClubsFromTable } from "@/utils/api";
import { Navigate, Params, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import CompetitionLiveTableRow from "./CompetitionLiveRow";
import InputSeason from "../InputSeason";
import CompetitionTables from "./CompetitionTables";


const CompetitionOverview = () => {
  const { id } = useParams<Params>();
  const { seasonId } = useParams<Params>();
  if (!id) {
    throw new Error("ID is required");
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsFromTable", { id, seasonId: seasonId }],
    queryFn: () => fetchDataOfClubsFromTable(id,seasonId ),
    enabled: !!id,
  });
  

  if (error) {
    console.error(error);
    return null;
  }

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }


  const competitionName = data.share.title;
  const removeAfterDash = (input: string): string => {
    const index = input.indexOf("-");
    return index !== -1 ? input.slice(0, index).trim() : input.trim();
  };
  const cleanedTitle = removeAfterDash(competitionName);





  return (
    <div>
     <InputSeason category={"overview"}/>

      <div>
        <h2 className="bg-[#00193f] text-white px-2 font-bold">{`Clubs - ${cleanedTitle} ${seasonId}`}</h2>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
              <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                Club
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
                Forum
              </th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((club) => (
              <ClubRow key={club.id} clubId={club.id}  />
            ))}
          </tbody>
        </table>
      </div>
    <CompetitionTables/>
    </div>
  );
};

export default CompetitionOverview;
