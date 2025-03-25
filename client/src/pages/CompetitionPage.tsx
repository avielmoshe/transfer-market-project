import DynamicHeader from "@/components/HeaderForProfile";
import { DataForHeader, DataForNavSearch } from "@/types/types";
import { fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NavSearch from "../components/NavSearch";
import BigLoader from "@/components/BigLoader";

function CompetitionPage() {
  const navigate = useNavigate();
  const { competitionId } = useParams();
  const { category } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { competitionId }],
    queryFn: () => fetchDataOfOneComRow(competitionId),
  });

  if (error instanceof Error) return null;
  if (isLoading) return <BigLoader />;

  if (!data) {
    return null;
  }
  const dataForHeader: DataForHeader = {
    type: "competition",
    id: data.competition.id,
    title: data.competition.competitionName,
    frontImg: data.competition.competitionImage,
    secondImg: data.competition.competitionCountryImage,
    secondTitle: data.competition.competitionCountryName,
    marketValue:
      data.competition.marketValueCurrency +
      data.competition.marketValue +
      data.competition.marketValueNumeral,
    firstData: [
      { leagueLevel: data.competition.leagueLevel },
      { currentChampionName: data.competition.currentChampionName },
      { currentMatchDay: data.competition.currentMatchDay },
      { Initials: data.competition.id },
    ],
    secondData: [
      { season: data.competition.season },
      {
        mostValuableClub:
          data.competition.mostValuableClubName +
          " " +
          data.competition.mostValuableClubMarketValueCurrency +
          data.competition.mostValuableClubMarketValue +
          data.competition.mostValuableClubMarketValueNumeral,
      },
      {
        mostValuablePlayer:
          data.competition.mostValuablePlayerName +
          " " +
          data.competition.mostValuableClubMarketValueCurrency +
          data.competition.mostValuablePlayerMarketValue +
          data.competition.mostValuablePlayerMarketValueNumeral,
      },
    ],
    thirdData: [{ trophy: data.competition.trophy }],
  };
  const dataOfNavSearch: DataForNavSearch = [
    {
      name: "OVERVIEW",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/overview/2024`);
      },
    },
    {
      name: "TABLES",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/tables/2024`);
      },
    },
    {
      name: "TRANSFERS",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/transfers/2024`);
      },
    },

    {
      name: "PLAYERS",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/players/2024`);
      },
    },
    {
      name: "CLUBS",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/clubs/2024`);
      },
    },
    {
      name: "INFORMATION & FACTS",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/informationFacts/2024`);
      },
    },
    {
      name: "HISTORY",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/history/2024`);
      },
    },
    {
      name: "NEWS",
      onClick: () => {
        navigate(`/competitionProfile/${competitionId}/news/2024`);
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

export default CompetitionPage;
