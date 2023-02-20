import styles from "@/styles/Chart.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Label } from "recharts";
import { useEffect, useState } from "react";

// here we fetch data from the API
async function fetchData() {
  return await fetch("/api/consumption").then((res) => res.json());
}

export default function ChartDataFromAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  if (!data) return <div className={styles.container}>Loading...</div>;

  const convertedData = data.map((item) => {
    // convert from and to, to hours
    item.from = new Date(item.from).getHours();
    item.to = new Date(item.to).getHours();
    return {
      period: `${item.from} - ${item.to}`,
      consumption: item.consumption,
      consumptionUnit: item.consumptionUnit,
    };
  });

  return (
    <div className={styles.container}>
      <LineChart id="123" width={1000} height={400} data={convertedData}>
        <XAxis dataKey="period">
          <Label value="Period" offset={-5} position="insideBottom" />
        </XAxis>
        <YAxis
          label={{
            value: "Consumption (KWh)",
            angle: -90,
            pxosition: "insideLeft",
            align: "center",
          }}
          tick={{ fontSize: 12, fill: "#333" }} // Add custom styles to YAxis tick
        />
        <Line
          type="monotone"
          dataKey="consumption"
          stroke="#87CEFA"
          animationDuration={15000} // Add animation duration
          // dot={{ fill: '#87CEFA', strokeWidth: 2, r: 6 }} // Add custom styles to the dots on the line
        />
      </LineChart>
    </div>
  );
}
