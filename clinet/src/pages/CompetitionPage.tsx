import DynamicHeader from "@/components/HeaderForProfile";
import { fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function CompetitionPage() {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { id }],
    queryFn: () => fetchDataOfOneComRow(id),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  console.log(data);
  const dataForHeader = {
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
  return (
    <>
      <DynamicHeader dataForHeader={dataForHeader} />
    </>
  );
}

export default CompetitionPage;
