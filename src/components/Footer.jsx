import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-classic-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-3xl mb-4">
              Stay Connected with Noor
            </h3>
            <p className="text-white/80 mb-8">
              Be the first to know about new collections, styling tips, and exclusive offers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="btn-noor-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="noor-logo text-3xl text-primary mb-6">
              Noor
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Weaving heritage into elegance, one thread at a time. Discover the poetry in six yards.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Collections */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Collections</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/collections/sarees" className="text-white/80 hover:text-primary smooth-transition">
                  Sarees
                </Link>
              </li>
              <li>
                <Link href="/collections/lehengas" className="text-white/80 hover:text-primary smooth-transition">
                  Lehengas
                </Link>
              </li>
              <li>
                <Link href="/collections/kurtas" className="text-white/80 hover:text-primary smooth-transition">
                  Kurtas
                </Link>
              </li>
              <li>
                <Link href="/collections/dupattas" className="text-white/80 hover:text-primary smooth-transition">
                  Dupattas
                </Link>
              </li>
              <li>
                <Link href="/collections/festive" className="text-white/80 hover:text-primary smooth-transition">
                  Festive Edit
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-primary smooth-transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-white/80 hover:text-primary smooth-transition">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-white/80 hover:text-primary smooth-transition">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-white/80 hover:text-primary smooth-transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-white/80 hover:text-primary smooth-transition">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-white/80 hover:text-primary smooth-transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-white/80 hover:text-primary smooth-transition">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-white/80 hover:text-primary smooth-transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-white/80 hover:text-primary smooth-transition">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-primary smooth-transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Noor. All rights reserved. Crafted with love in India.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-primary smooth-transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-primary smooth-transition">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-primary smooth-transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;