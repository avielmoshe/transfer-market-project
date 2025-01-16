import { Params, useParams } from "react-router-dom";

const ClubFixtures = () => {
  const { id } = useParams<Params>();
  const { seasonId } = useParams<Params>();
  if (!id) {
    throw new Error("ID is required");
  }
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfSquadFromClub", { id, seasonId }],
    queryFn: () => fetchDataOfSquadFromClub(id, seasonId),
    enabled: !!id,
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }
  return <div>ClubFixtures</div>;
};

export default ClubFixtures;
