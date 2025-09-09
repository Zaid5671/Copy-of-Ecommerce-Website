import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover golden-shadow smooth-transition",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover smooth-transition",
        ghost: "hover:bg-primary/10 hover:text-primary smooth-transition",
        link: "text-primary underline-offset-4 hover:underline",
        // Noor-specific variants
        noorPrimary: "golden-gradient text-primary-foreground hover:opacity-90 smooth-transition golden-shadow hover-glow",
        noorSecondary: "royal-gradient text-secondary-foreground hover:opacity-90 smooth-transition",
        noorHeritage: "heritage-gradient text-heritage-foreground hover:opacity-90 smooth-transition",
        noorOutline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition",
        noorGhost: "text-primary hover:bg-primary/10 smooth-transition hover-golden",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
