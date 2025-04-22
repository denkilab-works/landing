"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Zap } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    "Small, agile team of 3 developers",
    "Fast turnaround times",
    "Focused on quality code",
    "Direct communication with developers",
    "Continuous delivery approach",
    "Passion for new technologies",
  ]

  return (
    <section id="about" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto lg:mx-0 overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Our team working together"
                width={600}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-4xl font-bold font-heading">3</p>
              <p className="text-muted-foreground">Passionate developers building amazing products</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              About <span className="gradient-text">DenkiLab</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              We're a small team of passionate developers who do what we love — creating exceptional digital products
              with speed and precision. Our name "DenkiLab" combines the Japanese word for electricity (Denki) with
              "Lab" to represent our fast, energetic approach to development.
            </p>

            <p className="text-lg text-muted-foreground">
              Being a compact team allows us to move quickly, communicate effectively, and deliver results without the
              overhead of larger agencies. We specialize in Flutter for mobile, modern web frameworks, and powerful
              backend solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
