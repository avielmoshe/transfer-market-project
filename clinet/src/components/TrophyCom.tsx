import { SuccessData } from "@/types/types";
import { fetchDataOfOneComRow } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TrophyComProp {
  successData: SuccessData;
  type?: string;
}
function TrophyCom({ successData, type }: TrophyComProp) {
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
  if (!data) {
    return null;
  }

  const trophyImg = data.competition.trophy;
  const name = data.competition.competitionNameEN;
  return (
    <div className="flex items-end relative p-2">
      <HoverCard>
        <HoverCardTrigger>
          <img src={trophyImg} alt="trophyImg" />
        </HoverCardTrigger>
        <HoverCardContent className="text-[12px] p-2 bg-black text-white">
          {name}
        </HoverCardContent>
      </HoverCard>
      <div className="text-white absolute right-0 bg-[#5ca6ff] w-[30px] h-[30px] flex justify-center items-center rounded-full ">
        {numberOfTimes}
      </div>
    </div>
  );
}

export default TrophyCom;
