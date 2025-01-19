import { fetchDataOfSquadFromClub } from "@/utils/api";
import { Params, useParams } from "react-router-dom";
import InputSeason from "../InputSeason";
import { useQuery } from "@tanstack/react-query";
import BigLoader from "../BigLoader";

const ClubSquad = () => {
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
    </div>
  );
};

export default ClubSquad;
