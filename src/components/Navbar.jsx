import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDrawer from "@/components/CartDrawer";
import SearchModal from "@/components/SearchModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      {/* Top Banner */}
      <div className="bg-heritage text-heritage-foreground text-center py-2 text-sm">
        Glow in the light of culture, shine in the grace of Noor
      </div>
      
      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border elegant-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/collections" className="text-foreground hover-golden smooth-transition">
                Shop
              </Link>
              <Link to="/story" className="text-foreground hover-golden smooth-transition">
                Our Story
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex-1 flex justify-center md:flex-none">
              <Link to="/" className="font-noor text-2xl md:text-3xl hover-scale smooth-transition text-foreground">
                NOOR
              </Link>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/about" className="text-foreground hover-golden smooth-transition">
                  About
                </Link>
              </div>
              
              {/* Icons */}
              <Button variant="ghost" size="icon" className="hover:bg-primary/10" onClick={toggleSearch}>
                <Search className="h-5 w-5" />
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10">
                <Link to="/login">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
              <CartDrawer />
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-primary/10"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/collections" 
                className="block text-foreground hover-golden smooth-transition"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link 
                to="/story" 
                className="block text-foreground hover-golden smooth-transition"
                onClick={toggleMenu}
              >
                Our Story
              </Link>
              <Link 
                to="/about" 
                className="block text-foreground hover-golden smooth-transition"
                onClick={toggleMenu}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};

export default Navbar;