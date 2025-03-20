import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import Header from "./components/header";
import DreamWithUs from "./components/HeroSection";
import CustomerExperience from "./components/CustomerExperience";
import BussinessPartner from "./components/BussinessPartner";
import IPDCSection from "./components/IPDCSection";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>IPDC Finance - Chase Your Dream</title>
        <meta
          name="description"
          content="The harder you work for something, the greater you'll feel when you achieve it."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Finance, Loans, Home Loans, Car Loans" />
      </Head>
      <Header />

      <main>
        <DreamWithUs />
        <CustomerExperience />
        <BussinessPartner />
        <IPDCSection />
        <Newsletter />
      </main>
      <footer className="bg-white py-10">
        <Footer />
      </footer>
    </>
  );
}
