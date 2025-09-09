import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, X, Plus, Minus } from "lucide-react";

// Note: The 'CartItem' interface has been removed as it is a TypeScript feature.
// In JSX/JS, you would typically use PropTypes for type checking if needed.

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Type annotation <CartItem[]> removed from useState for JSX compatibility.
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Royal Heritage Banarasi Saree",
      price: 45000,
      image: "/placeholder.svg?height=200&width=150",
      quantity: 1,
      size: "Free Size",
    },
  ]);

  // Type annotations (id: string, newQuantity: number) removed from function parameters.
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

  // Type annotation (id: string) removed from function parameter.
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

      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-xl">Shopping Bag</SheetTitle>
        </SheetHeader>
        <SheetDescription>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.size}</p>
                    <p>{item.price}</p>
                  </Link>
                  <div>
                    <Button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity === 1}
                    >
                      <Minus />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus />
                    </Button>
                    <Button onClick={() => removeItem(item.id)}>
                      <X />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;