import React, { useState } from "react";
import imgGaming from "../assets/img/12121212.png";

import PlayerCard from "@/components/PlayerCard";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const player_ids = [
  "14555",
  "51471",
  "53622",
  "85941",
  "88755",
  "95424",
  "177476",
  "186590",
  "203460",
  "238223",
  "241641",
  "258004",
  "284730",
  "357565",
  "406635",
  "418560",
  "475959",
  "486049",
  "576121",
  "583199",
  "601883",
  "661207",
  "701057",
  "743591",
  "942497",
  "994536",
  "105470",
  "139208",
  "146310",
  "148455",
  "234803",
  "256178",
  "314353",
  "338070",
  "340918",
  "340950",
  "341092",
  "624258",
  "618494",
  "565822",
  "546543",
  "534033",
  "480692",
  "478573",
  "451276",
  "433188",
  "357119",
  "434675",
  "486604",
  "632349",
  "52570",
  "91845",
  "170527",
  "192765",
  "258889",
  "282429",
  "282823",
  "286047",
  "294057",
  "354362",
  "355915",
  "725912",
  "568693",
  "568559",
  "557459",
  "556385",
  "470607",
  "431755",
  "428016",
  "410425",
  "378710",
  "483348",
  "553875",
  "1011147",
  "922693",
  "879768",
  "866246",
  "743498",
  "1004327",
  "8198",
  "16306",
  "34130",
  "59377",
  "69633",
  "74960",
  "106987",
  "117996",
  "128899",
  "164770",
  "177907",
  "182877",
  "183288",
  "184573",
  "191614",
  "228645",
  "240306",
  "258919",
  "258923",
  "288255",
  "315969",
  "339340",
  "342046",
  "357147",
  "401173",
  "477758",
  "480762",
  "495033",
  "505219",
  "507700",
  "532826",
  "536835",
  "548470",
  "102017",
  "111819",
  "134425",
  "144028",
  "203853",
  "230784",
  "262749",
  "300716",
  "316264",
  "321247",
  "324358",
  "326029",
  "329145",
  "331560",
  "335721",
  "338424",
  "346314",
  "344381",
  "357662",
  "363205",
  "386047",
  "394327",
  "399776",
  "403151",
  "413403",
  "420243",
  "425334",
  "425918",
  "433177",
  "435338",
  "462250",
  "463603",
  "472423",
  "475188",
  "475411",
  "485706",
  "485585",
  "487465",
  "490606",
  "495666",
  "502821",
  "503743",
  "503749",
  "503987",
  "537860",
  "568177",
  "591844",
  "614258",
  "620322",
  "622380",
  "628451",
  "645686",
  "648195",
  "649317",
  "655488",
  "659459",
  "687626",
  "75458",
  "776890",
  "805714",
  "848682",
  "890719",
  "890721",
  "936874",
  "938158",
  "1004708",
  "1082850",
  "111873",
  "116648",
  "126664",
  "131978",
  "193116",
  "233124",
  "249565",
  "253677",
  "258878",
  "262749",
  "284857",
  "309400",
  "316125",
  "550829",
  "583189",
  "602105",
  "607224",
  "614262",
  "622236",
  "640026",
  "676318",
  "686845",
];

