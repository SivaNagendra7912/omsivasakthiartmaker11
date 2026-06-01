import type { Metadata } from "next";
import { Cormorant_Garamond, Lato, Great_Vibes } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.omsivasakthiartmaker11.in"),

  title: {
    default: "SN Art & Crafty Adda | Customized Handmade Gifts & Resin Art",
    template: "%s | SN Art & Crafty Adda",
  },

  description:
    "SN Art & Crafty Adda offers personalized handmade gifts, resin art, custom name plates, photo frames, birthday gifts, anniversary gifts, wedding gifts, and creative craft products online.",

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
    "custom name plates",
    "resin keychains",
    "home decor gifts",
    "wedding gifts",
    "creative gifts",
    "custom resin products",
    "Indian handmade gifts",
    "Telugu handmade crafts",
  ],

  authors: [{ name: "SN Art & Crafty Adda" }],
  creator: "SN Art & Crafty Adda",
  publisher: "SN Art & Crafty Adda",

  verification: {
    google: "pdIgEihvq3vZSeZcaRx6htFWKJcDYsot0Lq2unKOMWE",
  },

  openGraph: {
    title: "SN Art & Crafty Adda | Customized Handmade Gifts & Resin Art",
    description:
      "Personalized handmade gifts, resin art, photo frames, name boards, birthday gifts, anniversary gifts and customized craft products.",
    url: "https://www.omsivasakthiartmaker11.in",
    siteName: "SN Art & Crafty Adda",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SN Art & Crafty Adda",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SN Art & Crafty Adda",
    description:
      "Customized Handmade Gifts, Resin Art, Photo Frames and Personalized Crafts.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.omsivasakthiartmaker11.in",
  },

  icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
        { url: "/logo.png", sizes: "512x512", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SN Art & Crafty Adda",
  url: "https://www.omsivasakthiartmaker11.in",
  logo: "https://www.omsivasakthiartmaker11.in/logo.png",
  image: "https://www.omsivasakthiartmaker11.in/logo.png",
  description:
    "Customized handmade gifts, resin art, photo frames, wedding gifts, birthday gifts and personalized crafts.",
  sameAs: [
    "https://www.instagram.com/omsivasakthiartmaker11",
  ],
};

  return (
    <html lang="en" className="bg-background">
      <body
        className={`${cormorant.variable} ${lato.variable} ${greatVibes.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {children}

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}