import { getWorldRank } from '@/utils/homeApi';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const FifaRankings = ({ type }: { type: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['getWorldRank'],
    queryFn: () => getWorldRank(),
  });

  if (error instanceof Error) return <p>Error loading.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data found.</p>;

  const countryData = type === 'home' ? data.teams.slice(0, 10) : data.teams;

  return (
    <div className="p-[50px]">
      <h2 className="bg-white text-[#00193f] mb-[7px] px-2 font-bold flex justify-center">
        Fifa World Rankings
      </h2>
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">#</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Country</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Confederation</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Total Points</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map((country) => (
            <tr key={country.id}>
              <td className="border p-1 w-[15px]">
                <div className="flex p-[5px] gap-[15px] items-center justify-center">
                  <div className="ml-2 text-[12px] text-[#00193f] font-bold">
                    {country.rank}
                  </div>
                </div>
              </td>
              <td className="border p-1 w-[50px]">
                <div className="flex p-[5px] gap-[15px] items-center">
                  <img
                    className="w-[35px] h-[22px] border"
                    src={country.countryImage}
                    alt="logoImage"
                  />
                  <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">
                    {country.countryName}
                  </div>
                </div>
              </td>
              <td className="border p-1 w-[10px]">
                <div className="flex p-[5px] gap-[15px] items-center text-[14px] text-[#00193f] font-bold">
                  {country.confederation}
                </div>
              </td>
              <td className="border p-1 w-[50px] text-[12px]">
                <div className="flex justify-center text-[#00193f] font-bold">
                  {country.totalPoints}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FifaRankings;
