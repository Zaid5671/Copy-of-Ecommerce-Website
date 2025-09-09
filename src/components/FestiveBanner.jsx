import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FestiveBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with festive gradient */}
      <div className="absolute inset-0 royal-gradient"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="mandala-glow w-[600px] h-[600px] rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-8 w-8 text-primary-foreground mr-3" />
          <span className="text-primary-foreground/90 text-lg font-medium tracking-wide">
            FESTIVE COLLECTION 2024
          </span>
          <Sparkles className="h-8 w-8 text-primary-foreground ml-3" />
        </div>
        
        <h2 className="font-display text-4xl md:text-6xl text-primary-foreground mb-6 leading-tight">
          Shop the Festive Edit
        </h2>
        
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Celebrate the season of lights with our curated collection of handcrafted pieces. 
          Perfect for Diwali, weddings, and special occasions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            variant="secondary"
            size="lg"
            className="bg-white text-accent hover:bg-white/90 px-8 py-4 text-lg font-medium"
          >
            <Link href="/collections/festive">Explore Festive Collection</Link>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 text-lg font-medium"
          >
            <Link href="/gift-guide">Gift Guide</Link>
          </Button>
        </div>
        
        {/* Special offer */}
        <div className="mt-8 text-primary-foreground/80">
          <p className="text-sm">✨ Free shipping on orders above ₹25,000 ✨</p>
        </div>
      </div>
    </section>
  );
};

export default FestiveBanner;