import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-saree.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-classic-black/30"></div>
      </div>
      
      {/* Mandala Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mandala-glow w-[800px] h-[800px] rounded-full"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Main Title */}
          <h1 className="font-noor text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
            Noor
          </h1>
          
          {/* Tagline */}
          <h2 className="font-display text-2xl md:text-4xl text-white/90 mb-4 font-light">
            Weaving Heritage into Elegance
          </h2>
          
          {/* Quote */}
          <p className="font-display italic text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            "We don't just make clothes, we weave legacies."
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="btn-noor-primary px-8 py-3 text-lg hover-glow smooth-transition"
            >
              <Link to="/collections">Shop Collections</Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="btn-noor-outline px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-classic-black"
            >
              <Link to="/story">Learn Our Story</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;