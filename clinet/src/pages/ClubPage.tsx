import DynamicHeader from "@/components/HeaderForProfile";
import { DataForHeader, DataForNavSearch } from "@/types/types";
import {
  fetchDataOfOneClubProfile,
  fetchDataOfOneClubRow,
  fetchDataOfOneComRow,
} from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function ClubPage() {
  const { id } = useParams();
  console.log(id);

  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOneClub", { id }],
    queryFn: () => fetchDataOfOneClubRow(id),
  });
  const { data: profileData } = useQuery({
    queryKey: ["dataOfClubProfile", { id }],
    queryFn: () => fetchDataOfOneClubProfile(id),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  console.log(data);
  console.log(profileData);

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
    secondData: [
      { SquadSize: profileData.mainFacts.squadSize },
      { AverageAge: profileData.mainFacts.avgAge },
      { NationalTeamPlayers: profileData.mainFacts.nationalPlayer },
    ],
    thirdData: [
      { city: profileData.mainFacts.city },
      {
        Stadium:
          profileData.stadium.name +
          " " +
          profileData.stadium.totalCapacity +
          " Seats",
      },
      { founding: profileData.mainFacts.founding },
    ],
    successesData: [],
  };

  const dataForNavSearch: DataForNavSearch = ["", ""];
  return <>{<DynamicHeader dataForHeader={dataForHeader} />}</>;
}

export default ClubPage;
