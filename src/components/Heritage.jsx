import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import familyImage from "@/assets/family-traditional.jpg";

const Heritage = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Preventing tradition from fading
            </h2>
            
            <div className="space-y-6 text-foreground-muted leading-relaxed">
              <p>
                Have you ever noticed how each thread in a handwoven saree tells a story? 
                This is heritage—and it's more precious than you think. Our artisans preserve 
                centuries-old techniques that connect us to our cultural roots.
              </p>
              
              <p>
                Discover what makes authentic craftsmanship special and how it enriches 
                your wardrobe, in our latest Heritage Journal article.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild variant="noorOutline" size="lg">
                <Link to="/heritage">Read the Heritage Journal</Link>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden elegant-shadow">
              <img
                src={familyImage}
                alt="Indian family in traditional ethnic wear showcasing heritage"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full golden-gradient opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full heritage-gradient opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;