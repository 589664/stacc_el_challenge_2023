import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const Home = () => {
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
        </main>
      </div>
    </>
  );
};

export default Home;
