import ClubRow from "@/components/club-components/ClubRow";
import CoachRow from "@/components/CoachRow";
import CompetitionRow from "@/components/competition-components/CompetitionRow";
import PaginationCard from "@/components/PaginationCard";
import PlayerRow from "@/components/player-components/PlayerRow";
import RefereeRow from "@/components/RefereeRow";
import { useAuth } from "@/providers/auth-provider";
import { getUser } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

function FavoritePage() {
  const { userId } = useParams<{ userId?: string }>();
  const { setUser, user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center flex flex-col items-center">
        ERROR 404: ONLY SIGNUP/LOGIN USER CAN SEE THE FAVORITE PAGE
        <button className="mt-3 bg-[rgb(92,166,255)] flex items-center justify-center gap-[5px] rounded-[4px] p-[7px] w-[150px] hover:bg-[#00193f] ">
          <div>
            <FaUser className="text-white" />
          </div>
          <Link to={"/login"}>
            <div className="text-white text-[10px]">LOG IN NOW</div>
          </Link>
        </button>
      </div>
    );
  }
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  // Handle loading and error states
  if (isLoading) {
    return <div>Loading...</div>; // Show loading spinner or placeholder
  }

  if (error) {
    return <div>Error loading data. Please try again.</div>;
  }
  const favoritesArrays = data.user;
  console.log(favoritesArrays);
  console.log(favoritesArrays.savedPlayers.length);

  return (
    <div>
      <div>
        {favoritesArrays.savedPlayers.length > 0 ? (
          <div className=" mr-2 ml-1">
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` YOUR FAVORITE PLAYERS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Name/Club
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Position
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Club
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Age
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Nat
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Market Value
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Agents
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
                </tr>
              </thead>
              <tbody>
                {favoritesArrays.savedPlayers.map((playerId: string) => (
                  <PlayerRow key={playerId} playerID={playerId} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {favoritesArrays.savedClubs.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{`YOUR FAVORITE CLUBS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    club
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Country
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Total Market Value
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Transfers
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Stadium
                  </th>
                </tr>
              </thead>
              <tbody>
                {favoritesArrays.savedClubs.map((clubId: string) => (
                  <ClubRow key={clubId} clubId={clubId} type={"favorite"} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {favoritesArrays.savedLiga.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{`YOUR FAVORITE COMPETITIONS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]"></th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Competition
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Country
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Most Valuable Player
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Trophy
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Total Market Value
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Initials
                  </th>
                </tr>
              </thead>
              <tbody>
                {favoritesArrays.savedLiga.map((competitionId: string) => (
                  <CompetitionRow
                    key={competitionId}
                    competitionID={competitionId}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default FavoritePage;
