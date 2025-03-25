import { useQuery } from "@tanstack/react-query";
import { clubs } from "../../types/types";
import { fetchDataOfOneClubRow, fetchLiveTable } from "../../utils/api";
import { MdStadium } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";

interface TableRow {
  id: string; // Assuming each row has a unique identifier
  name: string; // Example property for club or entity name
  country: string; // Country name or code
  totalMarketValue: number; // Numeric value for market value
  transfers: number; // Number of transfers
  stadium: string; // Name of the stadium
  forum: string; // Link or identifier for forum
}

interface TableData {
  table: TableRow[];
}

function CompetitionLiveTableRow() {
  return (
    <tr>
      <td className="border p-1 w-10">
        <img
          className="w-[25px] h-[34px]"
          src={data.club.image}
          alt="logoImage"
        />
      </td>
      <td className="border p-1 w-13 text-[12px]">
        <div className="ml-1  text-[12px] text-[#1d75a3]">
          <Link to={`/clubProfile/${clubId}/overview/2024`}>
            <div className="font-bold">{data.club.name}</div>
          </Link>
          <Link to={`/competitionProfile/${data.club.leagueID}/overview/2024`}>
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
