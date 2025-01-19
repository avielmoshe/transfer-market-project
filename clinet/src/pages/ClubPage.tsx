import DynamicHeader from "@/components/HeaderForProfile";
import NavSearch from "@/components/NavSearch";
import { DataForHeader, DataForNavSearch } from "@/types/types";
import {
  fetchDataOfOneClubProfile,
  fetchDataOfOneClubRow,
  fetchDataOfOneComRow,
} from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";

function ClubPage() {
  const navigate = useNavigate();
  const { clubId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOneClub", { clubId }],
    queryFn: () => fetchDataOfOneClubRow(clubId),
  });
  const { data: profileData } = useQuery({
    queryKey: ["dataOfClubProfile", { clubId }],
    queryFn: () => fetchDataOfOneClubProfile(clubId),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  if (!profileData) {
    return null;
  }

  const dataForHeader: DataForHeader = {
    type: "club",
    id: data.club.id,

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
    successesData: profileData.successes,
  };

  const dataOfNavSearch: DataForNavSearch = [
    {
      name: "OVERVIEW",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/overview/2024`);
      },
    },

    {
      name: "FIXTURES",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/fixtures/2024`);
      },
    },
    {
      name: "TRANSFERS & RUMOURS",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/transfersRumours/2024`);
      },
    },
    {
      name: "INFORMATION & FACTS",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/informationFacts/2024`);
      },
    },
    {
      name: "STADIUM",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/stadium/2024`);
      },
    },
    {
      name: "HISTORY",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/history/2024`);
      },
    },
    {
      name: "NEWS",
      onClick: () => {
        navigate(`/clubProfile/${clubId}/news/2024`);
      },
    },
  ];
  return (
    <>
      <DynamicHeader dataForHeader={dataForHeader} />
      <NavSearch dataOfNavSearch={dataOfNavSearch} />
      <Outlet />
    </>
  );
}

export default ClubPage;
