"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentSuccessPage() {
  const [order, setOrder] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrderSummary');
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
      // localStorage.removeItem('lastOrderSummary'); // <-- REMOVE THIS LINE
    } else {
      // This part now correctly runs only if the user navigates here directly
      router.replace('/');
    }
  }, [router]);

  if (!order) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="elegant-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 rounded-full p-3 w-fit">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="font-display text-3xl mt-4">Payment Successful!</CardTitle>
              <p className="text-muted-foreground">Thank you for your order. A confirmation has been sent to your email.</p>
            </CardHeader>
            <CardContent>
              <Separator className="my-6" />
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-3">
                 {order.items.map((item, index) => (
                   <div key={index} className="flex justify-between items-center text-muted-foreground">
                    <span>{item.name}</span>
                    <span>₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total Paid</span>
                  <span>₹{order.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="noorPrimary" className="w-full">
                  <Link href="/collections">Shop More</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/">Go to Homepage</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
}