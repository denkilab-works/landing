import type React from "react"
import { compileMDX } from "next-mdx-remote/rsc"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

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
  locale: string
}

const postsDirectory = path.join(process.cwd(), "posts")

// Function to get all blog posts for a specific locale
export async function getAllPosts(locale: string = "en"): Promise<Post[]> {
  const localeDir = path.join(postsDirectory, locale)

  // If locale directory doesn't exist, fallback to English
  if (!fs.existsSync(localeDir)) {
    console.warn(`Locale directory for ${locale} not found, falling back to English`)
    return getAllPosts("en")
  }

  const files = fs.readdirSync(localeDir)
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const filePath = path.join(localeDir, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContent)
      const slug = file.replace(/\.mdx$/, "")

      const { content: compiledContent } = await compileMDX({
        source: content,
        options: { parseFrontmatter: true },
      })

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || new Date().toISOString(),
        category: data.category || "Uncategorized",
        excerpt: data.excerpt || "",
        image: data.image,
        author: data.author || "Anonymous",
        readingTime: data.readingTime || 5,
        tags: data.tags || [],
        content: compiledContent,
        locale,
      }
    })
  )

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getLatestPosts(locale: string = "en"): Promise<Post[]> {
  const posts = await getAllPosts(locale)
  return posts.slice(0, 3)
}

// Function to get a single blog post by slug and locale
export async function getPostBySlug(slug: string, locale: string = "en"): Promise<Post | null> {
  try {
    const localeDir = path.join(postsDirectory, locale)
    const filePath = path.join(localeDir, `${slug}.mdx`)

    // If post doesn't exist in requested locale, try English
    if (!fs.existsSync(filePath) && locale !== "en") {
      console.warn(`Post ${slug} not found in ${locale}, falling back to English`)
      return getPostBySlug(slug, "en")
    }

    const fileContent = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContent)

    const { content: compiledContent } = await compileMDX({
      source: content,
      options: { parseFrontmatter: true },
    })

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      category: data.category || "Uncategorized",
      excerpt: data.excerpt || "",
      image: data.image,
      author: data.author || "Anonymous",
      readingTime: data.readingTime || 5,
      tags: data.tags || [],
      content: compiledContent,
      locale,
    }
  } catch (error) {
    return null
  }
}

// Function to get available locales for a post
export async function getPostLocales(slug: string): Promise<string[]> {
  const locales = fs.readdirSync(postsDirectory)
  return locales.filter(locale => {
    const filePath = path.join(postsDirectory, locale, `${slug}.mdx`)
    return fs.existsSync(filePath)
  })
}
