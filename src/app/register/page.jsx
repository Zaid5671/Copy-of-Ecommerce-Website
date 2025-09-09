"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Import the useRouter hook
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic here
      console.log("Registration successful with:", { username, email, password });
      
      // Redirect to the homepage after successful registration
      router.push("/"); 
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="elegant-shadow">
            <CardHeader className="text-center">
              <CardTitle className="noor-logo text-3xl text-primary mb-2">Create an Account</CardTitle>
              <CardDescription>Join the Noor family to start your journey</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <Button type="submit" className="w-full" variant="noorPrimary" disabled={isLoading}>
                  {isLoading ? "Creating Account..." : "Register"}
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">Google</Button>
                  <Button variant="outline" className="w-full">Facebook</Button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-muted-foreground">Already have an account? </span>
                <Link href="/login" className="font-medium text-primary hover:underline">Sign in</Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;

