import React from "react";
import { LineChart } from "@mui/x-charts";
import { formatNumber } from "@/utils/function.service";

interface MarketValueEntry {
  age: string;
  clubID: string;
  clubImage: string;
  clubName: string;
  clubShortName: string;
  date: string;
  marketValue: string;
  marketValueCurrency: string;
  marketValueNumeral: string;
  marketValueUnformatted: number;
  seasonID: string;
  unformattedDate: string;
}

interface PlayerMarketValueChartProps {
  marketValueDevelopment: MarketValueEntry[];
}

const PlayerMarketValueChart: React.FC<PlayerMarketValueChartProps> = ({
  marketValueDevelopment,
}) => {
  // Prepare data for the chart
  const xData = marketValueDevelopment.map(
    (entry) => new Date(entry.unformattedDate)
  );
  const yData = marketValueDevelopment.map(
    (entry) => entry.marketValueUnformatted
  );

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="mt-4 bg-[#00193f] text-white px-4 py-2 font-bold mb-4 rounded-full text-center">
        Current Market Value: {formatNumber(yData[0])}
      </h2>
      <LineChart
        margin={{ left: 100 }}
        width={800}
        height={400}
        xAxis={[
          {
            data: xData,
            scaleType: "time",
            label: "Date",
            labelStyle: { fontSize: "14px", fill: "#333" },
          },
        ]}
        yAxis={[
          {
            data: yData,
            label: "Market Value (€)",
            labelStyle: { fontSize: "14px", fill: "#333" },
          },
        ]}
        series={[
          {
            data: yData,
            type: "line",
            label: "Market Value (€)",
            area: true,
            showMark: true,
          },
        ]}
      />
    </div>
  );
};

export default PlayerMarketValueChart;
