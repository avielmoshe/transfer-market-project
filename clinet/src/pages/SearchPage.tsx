import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransferMarketData } from "../utils/api";
import PlayerRow from "../components/player-components/PlayerRow.tsx";
import ClubRow from "../components/club-components/ClubRow.tsx";
import CompetitionRow from "@/components/competition-components/CompetitionRow";
import CoachRow from "../components/CoachRow";
import RefereeRow from "../components/RefereeRow";
import Pagination from "@/components/Pagination";
import PaginationCard from "@/components/PaginationCard";
import { count } from "@/types/types";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("query") || "";
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useQuery({
    queryKey: ["transferMarketData", { search, page }],
    queryFn: () => fetchTransferMarketData(search, page.toString()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data) {
    return null;
  }

  function getTotalPages(data: count) {
    const maxCount = Math.max(...Object.values(data));
    const totalPages = Math.ceil(maxCount / 10);
    return totalPages;
  }

  const totalPages = getTotalPages(data.count);
  

  return (
    <div>
      <div>
        {data.players?.length > 0 ? (
          <div className=" mr-2 ml-1">
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR PLAYERS  - ${data.count.players} HITS`}</h2>
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
                </tr>
              </thead>
              <tbody>
                {data.players.map((player) => (
                  <PlayerRow key={player.id} player={player} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {data.clubs?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR CLUBS - ${data.count.clubs} HITS`}</h2>
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
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    forum
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.clubs.map((club) => (
                  <ClubRow key={club.id} club={club} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {data.competitions?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR COMPETITIONS - ${data.count.competitions} HITS`}</h2>
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
                {data.competitions.map((competition) => (
                  <CompetitionRow
                    key={competition.id}
                    competition={competition}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {data.coaches?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS MANAGERS & OFFICIALS - ${data.count.coaches} HITS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Name
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Club
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Age
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Nat.
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Function{" "}
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Contract until
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.coaches.map((coach) => (
                  <CoachRow key={coach.id} coach={coach} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>

      <div>
        {data.referees?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR REFEREES- ${data.count.referees} HITS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Name
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Residence
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Age
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    Nat.
                  </th>
                  <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
                    FIFA referee.
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.referees.map((referee) => (
                  <RefereeRow key={referee.id} referee={referee} />
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
      <PaginationCard page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default SearchPage;
