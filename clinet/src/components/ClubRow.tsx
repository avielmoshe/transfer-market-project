import { useQuery } from "@tanstack/react-query";
import { clubs } from "../types/types";
import { fetchDataOfOneClubRow } from "../utils/api";
import { MdStadium } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ClubRowProps {
  club: clubs;
}

function ClubRow({ club }: ClubRowProps) {
  const clubId = club.id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOneClub", { clubId }],
    queryFn: () => fetchDataOfOneClubRow(clubId),
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
          src={club.logoImage}
          alt="logoImage"
        />
      </td>
      <td className="border p-1 w-13 text-[12px]">
        <div className="ml-1  text-[12px] text-[#1d75a3]">
          <Link to={`/clubProfile/${club.id}/overview`}>
            <div className="font-bold">{club.name}</div>
          </Link>
          <Link to={`/competitionProfile/${club.competitionID}/overview`}>
            <div>{club.competitionName}</div>
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

export default ClubRow;
