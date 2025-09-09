"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-8">
            Our Story
          </h1>
          <p className="text-xl text-foreground-muted leading-relaxed">
            Born from a passion for preserving India's rich textile heritage while embracing contemporary elegance.
          </p>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Origin Story */}
          <div className="mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Weaving Dreams into Reality
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground-muted leading-relaxed mb-6">
                Noor was born from a simple yet profound belief: that traditional Indian craftsmanship 
                deserves a place in the modern wardrobe. Our founder, inspired by her grandmother's 
                collection of handwoven sarees, saw the need to bridge the gap between heritage and 
                contemporary fashion.
              </p>
              <p className="text-foreground-muted leading-relaxed mb-6">
                Each piece in our collection is more than just clothing—it's a story woven in silk, 
                a memory embroidered in gold, a tradition passed down through generations of skilled 
                artisans who pour their heart into every thread.
              </p>
            </div>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16 bg-surface rounded-lg p-8 md:p-12">
            <h2 className="font-display text-3xl text-foreground mb-8 text-center">
              Philosophy & Craftsmanship
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl text-primary mb-4">Heritage First</h3>
                <p className="text-foreground-muted">
                  We work exclusively with master weavers and artisans who have inherited their 
                  craft through generations, ensuring authenticity in every stitch.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-4">Quality Uncompromised</h3>
                <p className="text-foreground-muted">
                  From the finest silk threads to the purest gold zari, we source only premium 
                  materials that honor the tradition of luxury Indian textiles.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-4">Timeless Design</h3>
                <p className="text-foreground-muted">
                  Our designs blend classical motifs with contemporary silhouettes, creating 
                  pieces that are both rooted in tradition and relevant today.
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl text-primary mb-4">Cultural Pride</h3>
                <p className="text-foreground-muted">
                  Every Noor creation celebrates the rich cultural heritage of India while 
                  empowering the artisan communities that keep these traditions alive.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="font-display text-3xl text-foreground mb-6">
              Experience the Noor Difference
            </h2>
            <p className="text-foreground-muted mb-8 max-w-2xl mx-auto">
              Join us in celebrating the artistry of Indian fashion. Discover pieces that don't 
              just dress you, but tell your story with grace and authenticity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="noorPrimary" size="lg">
                <Link href="/collections">Explore Collections</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sustainability">Learn About Sustainability</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
