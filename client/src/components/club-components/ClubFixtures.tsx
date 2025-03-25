import { Params, useParams } from "react-router-dom";
import CompetitionTables from "../competition-components/CompetitionTables";
import InputSeason from "../InputSeason";
import { useQuery } from "@tanstack/react-query";
import { fetchDataOfOneClubRow } from "@/utils/api";
import CompetitionMatches from "./ClubMaches";
import BigLoader from "../BigLoader";

const ClubFixtures = () => {
  const { clubId } = useParams<Params>();
  if (!clubId) {
    throw new Error("ID is required");
  }
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfSquadFromClub", { clubId }],
    queryFn: () => fetchDataOfOneClubRow(clubId),
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
      <InputSeason category={"fixtures"} profile={"clubProfile"} />

      <CompetitionTables competition={data.club.leagueID} />
      <CompetitionMatches />
    </div>
  );
};

export default ClubFixtures;
