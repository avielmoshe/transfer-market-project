import { CurrentSeason, Transfer } from "@/types/types";
import { formatNumber } from "@/utils/function.service";
import React from "react";
import { Link } from "react-router-dom";

interface TransferTableProps {
  currentSeason: CurrentSeason;
}

const TransferTable: React.FC<TransferTableProps> = ({ currentSeason }) => {
  const renderRows = (transfers: Transfer[]) =>
    transfers.map((transfer) => (
      <tr key={transfer.id} className="hover:bg-gray-100">
        <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
          <Link to={`/playerProfile/${transfer.id}/profile`}>
            <div className="flex items-center gap-2">
              <img
                src={transfer.playerImage}
                alt={transfer.playerName}
                className="w-8 h-8 rounded-full"
              />
              <span>{transfer.playerName}</span>
            </div>
          </Link>
        </td>
        <td className="border p-2 text-center text-[12px]">
          {transfer.positionsdetail}
        </td>
        <td className="border p-2 text-center text-[12px] text-[#1d75a3]">
          <Link to={`/clubProfile/${transfer.clubID}/overview/2024`}>
            <div className="flex items-center gap-2">
              <img
                src={transfer.clubImage}
                alt={transfer.clubName}
                className="w-8 h-8 rounded-full"
              />
              <span>{transfer.clubName}</span>
            </div>
          </Link>
        </td>
        <td className="border p-2 text-center text-[12px]">{transfer.age}</td>
        <td className="border p-2 text-center text-[12px]">
          <img
            src={transfer.countryImage}
            alt="Country Flag"
            className="w-4 h-3 inline"
          />
        </td>
        <td className="border p-2 text-center text-[12px]">
          {transfer.transferFee !== "?"
            ? `${formatNumber(Number(transfer.transferFeeUnformatted))}`
            : "Unknown"}
        </td>
        <td className="border p-2 text-center text-[12px]">
          {transfer.loan ? "Loan" : "Transfer"}
        </td>
      </tr>
    ));

  return (
    <div className="mr-2 ml-1">
      <h2 className="bg-[#00193f] text-white px-2 font-bold">
        {`TRANSFER HISTORY - ${currentSeason.transferArrivals.length} Arrivals & ${currentSeason.transferDepartures.length} Departures`}
      </h2>
      <h3 className="text-[#00193f] font-semibold my-2">Transfer Arrivals</h3>
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Name
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Position
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              From
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Age
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Nat
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Transfer Fee
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Loan/Transfer
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(currentSeason.transferArrivals)}</tbody>
      </table>
      <h3 className="text-[#00193f] font-semibold my-2">Transfer Departures</h3>
      <table className="bg-white table-auto border-collapse w-full mb-4">
        <thead>
          <tr>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Name/Club
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Position
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Club
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Age
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Nat
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Transfer Fee
            </th>
            <th className="border p-2 text-center text-[12px] bg-[#f2f2f2]">
              Agents
            </th>
          </tr>
        </thead>
        <tbody>{renderRows(currentSeason.transferDepartures)}</tbody>
      </table>
    </div>
  );
};

export default TransferTable;
