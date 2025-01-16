import React from 'react';
import { TbPlayFootball } from 'react-icons/tb';


interface PlayerPosition {
  top: string;
  left: string;
}


interface PlayerProfile {
  playerMainPosition: string;
}


const positions: Record<string, PlayerPosition> = {
  "Goalkeeper": { top: "90%", left: "50%" },
  "Centre-Back": { top: "60%", left: "30%" },
  "Right-Back": { top: "60%", left: "70%" },
  "Left-Back": { top: "60%", left: "10%" },
  "Defensive Midfield": { top: "50%", left: "50%" },
  "Central Midfield": { top: "50%", left: "50%" },
  "Attacking Midfield": { top: "40%", left: "50%" },
  "Left Winger": { top: "30%", left: "20%" },
  "Right Winger": { top: "30%", left: "80%" },
  "Centre-Forward": { top: "10%", left: "50%" },
};

const FootballField: React.FC<PlayerProfile> = ({ playerMainPosition }) => {
  const position = `${playerMainPosition}`;
  const playerStyle = positions[position] || { top: "50%", left: "50%" }; 

  return (
    <div style={{ position: "relative", width: "400px", height: "500px", backgroundColor: "green", border: "2px solid black" }}>
 
      <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", border: "1px solid white" }}></div>

      <div style={{ position: "absolute", top: "50%", left: "0", width: "100%", height: "1px", backgroundColor: "white" }}></div>

      <div style={{ position: "absolute", top: "0", left: "0", width: "1px", height: "100%", backgroundColor: "white" }}></div>

      <div style={{ position: "absolute", top: "0", right: "0", width: "1px", height: "100%", backgroundColor: "white" }}></div>

      <div style={{ position: "absolute", top: "50%", left: "50%", width: "60px", height: "60px", borderRadius: "50%", border: "1px solid white", transform: "translate(-50%, -50%)" }}></div>



      <div
        style={{
          position: "absolute",
          top: playerStyle.top,
          left: playerStyle.left,
          transform: "translate(-50%, -50%)",
          color: "white",
        }}
      >
        <TbPlayFootball size={40} color="white" />
      </div>
    </div>
  );
};

export default FootballField;
