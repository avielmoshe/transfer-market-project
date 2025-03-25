import { getPlayerProfile } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import BigLoader from "../BigLoader";

const PlayerNationalTeam = () => {
  const { id } = useParams<{ id?: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["playerData", { id }],
    queryFn: () => getPlayerProfile(Number(id)),
  });

  if (error instanceof Error) return <p>Error loading achievements.</p>;
  if (isLoading) return <BigLoader />;

  if (!data) return <p>No achievements data found.</p>;

  const nationalDate = data.playerProfile;

  return (
    <div className=" p-[10px]">
      <h2 className="bg-[#00193f] text-white px-2 font-bold ">National Team</h2>
      <div className="flex  justify-between border border-black">
        <div className="flex flex-col gap-[15px] justify-center p-[10px]">
          <div className="flex gap-[13px] items-center ">
            <div className="text-[#00193f] font-bold">Country:</div>
            <div>{nationalDate.country}</div>
          </div>
          <div className="flex gap-[13px] items-center ">
            <div className="text-[#00193f] font-bold">Country Short Name:</div>
            <div>{nationalDate.countryShortName}</div>
          </div>

          <div className="flex gap-[20px] items-center">
            <div className="text-[#00193f] font-bold">Country Image:</div>
            <div className="">
              {" "}
              <img
                src={nationalDate.countryImage}
                alt=""
                className="h-[25px] w-[30px]"
              />
            </div>
          </div>
          <div className="flex gap-[13px] items-center">
            <div className="text-[#00193f] font-bold">International Games:</div>
            <div>{nationalDate.internationalGames}</div>
          </div>
          <div className="flex gap-[13px]">
            <div className="text-[#00193f] font-bold">International Goals:</div>
            <div>{nationalDate.internationalGoals}</div>
          </div>
          <div className="flex gap-[13px] items-center">
            <div className="text-[#00193f] font-bold">
              International Shirt Number:
            </div>
            <div>{nationalDate.internationalShirtNumber}</div>
          </div>
          <div className="flex gap-[13px] items-center">
            <div className="text-[#00193f] font-bold">
              International Team Status:
            </div>
            <div>{nationalDate.internationalTeamStatus}</div>
          </div>
          <div className="flex gap-[13px] items-center">
            <div className="text-[#00193f] font-bold">
              International Value Rank:
            </div>
            <div>{nationalDate.internationalValueRank}</div>
          </div>
        </div>
        <img
          src={nationalDate.internationalTeamImage}
          alt=""
          className="w-[50%] h-[90%]"
        />
      </div>
    </div>
  );
};

export default PlayerNationalTeam;
