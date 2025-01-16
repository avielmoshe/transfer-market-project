import { useParams } from "react-router-dom";
import { Params } from "../InputSeason";
import { useQuery } from "@tanstack/react-query";
import { getPlayerProfile } from "@/utils/api";

const PlayerProfile = () => {
  const { id } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfLiveTable", { id }],
    queryFn: () => getPlayerProfile(Number(id), "com"),
  });
  if (error) return null;
  if (!data) {
    return null;
  }

  console.log(data);

  return (
    <div>
      <h2 className="bg-[#00193f] text-white px-2 font-bold">PLAYER DATA</h2>
      <div>
        <div>
          <div>Full mane:</div>
          <div>{}</div>
        </div>
        <div>
          <div>Date of birth/Age:</div>
          <div></div>
        </div>
        <div>
          <div>Place of birth:</div>
          <div></div>
        </div>
        <div>
          <div>Height:</div>
          <div></div>
        </div>
        <div>
          <div>Citizenship:</div>
          <div></div>
        </div>
        <div>
          <div>Position:</div>
          <div></div>
        </div>
        <div>
          <div>Foot:</div>
          <div></div>
        </div>
        <div>
          <div>Player agent:</div>
          <div></div>
        </div>
        <div>
          <div>Current club:</div>
          <div></div>
        </div>
        <div>
          <div>Joined:</div>
          <div></div>
        </div>
        <div>
          <div>Contract expires:</div>
          <div></div>
        </div>
        <div>
          <div>Last contract extension:</div>
          <div></div>
        </div>
        <div>
          <div>Outfitter:</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
