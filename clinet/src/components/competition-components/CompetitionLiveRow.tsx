import { useQuery } from "@tanstack/react-query";
import { clubs } from "../../types/types";
import { fetchDataOfOneClubRow, fetchLiveTable } from "../../utils/api";
import { MdStadium } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";

interface CompetitionLiveTableRow {
  clubId:string|undefined ;
  seasonId:string|undefined ;
}

function CompetitionLiveTableRow({ clubId , seasonId }: CompetitionLiveTableRow) {
  
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfLiveTable", { clubId, seasonId }],
    queryFn: () => fetchLiveTable(clubId , seasonId),
  });

  console.log(data);
  

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }

  return (
    <tr>
      <td className="border p-1 w-10">
        <img
          className="w-[25px] h-[34px]"
          src={data.club.image}   alt="logoImage"
        />
      </td>
      <td className="border p-1 w-13 text-[12px]">
        <div className="ml-1  text-[12px] text-[#1d75a3]">
          <Link to={`/clubProfile/${clubId}/overview`}>
            <div className="font-bold">{data.club.name}</div>
          </Link>
          <Link to={`/competitionProfile/${data.club.leagueID}/overview`}>
            <div>{data.club.clubnameEN}</div>
          </Link>
        </div>
      </td>
      <td className="border p-1 text-center ">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10.6px] "
            src={data.club.countryImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1 text-right text-[12px]">
        {data.club.marketValue > "0"
          ? data.club.marketValueCurrency +
            data.club.marketValue +
            data.club.marketValueNumeral
          : "--"}
      </td>
      <td className="border p-1">
        <BiTransfer className="text-[29px]" />
      </td>
      <td className="border p-2 flex justify-center  font-bold text-[#57585a]">
        <MdStadium className="text-[29px] " />
      </td>
      <td className="border p-2 text-center text-[12px] text-[#57585a]">{}</td>
    </tr>
  );
}

export default CompetitionLiveTableRow;
