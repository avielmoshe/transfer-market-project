import React from "react";
import BigLoader from "@/components/BigLoader";
import { fetchDataOfOnePlayerForRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { parseMarketValue, removeAfterComma } from "@/utils/function.service";

interface PlayerCardProps {
  playerId: string | null;
  side: "left" | "right";
  setMarketValue: React.Dispatch<React.SetStateAction<number | null>>;
  bgColor: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  playerId,
  side,
  setMarketValue,
  bgColor,
}) => {
  // Fetch player data based on the provided playerId
  const {
    data: playerData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dataOfOnePlayer", { playerId }],
    queryFn: () =>
      playerId ? fetchDataOfOnePlayerForRow(playerId) : Promise.resolve(null),
    enabled: !!playerId, // Only fetch if playerId exists
  });

  if (isLoading) return <BigLoader />;
  if (error || !playerData) return <BigLoader />;

  const marketValue =
    playerData?.playerProfile?.marketValue +
    playerData?.playerProfile?.marketValueNumeral;

  // Update the market value in the parent component
  setMarketValue(parseMarketValue(marketValue));

  // Styling based on the side (left or right)
  const alignment = side === "left" ? "items-start" : "items-end";
  const textAlignment = side === "left" ? "text-left" : "text-right";

  return (
    <div
      className={`flex flex-col items-center  gap-10 text-[#00193f] font-mono ${alignment} w-full h-full`}
      style={{
        backgroundImage: playerData?.heroImages?.[0]?.url
          ? `url(${playerData.heroImages[0].url})`
          : "none", // Fallback if no image URL is provided
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        backgroundSize: "cover", // Ensure the image covers the entire container
        backgroundPosition: "center", // Center the image within the container
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <div className="relative z-100 flex gap-3 items-center justify-center mt-40">
        <img
          src={playerData.playerProfile.clubImage}
          alt="clubImage"
          className="w-[40px] h-[30px] object-contain"
        />
        <h2 className={`text-[16px]  ${textAlignment}`}>
          {playerData.playerProfile.playerFullName}
        </h2>
      </div>
      {side === "left" ? (
        <div className="relative z-100 flex flex-col items-center">
          <p className={`font-bold text-[14px] ${textAlignment}`}>
            MARKET VALUE
          </p>
          <hr className="border-[#00193f]   w-[100px]" />
          <p className={` font-bold text-xl ${textAlignment}`}>
            €
            {removeAfterComma(playerData.playerProfile.marketValue) +
              playerData.playerProfile.marketValueNumeral}
          </p>
        </div>
      ) : bgColor === "red-600" || bgColor === "green-500" ? (
        <div className="relative z-100 flex flex-col items-center">
          <p className={`font-bold text-[14px] ${textAlignment}`}>
            MARKET VALUE
          </p>
          <hr className="border-[#00193f]   w-[100px]" />
          <p className={` font-bold text-xl ${textAlignment}`}>
            €
            {removeAfterComma(playerData.playerProfile.marketValue) +
              playerData.playerProfile.marketValueNumeral}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default PlayerCard;
