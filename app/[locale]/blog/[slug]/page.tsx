import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";
import { HiCalendar, HiClock, HiArrowLeft, HiTag } from "react-icons/hi2";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found | DenkiLab",
    };
  }

  return {
    title: `${post.title} | DenkiLab Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      authors: [post.author],
      publishedTime: post.date,
      images: [
        {
          url: post.image || "/placeholder.svg?height=630&width=1200",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-24 md:py-32 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/blog"
          className="flex items-center text-muted-foreground hover:text-foreground mb-8"
        >
          <HiArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <div className="flex items-center space-x-2 mb-4">
          <Badge variant="outline" className="bg-primary/10 text-primary">
            {post.category}
          </Badge>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading tracking-tight mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-8 gap-x-6 gap-y-2">
          <div className="flex items-center">
            <HiCalendar className="mr-1 h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <HiClock className="mr-1 h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
          <div>
            By <span className="font-medium">{post.author}</span>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-lg mb-8">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=800"}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <article className="prose prose-invert max-w-none mdx-content">
        {post.content}
      </article>

      <div className="mt-12 pt-8 border-t border-border">
        <div className="flex items-center space-x-2">
          <HiTag className="h-4 w-4 text-muted-foreground" />
          <div className="text-sm text-muted-foreground">
            Tags:{" "}
            {post.tags.map((tag, i) => (
              <span key={i} className="inline-block">
                {i > 0 && ", "}
                <Link href={`/blog/tags/${tag}`} className="hover:text-primary">
                  {tag}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
