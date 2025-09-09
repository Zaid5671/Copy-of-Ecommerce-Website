import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const lehenga = "/lehenga-product.jpg";
const kurta = "/kurta-product.jpg";
const dupatta = "/dupatta-product.jpg";
const saree = "/saree-product.jpg"; // Added saree image for completeness

const FeaturedCollections = () => {
  const collections = [
    {
      id: "sarees",
      name: "Sarees",
      description: "Timeless elegance in silk and cotton",
      image: saree,
      link: "/collections?category=Sarees", // Updated Link
    },
    {
      id: "lehengas",
      name: "Lehengas",
      description: "Royal grandeur for special occasions",
      image: lehenga,
      link: "/collections?category=Lehengas", // Updated Link
    },
    {
      id: "kurtas",
      name: "Kurtas",
      description: "Contemporary comfort meets tradition",
      image: kurta,
      link: "/collections?category=Kurtas", // Updated Link
    },
    {
      id: "dupattas",
      name: "Dupattas",
      description: "Finishing touches of grace",
      image: dupatta,
      link: "/collections?category=Dupattas", // Updated Link
    },
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

        {/* Shop by Categories Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-display text-primary mb-8">
            Shop by categories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sliced to show Lehengas, Kurtas, Dupattas */}
            {collections.slice(1, 4).map((item) => (
              <Link key={item.id} href={item.link} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-lg elegant-shadow group-hover:shadow-xl smooth-transition">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 smooth-transition"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

