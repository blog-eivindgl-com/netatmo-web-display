import useSWR from 'swr';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import TemperatureWidget from '@/components/temperature-widget';
import HumidityWidget from '@/components/humidity-widget';
import WindWidget from '@/components/wind-widget';
import TimeWidget from '@/components/time-widget';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const apiUri = 'api/display';
  const[data, error] = useSWR(apiUri, fetcher);
  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading....</div>;
  const[disp, setDisplay] = useState(data);
  
  let temperatureTop = [];
  let temperatureBottom = [];
  let humidity = undefined;
  let wind = undefined;
  let gusts = undefined;

  function updateDisplay() {
    if (disp) {
      disp["widgets"].forEach(w => {
        if (w.type === "temperature") {
          if (w.description === "Vestveggen ute" || w.description === "Østveggen ute") {
            temperatureBottom.push(w);
          } else if (w.description === "Stua" || w.description === "Boden") {
            temperatureTop.push(w);
          }
        } else if (w.type === "humidity") {
          humidity = w;
        } else if (w.type === "wind") {
            if (w.description === "Kast") {
              gusts = w;
            } else {
              wind = w;
            }
        }
      })
    }
  }

  updateDisplay()

  return (
    <>
      <Head>
        <title>Weather display</title>
        <meta name="description" content="Display for your Netatmo weather stations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HumidityWidget props={humidity} />
        <div className={styles.temperatureWidgets}>
          <TemperatureWidget className={styles.temperatureWidgetTop} widgets={temperatureTop} />
          <TemperatureWidget className={styles.temperatureWidgetBottom} widgets={temperatureBottom} />
        </div>
        <div className={styles.windWidgets}>
          <WindWidget className={styles.windWidgetLeft} props={wind}/>
          <WindWidget className={styles.windWidgetRight} props={gusts} />
        </div>
        <TimeWidget />
      </main>
    </>
  )
}

/* export async function getServerSideProps(context) {
  const config = JSON.parse(fs.readFileSync(path.join(process.cwd(), "app.config.json"), { endocoding: "utf8"}));
  return {
    props: {
      config
    }
  };
} */