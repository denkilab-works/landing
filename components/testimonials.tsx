"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, useInView } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "ByteForge transformed our business with a custom e-commerce platform that increased our online sales by 200% in just six months.",
    author: "Sarah Johnson",
    role: "CEO, FashionRetail",
    avatar: "SJ",
  },
  {
    quote:
      "The team's technical expertise and attention to detail resulted in a mobile app that our customers love. The user experience is seamless.",
    author: "Michael Chen",
    role: "Product Manager, TravelEase",
    avatar: "MC",
  },
  {
    quote:
      "Working with ByteForge was a game-changer for our healthcare platform. They delivered a secure, HIPAA-compliant solution on time and within budget.",
    author: "Dr. Emily Rodriguez",
    role: "CTO, HealthConnect",
    avatar: "ER",
  },
  {
    quote:
      "Their approach to UI/UX design completely transformed our user engagement metrics. The new interface is intuitive and beautiful.",
    author: "David Wilson",
    role: "Marketing Director, TechSolutions",
    avatar: "DW",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              Client <span className="gradient-text">Testimonials</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to
              say about working with us.
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <FaQuoteLeft className="h-8 w-8 text-primary mb-4 opacity-70" />
                  <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40&text=${testimonial.avatar}`}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
