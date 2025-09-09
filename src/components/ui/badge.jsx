import React from "react";

// Minimal utility to join class names
function cn(...inputs) {
  const classnames = inputs.flat().filter(Boolean).join(" ");
  return classnames.trim();
}

// Badge variants similar to shadcn/ui
export function badgeVariants({ variant = "default" } = {}) {
  const base = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variants = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };
  return cn(base, variants[variant] || variants.default);
}

// The actual Badge component used across the app
export default function Badge({ className, variant = "default", ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
