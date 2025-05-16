import type React from "react"
import { Inter, Poppins } from "next/font/google"
import "./../globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing"
import { notFound } from "next/navigation"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <NextIntlClientProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
            <div className="relative min-h-screen bg-background">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: {
    default: 'DenkiLab - Fast & Innovative Digital Solutions',
    template: '%s | DenkiLab'
  },
  description: 'A small team of passionate developers creating cutting-edge mobile and web applications. We bring your ideas to life quickly and efficiently.',
  keywords: ['software development', 'mobile apps', 'web development', 'Flutter', 'React', 'Next.js', 'UI/UX design', 'backend development'],
  authors: [{ name: 'DenkiLab' }],
  creator: 'DenkiLab',
  publisher: 'DenkiLab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://denkilab.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/fr',
      'it': '/it',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'fr_FR',
    url: 'https://denkilab.com',
    title: 'DenkiLab - Fast & Innovative Digital Solutions',
    description: 'A small team of passionate developers creating cutting-edge mobile and web applications.',
    siteName: 'DenkiLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DenkiLab - Fast & Innovative Digital Solutions',
    description: 'A small team of passionate developers creating cutting-edge mobile and web applications.',
    creator: '@denkilab',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
