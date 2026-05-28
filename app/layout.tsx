import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const lato = Lato({ 
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans"
});

const greatVibes = Great_Vibes({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script"
});

export const metadata: Metadata = {
  title: "SN Art & Crafty Adda | Customized Handmade Gifts & Resin Art",

  description:
    "SN Art & Crafty Adda offers personalized handmade gifts, resin art, custom name plates, photo frames, birthday gifts, anniversary gifts, and creative craft products online.",

  keywords: [
    "SN Art & Crafty Adda",
    "omsivasakthiartmaker",
    "omsivasakthiartmaker11",
    "handmade gifts",
    "customized gifts",
    "personalized gifts",
    "resin art",
    "resin name boards",
    "birthday gifts",
    "anniversary gifts",
    "couple gifts",
    "photo frames",
    "handmade crafts",
    "gift store",
    "custom gift shop",
    "Instagram gift shop",
    "handmade decorations",
    "creative gifts",
    "gift items online",
    "custom name plates",
    "resin keychains",
    "home decor gifts",
    "wedding gifts",
    "surprise gifts",
    "best handmade gifts",
    "art and crafts",
    "crafty adda",
    "small business gifts",
    "custom resin products",
    "festival gifts",
    "DIY crafts",
    "aesthetic gifts",
    "cute handmade gifts",
    "gift ideas",
    "Indian handmade gifts",
    "Telugu handmade crafts",
    "customized art products",
  ],

  authors: [{ name: "SN Art & Crafty Adda" }],

  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
