"use client";
import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import FestiveBanner from "@/components/FestiveBanner";
import Testimonials from "@/components/Testimonials";
import Heritage from "@/components/Heritage";
import Footer from "@/components/Footer";

const Home = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  return (
    <>
      {showLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {!showLoading && (
        <div className="min-h-screen">
          <Navbar />
          <main>
            <HeroSection />
            <FeaturedCollections />
            <Heritage />
            <FestiveBanner />
            <Testimonials />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
