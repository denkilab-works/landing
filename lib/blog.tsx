import type React from "react"
import { compileMDX } from "next-mdx-remote/rsc"

export type Post = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image?: string
  author: string
  readingTime: number
  tags: string[]
  content: React.ReactNode
}

// Sample blog posts - in a real app these would come from MDX files
const blogPosts: Omit<Post, "content">[] = [
  {
    slug: "flutter-vs-react-native",
    title: "Flutter vs React Native in 2023: Which One to Choose?",
    date: "June 15, 2023",
    category: "Mobile Development",
    excerpt: "An in-depth comparison of Flutter and React Native for mobile app development in 2023.",
    image: "/placeholder.svg?height=400&width=600&text=Flutter+vs+React+Native",
    author: "Hikari Tanaka",
    readingTime: 8,
    tags: ["Flutter", "React Native", "Mobile Development"],
  },
  {
    slug: "rust-for-web-development",
    title: "Using Rust for Backend Web Development",
    date: "July 22, 2023",
    category: "Backend Development",
    excerpt: "Why Rust is becoming a popular choice for building high-performance web services.",
    image: "/placeholder.svg?height=400&width=600&text=Rust+Backend",
    author: "Kenji Watanabe",
    readingTime: 10,
    tags: ["Rust", "Backend", "WebDev"],
  },
  {
    slug: "nextjs-15-overview",
    title: "Next.js 15: What's New and Exciting",
    date: "August 5, 2023",
    category: "Web Development",
    excerpt: "Exploring the latest features in Next.js 15 and how they improve development experience.",
    image: "/placeholder.svg?height=400&width=600&text=Next.js+15",
    author: "Mai Suzuki",
    readingTime: 6,
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    slug: "ai-in-app-development",
    title: "Integrating AI Features in Modern Apps",
    date: "September 10, 2023",
    category: "AI & Development",
    excerpt: "How to effectively integrate AI capabilities into your web and mobile applications.",
    image: "/placeholder.svg?height=400&width=600&text=AI+Integration",
    author: "Hikari Tanaka",
    readingTime: 12,
    tags: ["AI", "Development", "Integration"],
  },
  {
    slug: "golang-microservices",
    title: "Building Microservices with Go",
    date: "October 3, 2023",
    category: "Backend Development",
    excerpt: "A practical approach to designing and implementing microservices architecture using Go.",
    image: "/placeholder.svg?height=400&width=600&text=Go+Microservices",
    author: "Kenji Watanabe",
    readingTime: 9,
    tags: ["Go", "Microservices", "Architecture"],
  },
  {
    slug: "flutter-animations",
    title: "Creating Beautiful Animations in Flutter",
    date: "November 18, 2023",
    category: "Mobile Development",
    excerpt: "A deep dive into Flutter's animation system and how to create engaging user experiences.",
    image: "/placeholder.svg?height=400&width=600&text=Flutter+Animations",
    author: "Mai Suzuki",
    readingTime: 7,
    tags: ["Flutter", "Animations", "UI/UX"],
  },
]

// Sample MDX content for blog posts
const postContent = `
# Introduction

This is a sample blog post demonstrating MDX capabilities. In a real implementation, this content would come from actual MDX files stored in your project or a CMS.

## Key Points

- MDX combines the power of Markdown with JSX
- It allows embedding React components within your content
- Perfect for blog posts, documentation, and more

## Code Example

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet('Reader'));
\`\`\`

## Next Steps

1. Replace this placeholder content with real MDX files
2. Add more styling to your blog
3. Consider adding features like comments, sharing, etc.

![Placeholder Image](/placeholder.svg?height=300&width=600)

> "The best way to predict the future is to invent it." - Alan Kay
`

// Function to get all blog posts
export async function getAllPosts(): Promise<Post[]> {
  // In a real app, you would read MDX files from the file system
  // For this example, we're using the sample data above

  return Promise.all(
    blogPosts.map(async (post) => {
      const { content } = await compileMDX({
        source: postContent,
        options: { parseFrontmatter: true },
      })

      return {
        ...post,
        content,
      }
    }),
  )
}

// Function to get a single blog post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return null
  }

  const { content } = await compileMDX({
    source: postContent,
    options: { parseFrontmatter: true },
  })

  return {
    ...post,
    content,
  }
}
