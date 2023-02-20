import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import styles from "@/styles/Home.module.css";

const ChartDataFromAPI = dynamic(() => import("@/components/APIChart"), {
  ssr: false,
});



const Home = (props) => {

  const [customChart, setCustomChart] = useState({ "monthlyFee": 0, "spotAddon": 0 });
  return (
    <>
      <Head>
        <title>Sparstrøm</title>
      </Head>
      <div className="flex flex-col gap-2 text-xl font-extralight">
        <main style={{ minHeight: "calc(85vh)", marginTop: "100px" }}>
          <h1 className={styles.title}>Sparstrøm</h1>
          <p className={styles.description}>
            Denne nettsiden skal vise deg hvordan du kan spare penger på strøm,
            ved å samenlikne up to date priser fra flere leverandører
          </p>
          <ChartDataFromAPI />

          {/* <h3>Grafen under viser hva du hadde betalt uten strømselskapene.</h3>
          <ChartSpotFromProp props={props} customChart={customChart} /> */}
        </main>
      </div>
    </>
  );
};

export default Home;
