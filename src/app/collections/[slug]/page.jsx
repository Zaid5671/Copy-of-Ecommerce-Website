// This is a placeholder for your dynamic product page.
// In a real app, you would fetch product data based on the slug.

// Dummy function to find product data by slug
// You should replace this with a proper API call or database query
const getProductBySlug = (slug) => {
    const productData = [
        { id: "1", name: "Royal Heritage Banarasi Saree", price: 45000, originalPrice: 55000, image: "/saree-product.jpg", category: "Sarees", isNew: false, isBestseller: true, fabric: "Pure Silk with Zari Work", description: "A masterpiece of Banarasi weaving..." },
        { id: "2", name: "Maharani Lehenga Set", price: 85000, originalPrice: 95000, image: "/lehenga-product.jpg", category: "Lehengas", isNew: true, isBestseller: false, fabric: "Velvet with Gold Embroidery", description: "Feel like royalty in this exquisite lehenga..." },
        { id: "3", name: "Elegant Silk Kurta Set", price: 12000, image: "/kurta-product.jpg", category: "Kurtas", isNew: false, isBestseller: true, fabric: "Pure Silk", description: "Timeless elegance meets modern comfort..." },
        { id: "4", name: "Heritage Chanderi Dupatta", price: 8500, image: "/dupatta-product.jpg", category: "Dupattas", isNew: true, isBestseller: false, fabric: "Chanderi with Zari Border", description: "The perfect accessory to complete your look..." },
        { id: "5", name: "Festive Silk Saree", price: 32000, image: "/saree-product.jpg", category: "Sarees", isNew: false, isBestseller: false, fabric: "Kanjivaram Silk", description: "Drape yourself in the rich tradition of Kanjivaram..." },
        { id: "6", name: "Bridal Lehenga Collection", price: 125000, image: "/lehenga-product.jpg", category: "Lehengas", isNew: true, isBestseller: true, fabric: "Heavy Silk with Handwork", description: "The ultimate bridal ensemble for your special day..." },
    ];
    
    const slugify = (text) => text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-').replace(/^-+/, '').replace(/-+$/, '');

    return productData.find(p => slugify(p.name) === slug);
}


export default function ProductDetailPage({ params }) {
  // The `params` object contains the dynamic route segments.
  // In this case, it will be { slug: 'royal-heritage-banarasi-saree' }
  const { slug } = params;

  // Find the product data using the slug
  const product = getProductBySlug(slug);

  if (!product) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl">Product not found!</h1>
        </div>
    );
  }

  return (
    // Remember to add your Navbar and Footer here for a consistent layout
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-xl text-gray-600 mb-6">{product.fabric}</p>
      <div className="text-3xl font-light mb-6">
        <span>₹{product.price.toLocaleString('en-IN')}</span>
        {product.originalPrice && (
            <span className="ml-4 text-xl text-gray-500 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
            </span>
        )}
      </div>
      <p>{product.description}</p>
      {/* Add more product details, image gallery, add to cart button, etc. here */}
    </div>
  );
}