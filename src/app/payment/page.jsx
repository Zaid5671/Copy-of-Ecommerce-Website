"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import the router
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Building, Loader2 } from "lucide-react"; // Added Loader2 for processing state
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter(); // Initialize the router

  // Define order details as an object to pass to the success page
  const orderDetails = {
    items: [
      { name: "Silk Saree - Maroon", price: 8500 },
      { name: "Lehenga - Golden", price: 15000 },
    ],
    subtotal: 23500,
    shipping: "Free",
    tax: 2350,
    total: 25850,
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Store order details in localStorage to access on the next page
    localStorage.setItem('lastOrderSummary', JSON.stringify(orderDetails));

    // Simulate payment processing time
    setTimeout(() => {
      // Redirect to the payment success page
      router.push('/payment-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderDetails.items.map((item, index) => (
                   <div key={index} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span>₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span>₹{orderDetails.subtotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span>{orderDetails.shipping}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax</span>
                  <span>₹{orderDetails.tax.toLocaleString('en-IN')}</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>₹{orderDetails.total.toLocaleString('en-IN')}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="font-noor text-3xl text-primary">Complete Payment</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  <div className="space-y-3">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50 cursor-pointer has-[input:checked]:border-primary has-[input:checked]:ring-1 has-[input:checked]:ring-primary">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="h-5 w-5 text-primary" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">Credit/Debit Card</Label>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50 cursor-pointer has-[input:checked]:border-primary has-[input:checked]:ring-1 has-[input:checked]:ring-primary">
                        <RadioGroupItem value="upi" id="upi" />
                        <Smartphone className="h-5 w-5 text-primary" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">UPI (PhonePe, Google Pay, Paytm)</Label>
                      </div>
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50 cursor-pointer has-[input:checked]:border-primary has-[input:checked]:ring-1 has-[input:checked]:ring-primary">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Building className="h-5 w-5 text-primary" />
                        <Label htmlFor="netbanking" className="flex-1 cursor-pointer">Net Banking</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {paymentMethod === "card" && (
                     <div className="space-y-4 border-t pt-4 animate-in fade-in-20">
                        {/* Card input fields... */}
                     </div>
                  )}

                  {paymentMethod === "upi" && (
                    <div className="space-y-4 border-t pt-4 animate-in fade-in-20">
                        {/* UPI input fields... */}
                    </div>
                  )}

                  {paymentMethod === "netbanking" && (
                    <div className="space-y-4 border-t pt-4 animate-in fade-in-20">
                      {/* Netbanking fields... */}
                    </div>
                  )}

                  <Button type="submit" className="w-full" variant="noorPrimary" disabled={isProcessing} size="lg">
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing Payment...
                      </>
                    ) : `Pay ₹${orderDetails.total.toLocaleString('en-IN')}`}
                  </Button>
                </form>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Your payment information is secured with 256-bit SSL encryption.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}