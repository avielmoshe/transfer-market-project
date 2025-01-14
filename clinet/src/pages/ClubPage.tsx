import DynamicHeader from "@/components/HeaderForProfile";
import { DataForHeader } from "@/types/types";
import { fetchDataOfOneClubRow, fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ClubPage() {
  const { id } = useParams();
  console.log(id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOneClub", { id }],
    queryFn: () => fetchDataOfOneClubRow(id),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  console.log(data);

  const dataForHeader: DataForHeader = {
    type: "club",
    title: data.club.clubnameEN,
    frontImg: data.club.image,
    secondImg: data.club.leagueImage,
    secondTitle: data.club.leagueName,
    marketValue:
      data.club.marketValueCurrency +
      data.club.marketValue +
      data.club.marketValueNumeral,

    firstData: [
      {
        leagueLevel: data.club.leagueLevel,
      },
      {
        TablePosition: data.club.rank,
      },
      {
        coachName: data.club.coachName,
      },
    ],
    secondData: [],
    thirdData: [],
  };
  return <>{<DynamicHeader dataForHeader={dataForHeader} />}</>;
}

export default ClubPage;
