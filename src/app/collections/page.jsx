"use client";

import React, { useState, useEffect, useMemo } from "react"; // Import useMemo
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Badge from "@/components/ui/badge";
import { Grid, List } from "lucide-react";

// ... (sareeImage, lehengaImage, etc. and slugify function remain the same) ...
const sareeImage = "/saree-product.jpg";
const lehengaImage = "/lehenga-product.jpg";
const kurtaImage = "/kurta-product.jpg";
const dupattaImage = "/dupatta-product.jpg";

const slugify = (text) => {
    return text.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
};

const Collections = () => {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get("category") || "all";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [sortBy, setSortBy] = useState("featured");
    const [viewMode, setViewMode] = useState("grid");

    useEffect(() => {
        const categoryFromURL = searchParams.get("category");
        if (categoryFromURL) {
            setSelectedCategory(categoryFromURL);
        }
    }, [searchParams]);

    const productData = [
        // ... (your product data remains the same) ...
        { id: "1", name: "Royal Heritage Banarasi Saree", price: 45000, originalPrice: 55000, image: sareeImage, category: "Sarees", isNew: false, isBestseller: true, fabric: "Pure Silk with Zari Work" },
        { id: "2", name: "Maharani Lehenga Set", price: 85000, originalPrice: 95000, image: lehengaImage, category: "Lehengas", isNew: true, isBestseller: false, fabric: "Velvet with Gold Embroidery" },
        { id: "3", name: "Elegant Silk Kurta Set", price: 12000, image: kurtaImage, category: "Kurtas", isNew: false, isBestseller: true, fabric: "Pure Silk" },
        { id: "4", name: "Heritage Chanderi Dupatta", price: 8500, image: dupattaImage, category: "Dupattas", isNew: true, isBestseller: false, fabric: "Chanderi with Zari Border" },
        { id: "5", name: "Festive Silk Saree", price: 32000, image: sareeImage, category: "Sarees", isNew: false, isBestseller: false, fabric: "Kanjivaram Silk" },
        { id: "6", name: "Bridal Lehenga Collection", price: 125000, image: lehengaImage, category: "Lehengas", isNew: true, isBestseller: true, fabric: "Heavy Silk with Handwork" },
    ];

    const products = productData.map(product => ({
        ...product,
        slug: slugify(product.name)
    }));

    const categories = ["all", "Sarees", "Lehengas", "Kurtas", "Dupattas"];

    // STEP 1: Filter products by category first
    const filteredProducts = selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory);

    // STEP 2: Sort the *filtered* products based on the sortBy state
    const sortedAndFilteredProducts = useMemo(() => {
        // We create a copy with [...filteredProducts] because .sort() mutates the array
        const sorted = [...filteredProducts];

        switch (sortBy) {
            case "price-low":
                return sorted.sort((a, b) => a.price - b.price);
            case "price-high":
                return sorted.sort((a, b) => b.price - a.price);
            // NOTE: For "newest" to work, your products would need a date property
            case "newest":
                return sorted; // No change for now
            case "featured":
            default:
                return sorted; // Default order
        }
    }, [sortBy, filteredProducts]); // This recalculates only when sortBy or filteredProducts changes


   return (
    <div className="min-h-screen">
        <Navbar />

        <section className="bg-surface py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">Discover Our Heritage</h1>
                <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                    Each piece in our collection tells a story of timeless craftsmanship and cultural heritage.
                </p>
            </div>
        </section>

        {/* This is the sticky filter bar section */}
        <section className="border-b border-border sticky top-[68px] bg-background/95 backdrop-blur-sm z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <Button key={category} variant={selectedCategory === category ? "noorPrimary" : "ghost"} size="sm" onClick={() => setSelectedCategory(category)} className="capitalize">
                                {category === "all" ? "All Collections" : category}
                            </Button>
                        ))}
                    </div>
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
                        {/* CORRECTED: The misplaced div has been removed from here */}
                        <div className="flex border border-border rounded-md">
                            <Button variant={viewMode === "grid" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("grid")} className="rounded-r-none">
                                <Grid className="h-4 w-4" />
                            </Button>
                            <Button variant={viewMode === "list" ? "default" : "ghost"} size="sm" onClick={() => setViewMode("list")} className="rounded-l-none">
                                <List className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
                {selectedCategory !== "all" && (
                    <div className="flex items-center gap-2 mt-4">
                        <span className="text-sm text-foreground-muted">Filtered by:</span>
                        <Badge variant="secondary" className="flex items-center gap-2">
                            {selectedCategory}
                            <button onClick={() => setSelectedCategory("all")} className="hover:text-destructive">
                                ×
                            </button>
                        </Badge>
                    </div>
                )}
            </div>
        </section>

        {/* This is the product list section */}
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* CORRECT: The conditional className is now applied to the correct container div */}
                <div className={
                    viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    : "flex flex-col gap-8"
                }>
                    {sortedAndFilteredProducts.map((product) => (
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
                            slug={product.slug}
                            viewMode={viewMode} // Don't forget to pass the prop!
                        />
                    ))}
                </div>

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

// ... (The rest of your component remains the same) ...
const CollectionsPage = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Collections />
    </React.Suspense>
);

export default CollectionsPage;