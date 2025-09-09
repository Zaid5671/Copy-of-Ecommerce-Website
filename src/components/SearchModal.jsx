"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// The SearchModalProps interface is removed for JSX compatibility.
// PropTypes can be used for type-checking in JavaScript if needed.

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Type annotation for the event 'e' is removed.
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Handle search logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle className="font-noor text-2xl text-primary">
            Search Noor
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSearch} className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for sarees, lehengas, kurtas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4"
              autoFocus
            />
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" variant="noorPrimary" className="flex-1">
              Search
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>

        {/* Popular Searches */}
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["Silk Sarees", "Wedding Lehengas", "Cotton Kurtas", "Festival Wear"].map((term) => (
              <button
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-3 py-1 text-xs bg-surface hover:bg-surface-elevated rounded-full text-foreground-muted hover:text-foreground smooth-transition"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
