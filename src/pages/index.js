import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Sparstrøm</title>
//       </Head>

//       <Header />

//       <div className={styles.content}>
//         <h1 className={styles.title}>Sparstrøm</h1>
//         <p className={styles.description}>
//           Denne nettsiden skal vise deg hvordan du kan spare penger på strøm,
//           ved å samenlikne up to date priser fra flere leverandører
//         </p>
//       </div>

//       {/* <Footer /> */}
//     </>
//   );
// }

const Home = () => {
  return (
    <div>
      <Head>
        <title>Sparstrøm</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main style={{ minHeight: "calc(85vh)", marginTop: '100px' }}>
        <h1 className={styles.title}>Sparstrøm</h1>
        <p className={styles.description}>
          Denne nettsiden skal vise deg hvordan du kan spare penger på strøm,
          ved å samenlikne up to date priser fra flere leverandører
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
