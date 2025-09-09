import { Star, Quote } from "lucide-react";
import Image from "next/image";
const priyaImage = "/customer-priya.jpg";
const ananyaImage = "/customer-ananya.jpg";
const kavyaImage = "/customer-kavya.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The quality of the saree I received was beyond my expectations. The silk feels luxurious and the embroidery is absolutely stunning. Noor has become my go-to for special occasions.",
      image: priyaImage
    },
    {
      id: 2,
      name: "Ananya Patel",
      location: "Delhi",
      rating: 5,
      text: "I bought a lehenga for my sister's wedding and received countless compliments. The craftsmanship is impeccable and the fit was perfect. Worth every penny!",
      image: ananyaImage
    },
    {
      id: 3,
      name: "Kavya Reddy",
      location: "Bangalore",
      rating: 5,
      text: "Noor's commitment to sustainability and supporting artisans makes me feel good about my purchases. The kurta set I ordered is not just beautiful but also ethically made.",
      image: kavyaImage
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Stories from women who have found their perfect piece at Noor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-card rounded-lg p-8 elegant-shadow hover:shadow-xl smooth-transition"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-primary mb-4" />
              </div>
              
              <p className="text-foreground-muted leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-foreground-muted">{testimonial.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-foreground-muted">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-medium">4.9/5</span>
            <span>from 2,847+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;