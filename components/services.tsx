"use client";

import { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  HiDevicePhoneMobile,
  HiGlobeAmericas,
  HiSwatch,
  HiCircleStack,
  HiServer,
  HiCodeBracket,
} from "react-icons/hi2";
import { HiBolt } from "react-icons/hi2";
import { FaChartLine } from "react-icons/fa";
import { useTranslations } from "next-intl";


export default function Services() {
  const t = useTranslations("services");

  const services = [
  {
    icon: <HiDevicePhoneMobile className="h-10 w-10 text-primary" />,
    title: t("mobile.title"),
    description:
      t("mobile.description"),
  },
  {
    icon: <HiGlobeAmericas className="h-10 w-10 text-primary" />,
    title: t("web.title"),
    description:
      t("web.description"),
  },
  {
    icon: <HiSwatch className="h-10 w-10 text-primary" />,
    title: t("uiux.title"),
    description:
      t("uiux.description"),
  },
  {
    icon: <HiCodeBracket className="h-10 w-10 text-primary" />,
    title: t("backend.title"),
    description:
      t("backend.description"),
  },
  {
    icon: <HiServer className="h-10 w-10 text-primary" />,
    title: t("cloud.title"),
    description:
      t("cloud.description"),
  },
  {
    icon: <HiCircleStack className="h-10 w-10 text-primary" />,
    title: t("database.title"),
    description:
      t("database.description"),
  },
  {
    icon: <FaChartLine className="h-10 w-10 text-primary" />,
    title: t("analytics.title"),
    description:
      t("analytics.description"),
  },
  {
    icon: <HiBolt className="h-10 w-10 text-primary" />,
    title: t("rapid.title"),
    description:
      t("rapid.description"),
  },
];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
              {(() => {
                const title = t("title");
                const words = title.split(" ");
                const lastWord = words.pop();
                return (
                  <>
                    {words.join(" ")} <span className="gradient-text">{lastWord}</span>
                  </>
                );
              })()}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
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
                  <CardDescription className="text-muted-foreground text-sm">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
