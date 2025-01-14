import DynamicHeader from "@/components/HeaderForProfile";
import { DataForHeader, DataForNavSearch } from "@/types/types";
import { fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import NavSearch from "../components/NavSearch"


function CompetitionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { category } = useParams();
  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { id }],
    queryFn: () => fetchDataOfOneComRow(id),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  const dataForHeader: DataForHeader = {
    type: "competition",
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
  const dataOfNavSearch : DataForNavSearch = [
    { name: "OVERVIEW", onClick: () => { navigate(`/competitionProfile/${id}/overview`); }},
    { name: "TABLES", onClick: () => { navigate(`/competitionProfile/${id}/tables`); }},
    { name: "TRANSFERS", onClick: () => { navigate(`/competitionProfile/${id}/transfers`); }},
    { name: "MARKET VALUES", onClick: () => { navigate(`/competitionProfile/${id}/marketValues`); }},
    { name: "PLAYERS", onClick: () => { navigate(`/competitionProfile/${id}/players`); }},
    { name: "CLUBS", onClick: () => { navigate(`/competitionProfile/${id}/clubs`); }},
    { name: "INFORMATION & FACTS", onClick: () => { navigate(`/competitionProfile/${id}/informationFacts`); }},
    { name: "HISTORY", onClick: () => { navigate(`/competitionProfile/${id}/history`); }},
    { name: "NEWS", onClick: () => { navigate(`/competitionProfile/${id}/news`); }},
  ];
  
  console.log(category);
  
  return (
    <>
      <DynamicHeader dataForHeader={dataForHeader} />
      <NavSearch dataOfNavSearch={dataOfNavSearch}/>
      <Outlet/>
 </>
  );
}

export default CompetitionPage;
