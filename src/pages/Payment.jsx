import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Smartphone, Building } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Handle payment logic here
      console.log("Payment processed with method:", paymentMethod);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Order Summary */}
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Silk Saree - Maroon</span>
                  <span>₹8,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lehenga - Golden</span>
                  <span>₹15,000</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span>Subtotal</span>
                  <span>₹23,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tax</span>
                  <span>₹2,350</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>₹25,850</span>
                </div>
              </CardContent>
            </Card>

            {/* Payment Form */}
            <Card className="elegant-shadow">
              <CardHeader>
                <CardTitle className="font-noor text-3xl text-primary">Complete Payment</CardTitle>
                <CardDescription>
                  Choose your preferred payment method
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePayment} className="space-y-6">
                  
                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Payment Method</Label>
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50">
                        <RadioGroupItem value="card" id="card" />
                        <CreditCard className="h-5 w-5 text-primary" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          Credit/Debit Card
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50">
                        <RadioGroupItem value="upi" id="upi" />
                        <Smartphone className="h-5 w-5 text-primary" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          UPI (PhonePe, Google Pay, Paytm)
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-surface/50">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Building className="h-5 w-5 text-primary" />
                        <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                          Net Banking
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Card Details (shown when card is selected) */}
                  {paymentMethod === "card" && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input
                            id="expiry"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Cardholder Name</Label>
                        <Input
                          id="cardName"
                          placeholder="Name on card"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* UPI Details */}
                  {paymentMethod === "upi" && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId">UPI ID</Label>
                        <Input
                          id="upiId"
                          placeholder="username@paytm"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Net Banking */}
                  {paymentMethod === "netbanking" && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="bank">Select Bank</Label>
                        <select className="w-full p-2 border rounded-md" required>
                          <option value="">Choose your bank</option>
                          <option value="sbi">State Bank of India</option>
                          <option value="hdfc">HDFC Bank</option>
                          <option value="icici">ICICI Bank</option>
                          <option value="axis">Axis Bank</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full" 
                    variant="noorPrimary"
                    disabled={isProcessing}
                    size="lg"
                  >
                    {isProcessing ? "Processing Payment..." : `Pay ₹25,850`}
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
};

export default Payment;