import { fetchDataOfOneClubProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TrophyComForPage from "./TrophyComForPage";

function ClubInformationFacts() {
  const { clubId } = useParams();

  const { data: profileData } = useQuery({
    queryKey: ["dataOfClubProfile", { clubId }],
    queryFn: () => fetchDataOfOneClubProfile(clubId),
  });

  if (!profileData) {
    return null;
  }

  return (
    <div>
      <div className="min-h-[80px] bg-gray-100 p-4">
        {profileData.successes.map((success, index) => (
          <div
            key={index}
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 p-4 rounded-lg bg-white"
          >
            <TrophyComForPage successData={success} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubInformationFacts;
