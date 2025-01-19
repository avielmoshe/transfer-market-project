import { useQuery } from "@tanstack/react-query";
import { competitions } from "../../types/types";

import { Link } from "react-router-dom";
import { fetchDataOfOneComRow } from "@/utils/api";
import BtnToggleFavorite from "../BtnToggleFavorite";

interface CompetitionRowProps {
  competition?: competitions;
  competitionID?: string;
}

function CompetitionRow({ competition, competitionID }: CompetitionRowProps) {
  let competitionId: string;
  if (competitionID) {
    competitionId = competitionID;
  } else {
    if (competition) {
      competitionId = competition.id;
    } else {
      return;
    }
  }
  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { competitionId }],
    queryFn: () => fetchDataOfOneComRow(competitionId),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }

  return (
    <tr>
      <td className="border p-1 w-10">
        <img
          className="w-[25px] h-[34px]"
          src={data.competition.competitionImage}
          alt="logoImage"
        />
      </td>
      <td className="border p-1 w-13 text-[12px] text-[#1d75a3]">
        <Link to={`/competitionProfile/${competitionId}/overview/2024`}>
          {data.competition.competitionName}
        </Link>
      </td>
      <td className="border p-1 text-center ">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10.6px] "
            src={data.competition.competitionCountryImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1  text-[12px] text-center text-[#1d75a3]">
        <Link
          to={`/playerProfile/${data.competition.mostValuablePlayerID}/profile`}
        >
          {data.competition.mostValuablePlayerName}
        </Link>
      </td>
      <td className="border p-1 flex justify-center">
        {data.competition.trophy ? (
          <img
            className="w-[25px] h-[34px]"
            src={data.competition.trophy}
            alt="logoImage"
          />
        ) : (
          "N/A"
        )}
      </td>
      <td className="border p-2 text-[12px] text-center">
        {data.competition.marketValueCurrency +
          data.competition.marketValue +
          data.competition.marketValueNumeral}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#57585a]">
        {competitionId}
      </td>
      {competitionID ? (
        <td className="border p-2 text-center text-[12px] w-[300px] ">
          <BtnToggleFavorite id={competitionID} type={"competition"} />
        </td>
      ) : null}
    </tr>
  );
}

export default CompetitionRow;
