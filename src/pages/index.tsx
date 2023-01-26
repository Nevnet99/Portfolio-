import AnimateIntoView from "@animations/AnimateIntoView/AnimateIntoView";
import IntroTitle from "@organisms/IntroTitle/IntroTitle";
import RootLayout from "@templates/RootLayout/RootLayout";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <RootLayout>
          <IntroTitle>
            <IntroTitle.Title>
              <AnimateIntoView once={false}>
                LUKE <br /> BRANNAGAN
              </AnimateIntoView>
            </IntroTitle.Title>
            <AnimateIntoView once={false} inViewVariant={{ y: 30 }}>
              <IntroTitle.Subtitle>FRONTEND DEVELOPER</IntroTitle.Subtitle>
            </AnimateIntoView>
            <IntroTitle.Video src="/videos/splash.mp4" autoPlay muted loop />
          </IntroTitle>
        </RootLayout>
      </main>
    </>
  );
}
