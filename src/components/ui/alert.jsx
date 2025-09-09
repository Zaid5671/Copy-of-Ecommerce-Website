import React from "react";
import { cva } from "class-variance-authority";

// Helper function to conditionally join Tailwind classes.
function cn(...inputs) {
  const classnames = inputs.flat().filter(Boolean).join(" ");
  return classnames.trim();
}

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5 ref={ref} className={cn("mb-1 font-medium leading-none tracking-tight", className)} {...props} />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

// An example App component demonstrating how to use the Alert components.
const App = () => {
  return (
    <div className="flex flex-col gap-4 p-8 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <h1 className="text-2xl font-bold mb-4">Alert Components</h1>
      
      <Alert variant="default" className="max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.855l-.853 1.066a.25.25 0 01-.444-.252l.853-1.066a.75.75 0 01.855-1.063zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and a custom style to your site using this code.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive" className="max-w-md mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.174 3.352 1.963 3.352h14.884c1.789 0 2.829-1.852 1.964-3.352L13.75 4.99a2.25 2.25 0 00-3.5 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <AlertTitle>Error!</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default App;
