import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { PainSolutionSection } from "@/components/PainSolutionSection";
import { MechanismSection } from "@/components/MechanismSection";
import { DistributionSection } from "@/components/DistributionSection";
import { TokensSection } from "@/components/TokensSection";
import { ReferralSection } from "@/components/ReferralSection";
import { NodesSection } from "@/components/NodesSection";
import { BackingSection } from "@/components/BackingSection";
import { Footer } from "@/components/Footer";
import { AnnouncementModal } from "@/components/AnnouncementModal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsStrip />
        <PainSolutionSection />
        <MechanismSection />
        <DistributionSection />
        <TokensSection />
        <ReferralSection />
        <NodesSection />
        <BackingSection />
      </main>
      <Footer />
      <AnnouncementModal />
    </>
  );
}
