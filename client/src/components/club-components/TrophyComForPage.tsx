import { SuccessData } from "@/types/types";
import { fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Link } from "react-router-dom";
import SmallLoader from "../SmallLoader";

interface TrophyComProp {
  successData: SuccessData;
  type?: string;
}
function TrophyComForPage({ successData, type }: TrophyComProp) {
  let compId: string;
  let numberOfTimes: string;
  if (type === "player") {
    compId = successData.additionalData[0].competitionID;
    numberOfTimes = successData.additionalData.length;
  } else {
    compId = successData.additionalData.competitionId;
    numberOfTimes = successData.number;
  }

  const { data, error, isLoading } = useQuery({
    queryKey: ["DataOfOneCom", { compId }],
    queryFn: () => fetchDataOfOneComRow(compId),
  });

  if (error instanceof Error) return null;
  if (isLoading) return <SmallLoader />;

  if (!data) {
    return null;
  }

  const trophyImg = data.competition.trophy;
  const name = data.competition.competitionNameEN;
  return (
    <Link to={`/competitionProfile/${data.competition.id}/overview/2024`}>
      <div className="flex flex-col items-center  relative p-2 border">
        <h1 className="font-bold">{numberOfTimes + "X  " + name}</h1>
        <div>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex justify-center">
                <img src={trophyImg} alt="trophyImg" />
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="text-[12px] p-2 bg-black text-white">
              {name}
            </HoverCardContent>
          </HoverCard>

          <div className="text-[12px]">
            {successData.additionalData.seasonIds.map((seasonId: string) => (
              <span> {seasonId}, </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrophyComForPage;
