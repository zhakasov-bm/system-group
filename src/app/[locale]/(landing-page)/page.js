import HeroSection from "./components/HeroSection";
import PartnerSlider from "./components/PartnerSlider";
import About from "./components/About";
import Solutions from "./components/Solutions";
import LeadMagnet from "./components/LeadMagnet";
import WorkFlow from "./components/WorkFlow";
import Advantages from "./components/Advantages";
import Statistic from "./components/Statistic";
import Vendors from "./components/Vendors";
import RequestForm from "./components/RequestForm";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <PartnerSlider />
      <About />
      <Statistic />
      <Solutions />
      <LeadMagnet />
      <WorkFlow />
      <Advantages />
      <Vendors />
      <RequestForm />
    </div>
  );
}
