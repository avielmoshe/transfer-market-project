import { useQuery } from "@tanstack/react-query";
import { coaches, players, referees } from "../types/types";
import {
  fetchDataOfOneCoachRow,
  fetchDataOfOnePlayerForRow,
} from "../utils/api";

interface RefereeRowProp {
  referee: referees;
}

function RefereeRow({ referee }: RefereeRowProp) {
  const refereeId = referee.id;
  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ["dataOfOneCoach", { coachId }],
  //     queryFn: () => fetchDataOfOneCoachRow(coachId),
  //   });

  //   if (error instanceof Error) return null;
  //   if (!data) {
  //     return null;
  //   }
  //   console.log(data);

  return (
    <tr>
      <td className="border p-1 flex">
        <img
          className="w-[28px] h-[36px]"
          src={referee.refereeImage}
          alt="playerImage"
        />
        <div className="ml-1 flex flex-col justify-center text-[12px] text-[#1d75a3]">
          <div className="font-bold">{referee.refereeName}</div>
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]"></td>
      <td className="border p-1 text-center text-[12px]"></td>
      <td className="border p-1 text-center text-[12px]">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px]  "
            src={referee.nationImage}
            alt="clubImage"
          />
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]"></td>
    </tr>
  );
}

export default RefereeRow;
