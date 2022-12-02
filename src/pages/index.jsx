import Head from "next/head";
import Header from "../components/Header";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Head>
        <title> Marcelo Mafra - Website</title>
      </Head>
      <main>
        <Header />
        <article>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
        </article>
        <Footer />
      </main>
    </>
  );
}

export default Home;
