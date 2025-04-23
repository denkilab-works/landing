"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";

const projects = {
  web: [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with inventory management and payment processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Node.js", "MongoDB"],
    },
    {
      title: "Healthcare Dashboard",
      description:
        "An analytics dashboard for healthcare providers to monitor patient data and outcomes.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "D3.js"],
    },
  ],
  mobile: [
    {
      title: "Fitness Tracking App",
      description:
        "A mobile application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      title: "Food Delivery App",
      description:
        "A food delivery platform connecting local restaurants with customers.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Flutter", "Node.js", "PostgreSQL"],
    },
  ],
  design: [
    {
      title: "Financial Services Redesign",
      description:
        "A complete UX/UI overhaul for a financial services platform.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Figma", "UI/UX", "Design System"],
    },
    {
      title: "Travel Booking Interface",
      description:
        "An intuitive booking interface for a travel agency with focus on accessibility.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Adobe XD", "Prototyping", "User Testing"],
    },
  ],
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="portfolio" className="py-20 md:py-28 w-full bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              Our <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our recent projects and see how we've helped businesses
              transform their digital presence.
            </p>
          </motion.div>
        </div>

        <div ref={ref}>
          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="web">Web Applications</TabsTrigger>
                <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
                <TabsTrigger value="design">UI/UX Design</TabsTrigger>
              </TabsList>
            </div>

            {Object.entries(projects).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {items.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <h3 className="text-xl font-bold">
                              {project.title}
                            </h3>
                            <Button variant="ghost" size="icon" asChild>
                              <Link
                                href="#"
                                aria-label={`View ${project.title} project`}
                              >
                                <HiArrowTopRightOnSquare className="h-5 w-5" />
                              </Link>
                            </Button>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs bg-secondary px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
