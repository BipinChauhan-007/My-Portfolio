import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bipin Bihari Chauhan - Portfolio | Computer Science & IoT Student",
  description:
    "Professional portfolio of Bipin Bihari Chauhan - B.Tech CSE (IoT) student, Full Stack Developer, and AI/ML enthusiast. Showcasing projects in IoT, web development, and innovative technology solutions.",
  keywords:
    "Bipin Bihari Chauhan, Computer Science, IoT, Full Stack Developer, AI ML, Portfolio, NIET, Smart India Hackathon, React, Python, C++",
  authors: [{ name: "Bipin Bihari Chauhan" }],
  creator: "Bipin Bihari Chauhan",
  publisher: "Bipin Bihari Chauhan",
  openGraph: {
    title: "Bipin Bihari Chauhan - Professional Portfolio",
    description: "Computer Science & IoT Student | Full Stack Developer | AI/ML Enthusiast",
    url: "https://bipin-bihari-chauhan.vercel.app",
    siteName: "Bipin Bihari Chauhan Portfolio",
    images: [
      {
        url: "/images/bipin.jpg",
        width: 1200,
        height: 630,
        alt: "Bipin Bihari Chauhan - Professional Photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bipin Bihari Chauhan - Professional Portfolio",
    description: "Computer Science & IoT Student | Full Stack Developer | AI/ML Enthusiast",
    images: ["/images/bipin.jpg"],
    creator: "@BipinChauhan007",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  metadataBase: new URL("https://bipin-bihari-chauhan.vercel.app"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/bipin.jpg" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://bipin-bihari-chauhan.vercel.app" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
