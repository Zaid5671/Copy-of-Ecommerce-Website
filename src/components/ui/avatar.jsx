import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

// A simplified helper function to conditionally join Tailwind classes.
function cn(...inputs) {
  const classnames = inputs.flat().filter(Boolean).join(" ");
  return classnames.trim();
}

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// Example App component to demonstrate how to use the Avatar components.
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Avatar Component</h1>
      <div className="flex space-x-4">
        {/* Avatar with an image */}
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>

        {/* Avatar with a fallback (e.g., if image fails to load) */}
        <Avatar>
          <AvatarImage src="https://invalid-url.com/image.jpg" alt="@user" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        
        {/* Avatar with only a fallback */}
        <Avatar>
          <AvatarFallback>CD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default App;