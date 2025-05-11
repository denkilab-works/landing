"use client";

import type React from "react";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import {
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi2";
import { useTranslations } from "next-intl";
export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 w-full">
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

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">
                    {t("information.title")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("information.description")}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start space-x-4">
                    <HiEnvelope className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("information.email")}</p>
                      <p className="text-muted-foreground">
                        hello@byteforge.dev
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <HiPhone className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("information.phone")}</p>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <HiMapPin className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("information.office")}</p>
                      <p className="text-muted-foreground">
                        123 Tech Street, San Francisco, CA 94107
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="h-64 w-full rounded-lg bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Map placeholder</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <HiCheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold font-heading">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      Thank you for reaching out. We'll get back to you as soon
                      as possible.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold font-heading">
                        {t("form.title")}
                      </h3>
                      <p className="text-muted-foreground">
                        {t("form.description")}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          {t("form.name")}
                        </label>
                        <Input id="name" placeholder={t("form.placeholders.name")} required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          {t("form.email")}
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("form.placeholders.email")}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        {t("form.subject")}
                      </label>
                      <Input
                        id="subject"
                        placeholder={t("form.placeholders.subject")}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        {t("form.message")}
                      </label>
                      <Textarea
                        id="message"
                        placeholder={t("form.placeholders.message")}
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          {t("form.submit")}
                          <HiPaperAirplane className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
