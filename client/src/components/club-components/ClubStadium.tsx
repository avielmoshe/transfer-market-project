import { fetchDataOfOneClubProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BigLoader from "../BigLoader";

const ClubStadium = () => {
  const { clubId } = useParams();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["dataOfClubProfile", { clubId }],
    queryFn: () => fetchDataOfOneClubProfile(clubId),
  });
  if (isLoading) return <BigLoader />;

  if (!profileData) {
    return null;
  }
  const stadium = profileData.stadium;

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-200">
      <img
        src={stadium.image}
        alt={stadium.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800">{stadium.name}</h1>
        <p className="text-gray-600 mt-2">{stadium.city}</p>
        <p className="text-gray-600">
          Year of Construction: {stadium.constructionYear}
        </p>
        <p className="text-gray-600">Seats: {stadium.seats}</p>
        <p className="text-gray-600">Total Capacity: {stadium.totalCapacity}</p>
        <p className="text-gray-600">Address: {stadium.street}</p>
        {stadium.phoneTicketCenter && (
          <p className="text-gray-600">Phone: {stadium.phoneTicketCenter}</p>
        )}
        {stadium.homepage && (
          <a
            href={`https://${stadium.homepage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 block"
          >
            Visit Homepage
          </a>
        )}
      </div>
    </div>
  );
};

export default ClubStadium;
