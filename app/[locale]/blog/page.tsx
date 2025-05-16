import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HiCalendar, HiClock } from "react-icons/hi2";

type BlogPageProps = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  return {
    title: "Blog | DenkiLab",
    description:
      "Insights, tutorials, and news from the DenkiLab team on mobile and web development.",
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const {locale} = await params;
  const posts = await getAllPosts(locale);

  return (
    <div className="container py-24 md:py-32">
      <div className="flex flex-col items-center text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight mb-4">
          The <span className="gradient-text">DenkiLab</span> Blog
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Insights, tutorials, and updates from our team of developers. We share
          what we're learning and building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors"
          >
            <Link href={`/${locale}/blog/${post.slug}`}>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg?height=400&width=600"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge
                    variant="outline"
                    className="bg-primary/10 text-primary"
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <HiCalendar className="mr-1 h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <HiClock className="mr-1 h-3 w-3" />
                    <span>{post.readingTime} min read</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="font-medium">Read more</span>
                </div>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
