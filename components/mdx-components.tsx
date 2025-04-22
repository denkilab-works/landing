import type React from "react"
import Image from "next/image"
import { useMDXComponent } from "next-mdx-remote/rsc"

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight" {...props} />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold tracking-tight" {...props} />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-3 text-xl font-bold tracking-tight" {...props} />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-primary underline underline-offset-4" {...props} />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mb-4 text-muted-foreground" {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-8 list-disc" {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-8 list-decimal" {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => <li className="mb-1" {...props} />,
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
  ),
  img: ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // Note: In actual usage, you might need to handle width and height differently
    <Image
      src={src || "/placeholder.svg"}
      alt={alt || ""}
      width={800}
      height={400}
      className="rounded-md my-6 mx-auto"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-secondary px-1 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-secondary p-4 rounded-md my-4 overflow-auto" {...props} />
  ),
}

export function MDXContent({ source }: { source: string }) {
  const MDXComponent = useMDXComponent(source)

  return <MDXComponent components={components} />
}
