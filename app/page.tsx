import type { Metadata } from "next"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import CTA from "@/components/cta"
import BlogPreview from "@/components/blog-preview"

export const metadata: Metadata = {
  title: "DenkiLab | Modern Software Development Agency",
  description:
    "We build cutting-edge web and mobile applications using the latest technologies. Transform your business with our expert software development services.",
  keywords: "software development, web development, mobile apps, flutter, react, nextjs, software agency",
  openGraph: {
    title: "DenkiLab | Modern Software Development Agency",
    description: "We build cutting-edge web and mobile applications using the latest technologies.",
    url: "https://denkilab.dev",
    siteName: "DenkiLab",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DenkiLab Software Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <BlogPreview />
      <Testimonials />
      <CTA />
      <Contact />
    </main>
  )
}
