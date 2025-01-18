import { useQuery } from "@tanstack/react-query";
import ClubRow from "../club-components/ClubRow";
import { fetchDataOfClubsFromTable } from "@/utils/api";
import { useParams } from "react-router-dom";
import InputSeason from "../InputSeason";

function CompetitionClubs() {
  const { competitionId, seasonId } = useParams<{
    competitionId: string;
    seasonId: string;
  }>();

  if (!competitionId) {
    return <p className="text-red-500">Error: Competition ID is required.</p>;
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsFromTable", { competitionId, seasonId }],
    queryFn: () => fetchDataOfClubsFromTable(competitionId, seasonId),
  });

  if (error) {
    console.error(error);
    return (
      <p className="text-red-500">
        Failed to load data. Please try again later.
      </p>
    );
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available for the selected competition.</p>;
  }

  const competitionName = data.share.title;
  const removeAfterDash = (input: string): string => {
    const index = input.indexOf("-");
    return index !== -1 ? input.slice(0, index).trim() : input.trim();
  };
  const cleanedTitle = removeAfterDash(competitionName);

  const tableHeaderStyle = "border p-2 text-center text-[12px] bg-[#f2f2f2]";

  return (
    <div>
      <InputSeason category={"overview"} profile="competitionProfile" />
      <div>
        <h2 className="bg-[#00193f] text-white px-2 font-bold">{`Clubs - ${cleanedTitle} ${seasonId}`}</h2>
        <table className="bg-white table-auto border-collapse w-full mb-4">
          <thead>
            <tr>
              <th className={tableHeaderStyle}></th>
              <th className={tableHeaderStyle}>Club</th>
              <th className={tableHeaderStyle}>Country</th>
              <th className={tableHeaderStyle}>Total Market Value</th>
              <th className={tableHeaderStyle}>Transfers</th>
              <th className={tableHeaderStyle}>Stadium</th>
              <th className={tableHeaderStyle}>Forum</th>
            </tr>
          </thead>
          <tbody>
            {data.table.map((club: { id: string }) => (
              <ClubRow key={club.id} clubId={club.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompetitionClubs;
