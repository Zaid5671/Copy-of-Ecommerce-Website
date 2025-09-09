import { useState } from "react";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// The 'ProductCardProps' interface has been removed for JSX compatibility.
const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  category,
  isNew,
  isBestseller,
  fabric
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Type annotation for the event 'e' has been removed.
  const handleWishlist = (e) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
  };

  // Type annotation for the event 'e' has been removed.
  const handleQuickView = (e) => {
    e.preventDefault();
    // TODO: Implement quick view modal
    console.log("Quick view:", id);
  };

  // Type annotation for the event 'e' has been removed.
  const handleAddToCart = (e) => {
    e.preventDefault();
    // TODO: Implement add to cart
    console.log("Add to cart:", id);
  };

  return (
    <div 
      className="group relative bg-card rounded-lg overflow-hidden elegant-shadow hover:shadow-xl smooth-transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-heritage text-heritage-foreground">New</Badge>
          )}
          {isBestseller && (
            <Badge className="bg-accent text-accent-foreground">Bestseller</Badge>
          )}
        </div>
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          onClick={handleWishlist}
        >
          <Heart 
            className={`h-4 w-4 ${isWishlisted ? 'fill-accent text-accent' : 'text-foreground'}`} 
          />
        </Button>
        
        {/* Hover Actions */}
        <div className={`absolute inset-x-3 bottom-3 flex gap-2 smooth-transition ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 bg-white/90 hover:bg-white text-foreground"
            onClick={handleQuickView}
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
          <Button
            className="flex-1 btn-noor-primary"
            size="sm"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <div className="text-sm text-foreground-muted mb-1">{category}</div>
        <h3 className="font-display text-lg font-medium text-foreground mb-2 line-clamp-2">
          {name}
        </h3>
        
        {fabric && (
          <div className="text-sm text-foreground-subtle mb-2">{fabric}</div>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold text-primary">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-foreground-muted line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
