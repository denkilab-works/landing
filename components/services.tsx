"use client"

import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Smartphone, Globe, Palette, Database, Server, LineChart, Code, Zap } from "lucide-react"

const services = [
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Mobile Development",
    description:
      "Fast, beautiful Flutter apps for iOS and Android with seamless user experiences and native performance.",
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Web Development",
    description:
      "Modern web applications using React, Next.js, and Angular with responsive designs and optimized performance.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging, and accessible digital experiences.",
  },
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: "Backend Development",
    description: "Powerful backend solutions using Rust, Python, Go, and Node.js for high-performance applications.",
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "Cloud Services",
    description: "Cloud infrastructure setup and management on AWS, Azure, and Google Cloud Platform.",
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Database Solutions",
    description: "Scalable database architecture with SQL and NoSQL solutions optimized for performance.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-primary" />,
    title: "Analytics & AI",
    description: "Data analytics solutions and AI integration to drive business intelligence and automation.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Rapid Development",
    description: "Agile processes and efficient workflows that deliver high-quality products in record time.",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-20 md:py-28 w-full bg-secondary/20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We offer a comprehensive range of software development services to help your business thrive in the
              digital landscape.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
