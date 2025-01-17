import { fetchDataOfPlayerMarket } from "@/utils/api";
import { LineChart } from "@mui/x-charts";
import { useQuery } from "@tanstack/react-query";
import { Params, useParams } from "react-router-dom";
import AreaChartComponent from "../Chart";
import PlayerMarketValueChart from "../PlayerMarketValueChart";

const PlayerMarketValue = () => {
  const { id } = useParams<Params>();
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchDataOfPlayerMarket", { id }],
    queryFn: () => fetchDataOfPlayerMarket(id),
  });

  if (error) return <p>Error loading market value data.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data || !data.marketValueDevelopment) {
    return <p>No data available.</p>;
  }

  // Extract the market value development data
  const marketValueDevelopment = data.marketValueDevelopment;
  // function convertDateToNumber(dateString: string) {
  //   // Split the input string into parts
  //   const [year, month, day] = dateString.split("-");

  //   // Combine the parts into the desired format
  //   const result = parseFloat(`${year}.${month}${day}`);

  //   return result;
  // }
  // // Prepare the x-axis (dates) and y-axis (market values) data
  // const xData = marketValueDevelopment.map((entry: any) =>
  //   convertDateToNumber(entry.unformattedDate)
  // );
  // const yData = marketValueDevelopment.map(
  //   (entry: any) => entry.marketValueUnformatted
  // );
  console.log(marketValueDevelopment);

  return (
    <div>
      <div>
        <h2 className="bg-[#00193f] text-white px-2 font-bold">
          {data.share.title}
        </h2>
        <div className="">
          <PlayerMarketValueChart
            marketValueDevelopment={marketValueDevelopment}
          />

          {/* <LineChart
            xAxis={[
              {
                data: xData.reverse(), // Use extracted dates for the x-axis
                scaleType: "time", // Optional: Specify if dates are formatted (e.g., "2009-08-26")
              },
            ]}
            series={[
              {
                data: yData.reverse(), // Use extracted market values for the series
                area: true,
                label: "Market Value (€)", // Optional: Add a label
              },
            ]}
            width={700}
            height={300}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default PlayerMarketValue;
