import { Params } from "@/components/InputSeason";
import { getGamePlan, getListGamePlan } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface GamePlanPlayDay {
  id: string;
  name: string;
  description: string;
  dateString: string; 
}

const findClosestPlayDay = (playDays: GamePlanPlayDay[], today: Date): string => {
  const todayTime = today.getTime();

  const parsedPlayDays = playDays.map((playDay) => {
    const [start, end] = playDay.dateString.split(" - ").map((date) => new Date(date.trim()));
    return { ...playDay, start, end };
  });

  const exactMatch = parsedPlayDays.find(
    (playDay) => todayTime >= playDay.start.getTime() && todayTime <= playDay.end.getTime()
  );

  if (exactMatch) return exactMatch.id;

  const closestMatch = parsedPlayDays.reduce((prev, curr) => {
    const prevDistance = Math.abs(todayTime - prev.start.getTime());
    const currDistance = Math.abs(todayTime - curr.start.getTime());
    return currDistance < prevDistance ? curr : prev;
  });

  return closestMatch.id;
};

const CompetitionMatches = () => {
  const { id } = useParams<Params>();
  const { seasonId } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfLiveTable", { id, seasonId }],
    queryFn: () => getGamePlan(id, seasonId),
  });

  const [selectedPlayDayId, setSelectedPlayDayId] = useState<string>("");


  useEffect(() => {
    if (data?.gamePlanPlayDays) {
      const today = new Date();
      const closestId = findClosestPlayDay(data.gamePlanPlayDays, today);
      setSelectedPlayDayId(closestId);
    }
  }, [data]);

  if (error) return null;
  if (isLoading || !data) return null;

  const { data: gameListData, error: gameListError } = useQuery({
    queryKey: ["gameList", { id, seasonId, selectedPlayDayId }],
    queryFn: () => getListGamePlan(seasonId, id, selectedPlayDayId),
    enabled: !!selectedPlayDayId, 
  });
    if (gameListError) return null;
    if (!gameListData) {
      return null;
    }
console.log(gameListData);

  return (
    <div>
      <h2>Competition Matches</h2>
      <p>Selected Play Day ID: {selectedPlayDayId}</p>
    </div>
  );
};

export default CompetitionMatches;
