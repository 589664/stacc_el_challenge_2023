import InputFactor from "@/components/Input/InputFactor";
import InputSpot from "@/components/Input/InputSpot";

import styles from "@/styles/Chart.module.css";
import { useEffect, useState } from "react";
import { Label, Line, LineChart, XAxis, YAxis } from "recharts";

async function fetchData() {
  return await fetch("/api/consumption").then((res) => res.json());
}

export default function ChartDataFromAPI() {
  const [data, setData] = useState(null);

  const [factor, setFactor] = useState(1);

  const [customSpot, setCustomSpot] = useState({
    monthlyFee: 0,
    spotAddon: 0,
  });

  useEffect(() => {
    fetchData().then((data) => setData(data));
  }, []);

  if (!data) return <div className={styles.container}>Loading...</div>;

  const convertedData = data.map((item) => {
    // convert from and to, to hours
    const hourF = new Date(item.from).getHours();
    const houtT = new Date(item.to).getHours();
    const period = `${hourF} - ${houtT}`;

    return {
      period: period,
      consumption: item.consumption * factor,
      consumptionUnit: item.consumptionUnit,
    };
  });

  const costData = data.map((item) => {
    return {
      cost: item.consumption * customSpot.spotAddon + customSpot.monthlyFee,
      consumption: item.consumption,
      consumptionUnit: item.consumptionUnit,
    };
  });

  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.h3}>Ditt forbruk:</h3>
        <InputFactor setFactor={setFactor} />
        <LineChart id="123" width={500} height={400} data={convertedData}>
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
            tick={{ fontSize: 12, fill: "#333" }}
          />
          <Line
            type="monotone"
            dataKey="consumption"
            stroke="#87CEFA"
            dot={{ fill: "#87CEFA", strokeWidth: 0.5, r: 2 }}
            animationDuration={5000}
          />
        </LineChart>
      </div>
      <div className={styles.container}>
        <h3 className={styles.h3}>Kostnad:</h3>
        <InputSpot setCustomSpot={setCustomSpot} />
        <LineChart id="123" width={500} height={400} data={costData}>
          <XAxis dataKey="consumption">
            <Label value="Consumption (KWh)" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            label={{
              value: "Cost (Kr)",
              angle: -90,
              pxosition: "insideLeft",
              align: "center",
            }}
            tick={{ fontSize: 12, fill: "#333" }}
          />
          <Line
            type="monotone"
            dataKey="cost"
            stroke="#87CEFA"
            dot={{ fill: "#87CEFA", strokeWidth: 0.5, r: 2 }}
            animationDuration={5000}
          />
        </LineChart>
      </div>
    </>
  );
}
