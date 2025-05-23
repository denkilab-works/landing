"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HiCalendar, HiArrowRight } from "react-icons/hi2";
import { useTranslations } from "next-intl";
import { Post } from "@/lib/blog";


export default function BlogPreview({ posts} : { posts: Post[] }) {
  const t = useTranslations("blog");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="blog" className="py-20 md:py-28 w-full">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading tracking-tight">
              {t("title")} <span className="gradient-text">Blog</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("description")}
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <Link href={`/${post.locale}/blog/${post.slug}`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={
                        post.image || "/placeholder.svg?height=400&width=600"
                      }
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <Badge
                      variant="outline"
                      className="w-fit bg-primary/10 text-primary mb-2"
                    >
                      {post.category}
                    </Badge>
                    <CardTitle className="text-xl line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <HiCalendar className="mr-1 h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild className="group">
            <Link href={`/$locale}/blog`}>
              {t("cta")}
              <HiArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
