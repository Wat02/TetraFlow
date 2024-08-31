import Hero from "@/components/landingPage/Hero";
import Navbar from "@/components/landingPage/Navbar";
import Contanct from "@/components/landingPage/Contanct";
import About from "@/components/landingPage/About";
import Testamonial from "@/components/landingPage/Testamonial";
import What from "@/components/landingPage/What";
import Ceo from "@/components/landingPage/Ceo";
import HowWork from "@/components/landingPage/HowWork";
import RightForMe from "@/components/landingPage/RightForMe";
import Faq from "@/components/landingPage/Faq";
import Footer from "@/components/landingPage/Footer";

export default function Home() {
  return (
    <section className="bg-[#0A0A0A]">
      <div>
        <Navbar />
        <Hero />
        <Contanct />
        <About />
        <Testamonial />
        <What />
        <Ceo />
        <HowWork />
        <RightForMe />
        <Faq />
        <Footer />
      </div>
    </section>
  );
}
