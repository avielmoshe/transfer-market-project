import { fetchDataOfOneClubProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const ClubHistory = () => {
  const { clubId } = useParams();

  const { data: profileData } = useQuery({
    queryKey: ["dataOfClubProfile", { clubId }],
    queryFn: () => fetchDataOfOneClubProfile(clubId),
  });
  if (!profileData) {
    return null;
  }
  console.log(profileData.historicImages);

  return (
    <div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold text-center">{` historic Club Images`}</h2>
      <div className="flex  justify-around">
        {profileData.historicImages.map((img) => (
          <img src={img} alt="historicImages" className="w-[150px] h-[180px]" />
        ))}
      </div>
    </div>
  );
};

export default ClubHistory;
