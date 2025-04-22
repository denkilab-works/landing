"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Zap, Smartphone, Globe } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-3 py-1 rounded-full w-fit">
              <span className="text-xs font-medium text-primary">Fast & Innovative Solutions</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              We Build <span className="gradient-text">Digital Products</span> At Lightning Speed
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              A small team of passionate developers creating cutting-edge mobile and web applications. We bring your
              ideas to life quickly and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">View Our Work</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className="absolute top-0 left-1/4 p-4 bg-secondary rounded-lg shadow-lg"
              >
                <Smartphone className="h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Flutter Apps</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/3 right-0 p-4 bg-secondary rounded-lg shadow-lg"
              >
                <Globe className="h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">React & Next.js</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.5, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 p-4 bg-secondary rounded-lg shadow-lg"
              >
                <Zap className="h-8 w-8 text-primary" />
                <p className="mt-2 text-sm font-medium">Rapid Delivery</p>
              </motion.div>

              {/* Central element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <div className="w-36 h-36 bg-secondary rounded-full flex items-center justify-center gradient-border">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 pt-10 border-t border-border/50"
        >
          <p className="text-sm text-muted-foreground text-center mb-6">Trusted by innovative companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {["TechCorp", "InnovateLabs", "FutureSoft", "DataSystems", "CloudNine"].map((company, index) => (
              <div key={index} className="text-lg font-heading font-semibold">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
