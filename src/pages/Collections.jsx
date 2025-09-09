import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid, List } from "lucide-react";

import sareeImage from "@/assets/saree-product.jpg";
import lehengaImage from "@/assets/lehenga-product.jpg";
import kurtaImage from "@/assets/kurta-product.jpg";
import dupattaImage from "@/assets/dupatta-product.jpg";

const Collections = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  const products = [
    {
      id: "1",
      name: "Royal Heritage Banarasi Saree",
      price: 45000,
      originalPrice: 55000,
      image: sareeImage,
      category: "Sarees",
      isNew: false,
      isBestseller: true,
      fabric: "Pure Silk with Zari Work"
    },
    {
      id: "2",
      name: "Maharani Lehenga Set",
      price: 85000,
      originalPrice: 95000,
      image: lehengaImage,
      category: "Lehengas",
      isNew: true,
      isBestseller: false,
      fabric: "Velvet with Gold Embroidery"
    },
    {
      id: "3",
      name: "Elegant Silk Kurta Set",
      price: 12000,
      image: kurtaImage,
      category: "Kurtas",
      isNew: false,
      isBestseller: true,
      fabric: "Pure Silk"
    },
    {
      id: "4",
      name: "Heritage Chanderi Dupatta",
      price: 8500,
      image: dupattaImage,
      category: "Dupattas",
      isNew: true,
      isBestseller: false,
      fabric: "Chanderi with Zari Border"
    },
    {
      id: "5",
      name: "Festive Silk Saree",
      price: 32000,
      image: sareeImage,
      category: "Sarees",
      isNew: false,
      isBestseller: false,
      fabric: "Kanjivaram Silk"
    },
    {
      id: "6",
      name: "Bridal Lehenga Collection",
      price: 125000,
      image: lehengaImage,
      category: "Lehengas",
      isNew: true,
      isBestseller: true,
      fabric: "Heavy Silk with Handwork"
    }
  ];

  const categories = ["all", "Sarees", "Lehengas", "Kurtas", "Dupattas"];
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
            Discover Our Heritage
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Each piece in our collection tells a story of timeless craftsmanship and cultural heritage.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category === "all" ? "All Collections" : category}
                </Button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border border-border rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-r-none"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-l-none"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {selectedCategory !== "all" && (
            <div className="flex items-center gap-2 mt-4">
              <span className="text-sm text-foreground-muted">Filtered by:</span>
              <Badge variant="secondary" className="flex items-center gap-2">
                {selectedCategory}
                <button 
                  onClick={() => setSelectedCategory("all")}
                  className="hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                isNew={product.isNew}
                isBestseller={product.isBestseller}
                fabric={product.fabric}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-12">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;