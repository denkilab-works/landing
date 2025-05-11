"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HiBolt } from "react-icons/hi2";
import { useTranslations } from "next-intl";
export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    t("benefits.small"),
    t("benefits.fast"),
    t("benefits.quality"),
    t("benefits.communication"),
    t("benefits.delivery"),
    t("benefits.passion"),
  ];

  return (
    <section id="about" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              {t("title")} <span className="gradient-text">DenkiLab</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              {t("description1")}
            </p>

            <p className="text-lg text-muted-foreground">
              {t("description2")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <HiBolt className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
