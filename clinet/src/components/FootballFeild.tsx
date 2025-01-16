import React from "react";
import { TbPlayFootball } from "react-icons/tb";

interface PlayerPosition {
  top: string;
  left: string;
}

interface PlayerProfile {
  playerMainPosition: string;
  secondPosition?: string;
  thirdPosition?: string;
}

const positions: Record<string, PlayerPosition> = {
  Goalkeeper: { top: "90%", left: "50%" },
  "Centre-Back": { top: "70%", left: "30%" },
  "Right-Back": { top: "70%", left: "70%" },
  "Left-Back": { top: "70%", left: "10%" },
  "Defensive Midfield": { top: "35%", left: "50%" },
  "Central Midfield": { top: "50%", left: "50%" },
  "Attacking Midfield": { top: "30%", left: "50%" },
  "Left Winger": { top: "20%", left: "20%" },
  "Right Winger": { top: "20%", left: "80%" },
  "Centre-Forward": { top: "10%", left: "50%" },
};

const FootballField: React.FC<PlayerProfile> = ({
  playerMainPosition,
  secondPosition,
  thirdPosition,
}) => {
  const mainPositionStyle = positions[playerMainPosition] || {
    top: "50%",
    left: "50%",
  };
  const secondPositionStyle = secondPosition
    ? positions[secondPosition]
    : undefined;
  const thirdPositionStyle = thirdPosition
    ? positions[thirdPosition]
    : undefined;

  return (
    <div className="relative w-[400px] h-[500px] bg-green-600 border-2 border-black">
      
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
    <div className="absolute h-[40px] right-[40%] top-[77%] w-[20%] border border-white rounded-t-full"></div>
    <div className="absolute h-[40px] right-[40%] top-[15%] w-[20%] border border-white rounded-b-full"></div>

      <div
        className="absolute"
        style={{
          top: mainPositionStyle.top,
          left: mainPositionStyle.left,
          transform: "translate(-50%, -50%)",
        }}
      >
        <TbPlayFootball className="text-[60px] text-[#910404cc]" />
      </div>

      {secondPositionStyle && (
        <div
          className="absolute"
          style={{
            top: secondPositionStyle.top,
            left: secondPositionStyle.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <TbPlayFootball className="text-[40px] text-[#942929cc]"/>
        </div>
      )}

      {thirdPositionStyle && (
        <div
          className="absolute"
          style={{
            top: thirdPositionStyle.top,
            left: thirdPositionStyle.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <TbPlayFootball className="text-[30px] text-[#914444cc]" />
        </div>
      )}
    </div>
  );
};

export default FootballField;
