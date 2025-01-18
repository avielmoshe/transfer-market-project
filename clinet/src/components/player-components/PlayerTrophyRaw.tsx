import { Achievement } from "@/types/types";
import { fetchDataOfOneClubProfile, fetchDataOfOneClubRow, fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

interface PlayerTrophyRawProps {
  trophy: Achievement;
}

const PlayerTrophyRaw = ({ trophy }: PlayerTrophyRawProps) => {
  const compId = trophy.additionalData[0].competitionID;
  const clubId = trophy.additionalData[0].clubID;

  const { data: competitionData, error: competitionError } = useQuery({
    queryKey: ["DataOfOneCom", compId],
    queryFn: () => fetchDataOfOneComRow(compId),
  });

  const { data: clubData, error: clubError } = useQuery({
    queryKey: ["DataOfOneClub", clubId],
    queryFn: () => fetchDataOfOneClubRow(clubId),
  });

  if (competitionError instanceof Error || clubError instanceof Error) {
    return <p>Error loading data.</p>;
  }

  if (!competitionData || !clubData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex gap-[10px] p-[10px]">
      <div className="flex justify-center items-center">
          <img className="h-[100px]" src={competitionData.competition.trophy} alt="" />
      </div>
        <hr className=" bg-black"/>
      <div >
        <div>
          {trophy.additionalData.map((data, index) => (
            <div key={index} className="flex items-center gap-[7px] text-[14px] p-[1px]">
              <div>{data.seasonID}</div>
              <div><img src={clubData.club.image} alt=""  className="h-[30px]"/></div>
              <Link to={`/clubProfile/${clubId}/overview/2024`}><div>{clubData.club.name}</div></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlayerTrophyRaw;
