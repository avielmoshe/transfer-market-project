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
    firstArray: [{}, {}, {}],
  };
  return (
    <>
      <DynamicHeader dataForHeader={dataForHeader} />
    </>
  );
}

export default CompetitionPage;
