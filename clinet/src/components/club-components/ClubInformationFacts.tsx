import { fetchDataOfOneClubProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import TrophyCom from "../TrophyCom";

function ClubInformationFacts() {
  const { clubId } = useParams();

  const { data: profileData } = useQuery({
    queryKey: ["dataOfClubProfile", { clubId }],
    queryFn: () => fetchDataOfOneClubProfile(clubId),
  });

  if (!profileData) {
    return null;
  }
  console.log(profileData.successes);

  return (
    <div>
      <div className="min-h-[80px] bg-white flex">
        {profileData.successes.map((success, index) => (
          <TrophyCom key={index} successData={success} />
        ))}
      </div>
    </div>
  );
}

export default ClubInformationFacts;
