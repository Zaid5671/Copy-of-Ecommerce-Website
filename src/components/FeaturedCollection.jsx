import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import lehenga from "@/assets/lehenga-product.jpg";
import kurta from "@/assets/kurta-product.jpg";
import dupatta from "@/assets/dupatta-product.jpg";

const FeaturedCollections = () => {
  const collections = [
    {
      id: "sarees",
      name: "Sarees",
      description: "Timeless elegance in silk and cotton",
      image: "/placeholder.svg?height=600&width=400",
      link: "/collections/sarees"
    },
    {
      id: "lehengas",
      name: "Lehengas",
      description: "Royal grandeur for special occasions",
      image: lehenga,
      link: "/collections/lehengas"
    },
    {
      id: "kurtas",
      name: "Kurtas",
      description: "Contemporary comfort meets tradition",
      image: kurta,
      link: "/collections/kurtas"
    },
    {
      id: "dupattas",
      name: "Dupattas",
      description: "Finishing touches of grace",
      image: dupatta,
      link: "/collections/dupattas"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Genuinely Revolutionary.
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Natural craftsmanship that honors the cultural heritage of your wardrobe.
          </p>
        </div>

        {/* Collections Grid - Removed to show only 3 categories below */}
        
        {/* Shop by Categories Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-display text-primary mb-8">
            Shop by categories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.slice(1).map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg elegant-shadow group-hover:shadow-xl smooth-transition">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-classic-black/20 group-hover:bg-classic-black/30 smooth-transition"></div>
                  
                  <div className="absolute inset-6 flex flex-col justify-end">
                    <h4 className="font-display text-white text-xl font-medium mb-2">
                      {item.name}
                    </h4>
                    <p className="text-white/90 text-sm mb-4">
                      {item.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-classic-black w-fit"
                    >
                      Explore Collection
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;