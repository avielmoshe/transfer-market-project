import { Params } from "@/components/InputSeason";

import { getMatchesbyClub } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import BigLoader from "../BigLoader";

const CompetitionMatches = () => {
  const { seasonId } = useParams<Params>();
  const { clubId } = useParams<Params>();

  const seasonIdInNum = Number(seasonId);

  const {
    data: gameListData,
    error: gameListError,
    isLoading: isGameListLoading,
  } = useQuery({
    queryKey: ["gameList", { clubId }],
    queryFn: () => getMatchesbyClub(clubId),
  });

  if (gameListError) return null;
  if (isGameListLoading) return <BigLoader />;

  if (!gameListData) {
    return null;
  }
  console.log(gameListData);

  return (
    <div className="mt-5">
      <h2 className="bg-[#00193f] text-white px-2 font-bold flex justify-center">
        {`All The Games For ${seasonIdInNum}`}
      </h2>
      {Object.entries(
        gameListData.playClubMatches.reduce((acc, match) => {
          if (!acc[match.competitionName]) {
            acc[match.competitionName] = [];
          }
          acc[match.competitionName].push(match);
          return acc;
        }, {})
      ).map(([competitionName, matches]) => (
        <div key={competitionName} className="mt-5">
          <h1 className="flex items-center gap-2 text-[20px] font-bold text-[#00193f]">
            <img
              src={matches[0].competitionImage}
              alt={`${competitionName} logo`}
              className="h-[30px]"
            />
            {competitionName}
          </h1>
          <table className="bg-white table-auto border-collapse w-full mb-4">
            <thead>
              <tr>
                <th className="border text-center text-[12px] bg-[#f2f2f2]">
                  Date
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Home team
                </th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
                <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                  Away team
                </th>
              </tr>
            </thead>
            <tbody>
              {matches.map((match) => (
                <tr key={match.id}>
                  <td className="border w-[200px] text-[13px]">
                    <div className="flex justify-center items-center gap-[7px] text-[#314f7c] font-bold">
                      {match.fullMatchDate}
                    </div>
                  </td>
                  <td className="border p-1 w-13 text-[12px]">
                    <div className="flex p-[5px] gap-[15px] items-center justify-end text-[#1d75a3] font-bold">
                      <Link
                        to={`/clubProfile/${match.homeClubID}/overview/2024`}
                      >
                        <div>{match.homeClubName}</div>
                      </Link>
                      <img
                        src={match.homeClubImage}
                        alt="homeClubImage"
                        className="h-[30px]"
                      />
                    </div>
                  </td>
                  <td className="border p-1 w-[100px] text-[15px]">
                    <div
                      className={`flex justify-center font-bold text-white py-[3px] ${
                        match.result === "-:-"
                          ? "text-[#333333] bg-[#CCCCCC] font-normal"
                          : "bg-[#1D75A3]"
                      }`}
                    >
                      {match.result === "-:-" ? match.matchTime : match.result}
                    </div>
                  </td>
                  <td className="border p-1 w-13 text-[12px]">
                    <div className="flex p-[5px] gap-[15px] items-center text-[#314b58] font-bold">
                      <img
                        src={match.awayClubImage}
                        alt="awayClubImage"
                        className="h-[30px]"
                      />
                      <Link to={`/clubProfile/${match.awayClubID}/overview`}>
                        <div>{match.awayClubName}</div>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CompetitionMatches;
