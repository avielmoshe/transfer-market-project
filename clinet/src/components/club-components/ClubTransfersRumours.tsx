import { fetchDataOfClubsTransfers } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Params, useParams } from "react-router-dom";
import TransferTable from "./TransferTable ";
import BigLoader from "../BigLoader";

const ClubTransfersRumours = () => {
  const { clubId } = useParams<Params>();
  const { seasonId } = useParams<Params>();

  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfClubsTransfers", { clubId, seasonId }],
    queryFn: () => fetchDataOfClubsTransfers(clubId, seasonId),
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
  console.log(data.currentSeason);

  return (
    <div>
      <TransferTable currentSeason={data.currentSeason} />
    </div>
  );
};

export default ClubTransfersRumours;
