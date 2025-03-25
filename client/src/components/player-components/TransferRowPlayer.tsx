import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatNumber } from "@/utils/function.service";

import { PlayerTransfer, TransferDetails } from "@/types/types";
import { fetchDataOfTransferHistory } from "@/utils/api";

interface TransferRowProp {
  transfer: TransferDetails;
}

function TransferRowPlayer({ transfer }: TransferRowProp) {
  const transferHistory = transfer;

  return (
    <tr>
      <td className="border p-1 text-center ">
        <div className="ml-1 flex flex-col justify-center text-[12px] ">
          {transferHistory.season}
        </div>
      </td>
      <td className="border p-1 text-center text-[12px]">
        {transferHistory.date}
      </td>

      <td className="border p-1">
        <Link to={`/clubProfile/${transferHistory.oldClubID}/overview/2024`}>
          <div className="flex gap-3 items-center">
            <img
              className="w-[25x] h-[30px] "
              src={transferHistory.oldClubImage}
              alt="oldClubImage"
            />
            <div className="text-[#1d75a3] text-[12px]">
              {transferHistory.oldClubName}
            </div>
          </div>
        </Link>
      </td>
      <td className="border p-1">
        <Link to={`/clubProfile/${transferHistory.newClubID}/overview/2024`}>
          <div className="flex gap-3 items-center">
            <img
              className="w-[25x] h-[30px]"
              src={transferHistory.newClubImage}
              alt="newClubImage"
            />
            <div className="text-[#1d75a3] text-[12px]">
              {transferHistory.newClubName}
            </div>
          </div>
        </Link>
      </td>
      <td className="border p-1 text-center text-[12px]">
        <div className="flex justify-center">
          <img
            className="w-[16.6px] h-[10px] "
            src={transferHistory.newClubCountryImage}
            alt="nationImage"
          />
        </div>
      </td>
      <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
        {transferHistory.transferFeeNumeral
          ? transferHistory.transferFeeCurrency +
            transferHistory.transferFeeValue +
            transferHistory.transferFeeNumeral
          : "Free"}
      </td>
      <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
        {transferHistory.loan ? "Loan" : "Transfer"}
      </td>
    </tr>
  );
}

export default TransferRowPlayer;
