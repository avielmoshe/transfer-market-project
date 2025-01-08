import { useQuery } from "@tanstack/react-query";
import { clubs, competitions } from "../types/types";
import { fetchDataOfOneClubRow, fetchDataOfOneComRow } from "../utils/api";
import { MdStadium } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";

interface CompetitionRowProps {
  competition: competitions;
}

function CompetitionRow({ competition }: CompetitionRowProps) {
  const competitionId = competition.id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { competitionId }],
    queryFn: () => fetchDataOfOneComRow(competitionId),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  console.log(data);

  return (
    <tr>
      <td className="border p-1 w-10">
        <img
          className="w-[25px] h-[34px]"
          src={competition.competitionImage}
          alt="logoImage"
        />
      </td>
      <td className="border p-1 w-13 text-[12px] text-[#1d75a3]">
        {competition.competitionName}
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
      <td className="border p-1  text-[12px] text-center">
        {data.competition.mostValuablePlayerName}
      </td>
      <td className="border p-1 flex justify-center">
        <img
          className="w-[25px] h-[34px]"
          src={data.competition.trophy}
          alt="logoImage"
        />
      </td>
      <td className="border p-2 text-[12px] text-center">
        {data.competition.marketValueCurrency +
          data.competition.marketValue +
          data.competition.marketValueNumeral}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#57585a]">
        {competition.id}
      </td>
    </tr>
  );
}

export default CompetitionRow;
