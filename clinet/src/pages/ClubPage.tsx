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
  const { id } = useParams();

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
  if (!profileData) {
    return null;
  }

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
    successesData: profileData.successes,
  };

  const dataOfNavSearch: DataForNavSearch = [
    {
      name: "OVERVIEW",
      onClick: () => {
        navigate(`/clubProfile/${id}/overview`);
      },
    },
    {
      name: "SQUAD",
      onClick: () => {
        navigate(`/clubProfile/${id}/squad`);
      },
    },
    {
      name: "FIXTURES",
      onClick: () => {
        navigate(`/clubProfile/${id}/fixtures`);
      },
    },
    {
      name: "TRANSFERS & RUMOURS",
      onClick: () => {
        navigate(`/clubProfile/${id}/transfersRumours`);
      },
    },
    {
      name: "INFORMATION & FACTS",
      onClick: () => {
        navigate(`/clubProfile/${id}/informationFacts`);
      },
    },
    {
      name: "STADIUM",
      onClick: () => {
        navigate(`/clubProfile/${id}/stadium`);
      },
    },
    {
      name: "HISTORY",
      onClick: () => {
        navigate(`/clubProfile/${id}/history`);
      },
    },
    {
      name: "NEWS",
      onClick: () => {
        navigate(`/clubProfile/${id}/news`);
      },
    },
    {
      name: "FORUM",
      onClick: () => {
        navigate(`/clubProfile/${id}/forum`);
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