const GamingPage: React.FC = () => {
  const [remainingIds, setRemainingIds] = useState<string[]>(player_ids);
  const [currentLeftId, setCurrentLeftId] = useState<string | null>(null);
  const [currentRightId, setCurrentRightId] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [leftMarketValue, setLeftMarketValue] = useState<number | null>(null);
  const [rightMarketValue, setRightMarketValue] = useState<number | null>(null);
  const [bgColor, setBgColor] = useState<string>("white");
  const [score, setScore] = useState<number>(0);

  const getRandomId = (): string | null => {
    if (remainingIds.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * remainingIds.length);
    const selectedId = remainingIds[randomIndex];
    setRemainingIds((prev) => prev.filter((id) => id !== selectedId));
    return selectedId;
  };

  const handleStartGame = () => {
    setCurrentLeftId(getRandomId());
    setCurrentRightId(getRandomId());
    setIsGameOver(false);
  };

  const handleGuess = (guess: "higher" | "lower") => {
    if (!currentLeftId || !currentRightId) return;

    const isCorrect =
      (guess === "higher" && rightMarketValue! > leftMarketValue!) ||
      (guess === "lower" && rightMarketValue! < leftMarketValue!);

    if (isCorrect) {
      setBgColor("green-400");
      setScore((prev) => prev + 1);
      setTimeout(() => {
        setCurrentLeftId(currentRightId);
        setCurrentRightId(getRandomId());
        setBgColor("white");
      }, 3000);
    } else {
      setBgColor("red-600");
      setTimeout(() => {
        setIsGameOver(true);
        setBgColor("white");
        setScore(0);
      }, 3000);
    }
  };
  return (
    <div>
      {!currentLeftId || isGameOver ? (
        <div
          className=" w-full h-[470px] bg-cover bg-center text-white flex flex-col items-center p-14"
          style={{
            background:
              "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
          }}
        >
          <h1 className="font-bold text-[24px] mb-4">
            TRANSFERMARKT GAMES & QUIZZES
          </h1>
          <img src={imgGaming} alt="" />
          <h2 className="font-bold text-[22px]">WHAT’S MY VALUE?</h2>
          <p className=" text-[15px] mt-4 mb-4 text-center">
            Does Erling Haaland have a higher or lower market value than Jude
            Bellingham? Test your market value knowledge in our What’s my value?
            game!
          </p>
          <button
            className=" top-[239px] right-[370px] w-[300px] font-bold px-4 py-2 bg-[#5ca6ff] text-white rounded-lg shadow-lg"
            onClick={handleStartGame}
          >
            {isGameOver ? "PLAY AGAIN" : "PLAY NOW"}
          </button>
        </div>
      ) : (
        <div>
          <h2 className="bg-[#00193f] text-[#5ca6ff] px-2 py-1 font-bold text-[10px]">
            {`SCORE:  `}
            <span className="text-white">{` ${score}`}</span>
          </h2>
          <div
            className="min-h-[470px] flex  justify-center relative"
            style={{
              background:
                "repeating-linear-gradient(135deg, #00173d 0.625rem, #00193f 1.5625rem)",
            }}
          >
            {/* Left Player */}
            <div className="min-h-[470px] w-full relative">
              <div className="absolute inset-0 bg-white bg-opacity-85"></div>

              <PlayerCard
                playerId={currentLeftId}
                side="left"
                setMarketValue={setLeftMarketValue}
                bgColor={bgColor}
              />
            </div>
            <div className="bg-[#00193f] w-[12px]"></div>
            <div className="bg-[#00193f] z-30 absolute top-1/2 justify-center text-white h-[15px] text-[10px] font-bold px-2  flex items-center rounded-full w-[40px]">
              VS
            </div>

            {/* Buttons */}

            {/* Right Player */}
            <div className="min-h-[470px] w-full relative">
              <div
                className={`absolute inset-0 bg-${bgColor} bg-opacity-85`}
              ></div>
              {bgColor === "white" ? (
                <div className="absolute right-1/4 bottom-1/4 flex flex-col justify-center items-center mx-8">
                  <button
                    className="px-4 py-2 bg-green-500 text-white  mb-4 flex gap-5 items-center font-bold text-[12px] rounded-3xl"
                    onClick={() => handleGuess("higher")}
                  >
                    <FaCaretUp />
                    HIGHER
                    <FaCaretUp />
                  </button>
                  <button
                    className="px-4 py-2 bg-red-500 text-white  mb-4 flex gap-5 items-center font-bold text-[12px] rounded-3xl"
                    onClick={() => handleGuess("lower")}
                  >
                    <FaCaretDown />
                    LOWER
                    <FaCaretDown />
                  </button>
                </div>
              ) : null}
              <PlayerCard
                playerId={currentRightId}
                side="right"
                setMarketValue={setRightMarketValue}
                bgColor={bgColor}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamingPage;
