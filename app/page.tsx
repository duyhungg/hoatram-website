import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import StatsSection from "@/components/StatsSection";
import ProductShowcase from "@/components/ProductShowcase";
import CropSolutionsSection from "@/components/CropSolutionsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConsultationForm from "@/components/ConsultationForm";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-brand-primary selection:text-white">
      {/* Navigation Bar with Official Logo */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with GSAP Stagger, Floating Badges & Logo Centerpiece */}
        <HeroSection />

        {/* Brand Story & Core Values (Về Hòa Tràm) */}
        <BrandStory />

        {/* Impressive Performance & Stats Section with GSAP Counter */}
        <StatsSection />

        {/* Full Fertilizer & Plant Protection Products with Filter Tabs */}
        <ProductShowcase />

        {/* Specialized Solutions by Crops with 3-Stage Treatment Protocols */}
        <CropSolutionsSection />

        {/* Why Choose Hoa Tram - Quality Commitments & Dealer Benefits */}
        <WhyChooseUs />

        {/* Farmer & Dealer Real Reviews and Testimonials */}
        <TestimonialsSection />

        {/* Dealer Registration & Field Consultation Lead Form */}
        <ConsultationForm />
      </main>

      {/* Footer with Official Logo & Environmental Message */}
      <Footer />

      {/* Quick Dial & Zalo Floating Buttons */}
      <FloatingContact />
    </div>
  );
}
