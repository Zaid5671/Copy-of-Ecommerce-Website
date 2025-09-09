"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Royal Heritage Banarasi Saree",
      price: 45000,
      image: "/saree-product.jpg", // Path relative to /public
      quantity: 1,
      size: "Free Size",
    },
     {
      id: "2",
      name: "Maharani Lehenga Set",
      price: 85000,
      image: "/lehenga-product.jpg", // Path relative to /public
      quantity: 1,
      size: "M",
    },
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems((items) => items.filter((item) => item.id !== id));
    } else {
      setCartItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-primary/10 relative"
        >
          <ShoppingBag className="h-5 w-5" />
          {totalItems > 0 && (
            <Badge className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs h-5 w-5 flex items-center justify-center rounded-full p-0">
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Shopping Bag ({totalItems})</SheetTitle>
          <SheetDescription>
            Your curated collection awaits checkout.
          </SheetDescription>
        </SheetHeader>
        
        {/* Main content area */}
        <div className="flex-1 overflow-y-auto pr-4 -mr-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button variant="link" asChild className="mt-2" onClick={() => setIsOpen(false)}>
                    <Link href="/collections">Start Shopping</Link>
                </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {cartItems.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative h-24 w-20 rounded-md overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      layout="fill"
                      objectFit="cover"
                      className="bg-muted"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <Link href={`/product/${item.id}`} className="font-medium hover:underline">{item.name}</Link>
                      <p className="text-sm text-muted-foreground">{item.size}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                       <p className="text-sm font-semibold">₹{item.price.toLocaleString()}</p>
                    </div>
                  </div>
                   <Button variant="ghost" size="icon" className="h-7 w-7 self-start" onClick={() => removeItem(item.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer with Checkout button */}
        {cartItems.length > 0 && (
            <SheetFooter className="border-t pt-6 mt-auto">
                <div className="w-full space-y-4">
                    <div className="flex justify-between font-medium">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Shipping and taxes calculated at checkout.</p>
                    <Button asChild size="lg" className="w-full btn-noor-primary">
                        <Link href="/payment">Proceed to Checkout</Link>
                    </Button>
                </div>
            </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
