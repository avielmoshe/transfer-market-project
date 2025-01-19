import { getMostValuableClub } from "@/utils/homeApi";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const MostTenValuableClubs = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["playerTenData"],
    queryFn: () => getMostValuableClub(),
  });
  console.log(data);
  if (error) return <p>Error loading data.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data || !data.teams || data.teams.length === 0)
    return <p>No data available.</p>;

  const mostData = data.teams;
  const top10Clubs = mostData.slice(0, 10);

  return (
    <div className="p-[50px] flex flex-col gap-[10px]" >
      <h2 className="bg-white text-[#00193f] px-2 font-bold flex justify-center">
        Most Valuable Clubs
      </h2>
      <table className="bg-white table-auto border-collapse w-full mb-4 ">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Number</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Club Name</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Club Image</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Country</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Country Image</th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">Value</th>
          </tr>
        </thead>
        <tbody>
          {top10Clubs.map((club) => (
            <tr key={club.id}>
              <td className="border w-[150px] text-[13px]">
                <div className="flex items-center justify-center p-[5px] text-[#1d75a3] font-bold">
                  <div className="flex justify-center">{club.number}</div>
                </div>
              </td>
              <td className="border w-[150px] text-[13px]">
                <div className="flex items-center p-[5px] text-[#1d75a3] font-bold">
                  <Link to={`/clubProfile/${club.id}/overview/2024`}>
                    <div className="flex justify-end">{club.clubName}</div>
                  </Link>
                </div>
              </td>
              <td className="border p-1 w-[100px]">
                <div className="flex p-[5px] gap-[15px] items-center justify-center">
                  <img
                    className="w-[40px] h-[40px]"
                    src={club.clubImage}
                    alt="Club Logo"
                  />
                </div>
              </td>
              <td className="border p-1 w-[150px]">
                <div>
                  <div className="ml-2 text-[12px] text-[#1d75a3] font-bold">
                    {club.countryName}
                  </div>
                </div>
              </td>
              <td className="border p-1 w-13 text-[12px]">
                <div className="flex justify-center">
                  <img
                    className="w-[35px] h-[20px] border border-black"
                    src={club.countryImage}
                    alt="Country Flag"
                  />
                </div>
              </td>
              <td className="border p-1 w-[170px] text-[12px]">
                <div className="flex justify-center">
                  {club.marketValue} {club.marketValueNumeral}
                  {club.marketValueCurrency}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
    </div>
  );
};

export default MostTenValuableClubs;