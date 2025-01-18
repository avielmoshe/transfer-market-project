import { fetchDataOfPlayerMarket } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatNumber } from "@/utils/function.service";

const PlayerMarketValue = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfPlayerMarket", { id }],
    queryFn: () => fetchDataOfPlayerMarket(id),
  });

  if (error) return <p>Error loading market value data.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data || !data.marketValueDevelopment) {
    return <p>No data available.</p>;
  }

  // Reverse the market value development array
  const marketValueDevelopment = [...data.marketValueDevelopment].reverse();

  // Tooltip Customization
  const customTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const entry = payload[0].payload;
      return (
        <div
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "white",
          }}
        >
          <img
            src={entry.clubImage}
            alt={entry.clubName}
            style={{ width: "30px", height: "40px", marginBottom: "10px" }}
          />
          <p>
            <strong>Club:</strong> {entry.clubName}
          </p>
          <p>
            <strong>Age:</strong> {entry.age}
          </p>
          <p>
            <strong>Date:</strong> {entry.date}
          </p>
          <p>
            <strong>Market Value:</strong>
            {entry.marketValueCurrency}
            {entry.marketValue} {entry.marketValueNumeral}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="bg-[#00193f] text-white px-2 font-bold w-full text-center">
          {data.share.title}
        </h2>
        <h2 className="bg-[#00193f] text-white px-2 font-bold mt-4">
          Current Market Value:{" "}
          {formatNumber(
            marketValueDevelopment[marketValueDevelopment.length - 1]
              .marketValueUnformatted
          )}
        </h2>

        <ResponsiveContainer width="80%" height={400}>
          <LineChart
            data={marketValueDevelopment}
            margin={{ top: 20, right: 20, bottom: 20, left: 50 }} // Add padding
          >
            {/* X-Axis shows only years */}
            <XAxis
              dataKey="unformattedDate"
              tickFormatter={(date) => new Date(date).getFullYear().toString()} // Format tick to show only years
              padding={{ left: 10, right: 10 }} // Add additional padding to X-Axis
            />
            {/* Y-Axis formats numbers with commas */}
            <YAxis
              tickFormatter={
                (value) => value.toLocaleString() // Format numbers with commas
              }
            />
            <Tooltip content={customTooltip} />
            <Line
              type="monotone"
              dataKey="marketValueUnformatted"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              dot={({ cx, cy, payload }) => (
                <image
                  x={cx - 10}
                  y={cy - 10}
                  width={20}
                  height={20}
                  href={payload.clubImage}
                />
              )}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlayerMarketValue;
