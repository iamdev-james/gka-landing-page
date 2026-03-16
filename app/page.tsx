import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import AcademicsGrid from "@/components/AcademicsGrid";
import MissionBanner from "@/components/MissionBanner";
import GallerySection from "@/components/GallerySection";
import NewsSection from "@/components/NewsSection";
import CalendarSection from "@/components/CalendarSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StorySection />
        <AcademicsGrid />
        <MissionBanner />
        <GallerySection />
        <NewsSection />
        <CalendarSection />
        <AdmissionsCTA />
      </main>
      <Footer />
    </>
  );
}
