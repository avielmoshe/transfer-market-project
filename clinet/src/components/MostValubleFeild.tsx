import React from "react";
import { IoDiscSharp } from "react-icons/io5";
import { Url } from "url";

interface PlayerPosition {
  top: string;
  left: string;
}

interface PlayerProfile {
  name: string;
  position: string;
  image?: string
}

const positions: Record<string, PlayerPosition> = {
  "Goalkeeper": { top: "93%", left: "50%" },
  "Centre-Back": { top: "80%", left: "30%" },
  "Right-Back": { top: "70%", left: "90%" },
  "Left-Back": { top: "70%", left: "10%" },
  "Defensive Midfield": { top: "65%", left: "50%" },
  "Central Midfield": { top: "40%", left: "70%" },
  "Attacking Midfield": { top: "40%", left: "30%" },
  "Left Winger": { top: "20%", left: "20%" },
  "Right Winger": { top: "20%", left: "80%" },
  "Centre-Forward": { top: "10%", left: "50%" },
};

interface MostValuableFieldProps {
  playerPositions: PlayerProfile[];
}

const MostValuableFeild: React.FC<MostValuableFieldProps> = ({
  playerPositions,
}) => {
  return (
    <div className="relative w-[600px] h-[550px] bg-green-600 border-2 border-black">
      <div className="absolute top-0 left-0 w-full h-full border-t border-l border-r border-b border-white"></div>

      <div className="absolute top-[50%] left-0 w-full h-[1px] bg-white"></div>

      <div className="absolute top-0 left-0 w-[1px] h-full bg-white"></div>

      <div className="absolute top-0 right-0 w-[1px] h-full bg-white"></div>
      <div className="absolute top-0 right-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute top-0 left-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute top-[15%] left-[30%] w-[40%] h-[1px] bg-white"></div>
      <div className="absolute top-0 right-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute top-0 left-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute top-[15%] left-[30%] w-[40%] h-[1px] bg-white"></div>
      <div className="absolute bottom-0 right-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute bottom-0 left-[30%] w-[1px] h-[15%] bg-white"></div>
      <div className="absolute bottom-[15%] left-[30%] w-[40%] h-[1px] bg-white"></div>

      <div className="absolute top-[50%] left-[50%] w-[80px] h-[80px] rounded-full border border-white transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-[40px] right-[40%] top-[77.6%] w-[20%] border border-white rounded-t-full"></div>
      <div className="absolute h-[40px] right-[40%] top-[15%] w-[20%] border border-white rounded-b-full"></div>

      {playerPositions.map((player, index) => {
  const positionStyle = positions[player.position];
  const isThirdPosition = index === 2; 
  return (
    <div
      className="absolute"
      style={{
        top: positionStyle.top,
        left: isThirdPosition ? "70%" : positionStyle.left,
        transform: "translate(-50%, -50%)",
      }}
      key={index} 
    >
      <div className="flex flex-col">
        <div className="flex justify-center"><img src={player.image} alt="" className="w-[55px] h-[55px] rounded-full border-[1.5px] border-[#00193f]"/></div>
        <div className="text-[13px] flex justify-center font-bold text-[#00193f]">{player.name}</div>
      </div>
    </div>
  );
})}
    </div>
  );
};

export default MostValuableFeild;
