import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransferMarketData } from "../utils/api";
import PlayerRow from "../components/PlayerRow";

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("query") || "";

  const { data, error, isLoading } = useQuery({
    queryKey: ["transferMarketData", { search }],
    queryFn: () => fetchTransferMarketData(search, "1"),
  });
  console.log(data);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;
  if (!data) {
    return null;
  }
  return (
    <div>
      <div>
        {data.players.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR PLAYERS  - ${data.count.players} HITS`}</h2>
            <table className="bg-white table-auto border-collapse w-full mb-4">
              <thead>
                <tr>
                  <th className="border p-2 text-center">Name/Club</th>
                  <th className="border p-2 text-center">Position</th>
                  <th className="border p-2 text-center">Club</th>
                  <th className="border p-2 text-center">Age</th>
                  <th className="border p-2 text-center">Nat</th>
                  <th className="border p-2 text-center">Market Value</th>
                  <th className="border p-2 text-center">Agents</th>
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
            {data.clubs.map((club) => (
              <div key={club.id}></div>
            ))}
          </div>
        ) : null}
      </div>

      <div>
        {data.competitions?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR COMPETITIONS - ${data.count.competitions} HITS`}</h2>

            {data.competitions.map((competition) => (
              <div key={competition.id}></div>
            ))}
          </div>
        ) : null}
      </div>

      <div>
        {data.coaches?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR COACHES - ${data.count.coaches} HITS`}</h2>
            {data.coaches.map((coach) => (
              <div key={coach.id}></div>
            ))}
          </div>
        ) : null}
      </div>

      <div>
        {data.referees?.length > 0 ? (
          <div>
            <h2 className="bg-[#00193f] text-white px-2 font-bold">{` SEARCH RESULTS FOR REFEREES- ${data.count.referees} HITS`}</h2>
            {data.referees.map((referee) => (
              <div key={referee.id}></div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SearchPage;
