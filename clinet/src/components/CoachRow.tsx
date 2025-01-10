import { useQuery } from "@tanstack/react-query";
import { coaches, players } from "../types/types";
import {
  fetchDataOfOneCoachRow,
  fetchDataOfOnePlayerForRow,
} from "../utils/api";

interface CoachRowProp {
  coach: coaches;
}

function CoachRow({ coach }: CoachRowProp) {
  const coachId = coach.id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["dataOfOneCoach", { coachId }],
    queryFn: () => fetchDataOfOneCoachRow(coachId),
  });

  if (error instanceof Error) return null;
  if (!data) {
    return null;
  }
  return (
    <tr>
      <td className="border p-1 flex">
        <img
          className="w-[28px] h-[36px]"
          src={coach.coachImage}
          alt="playerImage"
        />
        <div className="ml-1 flex flex-col justify-center text-[12px] text-[#1d75a3]">
          <div className="font-bold">{coach.coachName}</div>
          <div>{coach.club}</div>
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">
        <div className="flex justify-center">
          <img
            className="w-[18px] h-[18px] "
            src={data.appointments[0].clubImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">{data.profile.age}</td>
      <td className="border p-1 text-center text-[12px]">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px]  "
            src={coach.nationImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1 text-[12px] text-right">
        {coach.currentFunction}
      </td>
      <td className="border p-2 text-center text-[12px] font-bold text-[#57585a]">
        {data.appointments[0].contractYear > 2000
          ? data.appointments[0].contractYear
          : "--"}
      </td>
    </tr>
  );
}

export default CoachRow;
