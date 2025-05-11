"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { useTranslations } from "next-intl";
export default function CTA() {
  const t = useTranslations("cta");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-20 w-full bg-secondary/20">
      <div ref={ref} className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg p-8 md:p-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg" />
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight max-w-3xl">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t("description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="#contact">
                  {t("cta")}
                  <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">{t("explore")}</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
