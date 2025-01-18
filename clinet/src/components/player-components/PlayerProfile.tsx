import { useParams } from "react-router-dom";
import { Params } from "../InputSeason";
import { useQuery } from "@tanstack/react-query";
import { getPlayerProfile } from "@/utils/api";
import FootballField from "../FootballFeild";
import PlayerStats from "./PlayerStats";

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
  const rowCss = "flex gap-[25px] text-[15px] mb-[15px]";
  const categoryCss = "w-[125px] font-bold";
  const towCategoryCss = "flex gap-[7px] justify-center items-center";
  return (
    <div>
      <PlayerStats/>
      <h2 className="bg-[#00193f] text-white px-2 font-bold">PLAYER DATA</h2>
      <div className="p-[10px] bg-white flex flex-col sm:flex-row">
        <div className={`flex flex-col p-[20px] bg-[#cccc] `}>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Full name:</div>
            <div>{data.playerProfile.playerFullName}</div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Date of birth/Age:</div>
            <div className={`${towCategoryCss}`}>
              <div>{data.playerProfile.dateOfBirth}</div>
              <div>({data.playerProfile.age})</div>
            </div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Place of birth:</div>
            <div className={`${towCategoryCss}`}>
              <div>{data.playerProfile.birthplace}</div>
              <img
                src={data.playerProfile.birthplaceCountryImage}
                alt="countryImage"
                className={`w-[25px] h-[17px]`}
              />
            </div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Height:</div>
            <div>{data.playerProfile.height}</div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Citizenship:</div>
            <div className={`${towCategoryCss}`}>
              <img
                src={data.playerProfile.countryImage}
                alt="countryImage"
                className={`w-[25px] h-[17px]`}
              />
              <div>{data.playerProfile.country}</div>
            </div>
          </div>
          {data.playerProfile.secondCountry !== "" && (
            <div className={`${rowCss}`}>
              <div className={`${categoryCss}`}> Second Country</div>
              <div className={`${towCategoryCss}`}>
                <img
                  src={data.playerProfile.secondCountryImage}
                  alt="secondCountryImage"
                  className={`w-[25px] h-[17px]`}
                />
                <div>{data.playerProfile.secondCountry}</div>
              </div>
            </div>
          )}
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Position:</div>
            <div>{data.playerProfile.playerMainPosition}</div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Foot:</div>
            <div>{data.playerProfile.foot}</div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Current club:</div>
            <div className={`${towCategoryCss}`}>
              <img
                src={data.playerProfile.clubImage}
                alt="clubImage"
                className={`w-[25px] h-[35px]`}
              />
              <div>{data.playerProfile.club}</div>
            </div>
          </div>
          <div className={`${rowCss}`}>
            <div className={`${categoryCss}`}>Contract expires:</div>
            <div>{data.playerProfile.contractExpiryDate}</div>
          </div>
        </div>
        <div
          className={`flex ml-[40px] bg-[#cccc] px-[20px] gap-[10px] justify-center items-center`}
        >
          <div className="flex flex-col">
            <div className={`${categoryCss} mt-[20px] text-[#910404cc]`}>
              Position:
            </div>
            <div>{data.playerProfile.playerMainPosition}</div>
            {data.playerProfile.playerSecondPosition && (
              <div>
                <div className={`${categoryCss} mt-[20px]  text-[#942929cc]`}>
                  Second Position:
                </div>
                <div>{data.playerProfile.playerSecondPosition}</div>
              </div>
            )}
            {data.playerProfile.playerThirdPosition && (
              <div>
                <div className={`${categoryCss} mt-[20px] text-[#914444cc]`}>
                  Third Position:
                </div>
                <div>{data.playerProfile.playerThirdPosition}</div>
              </div>
            )}
          </div>
          <div className="">
            <FootballField
              playerMainPosition={data.playerProfile.playerMainPosition}
              secondPosition={data.playerProfile.playerSecondPosition}
              thirdPosition={data.playerProfile.playerThirdPosition}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
