import React from "react";

// A simplified helper function to conditionally join Tailwind classes.
function cn(...inputs) {
  const classnames = inputs.flat().filter(Boolean).join(" ");
  return classnames.trim();
}

// A simple implementation of the `badgeVariants` function from class-variance-authority.
// This allows the component to be self-contained and runnable.
function badgeVariants({ variant = "default" }) {
  const baseStyles = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variantStyles = {
    default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };
  return cn(baseStyles, variantStyles[variant]);
}

function Badge({ className, variant, ...props }) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

// An example App component to demonstrate how to use the different Badge variants.
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Badge Components</h1>
      <div className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge>Another Default</Badge>
      </div>
    </div>
  );
};

export default App;
