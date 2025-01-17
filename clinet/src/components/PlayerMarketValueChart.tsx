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
  const clubImages = marketValueDevelopment.map((entry) => entry.clubImage);

  return (
    <div className="flex flex-col items-center">
      <h2 className=" mt-4 bg-[#00193f] text-white px-2 font-bold mb-4 rounded-full text-center ">
        Current Market Value: {formatNumber(yData[0])}
      </h2>
      <LineChart
        width={800}
        height={400}
        xAxis={[
          {
            data: xData,
            scaleType: "time",
            label: "Date",
          },
        ]}
        series={[
          {
            data: yData,
            type: "line",
            label: "Market Value (€)",
            area: true,
            showMark: true, // Enable dots on the line
            markOptions: {
              render: (pointIndex, { x, y }) => {
                const entry = marketValueDevelopment[pointIndex];
                return (
                  <>
                    {/* Render Club Image */}
                    <image
                      key={`club-logo-${pointIndex}`}
                      href={entry.clubImage}
                      x={x - 15} // Adjust for center alignment
                      y={y - 30} // Position above the point
                      height="25"
                      width="25"
                      preserveAspectRatio="xMidYMid meet"
                    />
                    {/* Render Hoverable Tooltip */}
                    <foreignObject
                      key={`tooltip-${pointIndex}`}
                      x={x - 50}
                      y={y - 100}
                      width={120}
                      height={80}
                    >
                      <div
                        style={{
                          display: "none",
                          background: "white",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          padding: "5px",
                          fontSize: "12px",
                          textAlign: "center",
                          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
                        }}
                        className={`tooltip-${pointIndex}`}
                      >
                        <p>
                          <strong>{entry.clubName}</strong>
                        </p>
                        <p>Date: {entry.date}</p>
                        <p>
                          Market Value: €
                          {entry.marketValueUnformatted / 1000000}m
                        </p>
                      </div>
                    </foreignObject>
                  </>
                );
              },
            },
          },
        ]}
      />
      {/* <style>
        {`
          svg image:hover ~ foreignObject .tooltip-${"{index}"} {
            display: block !important;
          }
        `}
      </style> */}
    </div>
  );
};

export default PlayerMarketValueChart;
