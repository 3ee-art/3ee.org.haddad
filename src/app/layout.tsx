import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mohamed Yassin Haddad | 3EE Organization - Cybersecurity Expert Fnideq, Morocco",
    template: "%s | Mohamed Yassin Haddad"
  },
  description: "Official Portal of Mohamed Yassin Haddad. Leading Cybersecurity Expert in Fnideq, Morocco. Founder of 3EE Organization specializing in advanced security research and software architecture.",
  keywords: ["Mohamed Yassin Haddad", "3EE Organization", "Cybersecurity Fnideq", "Morocco Security Researcher", "Best Hacking Expert Morocco", "Fnideq Tech", "SmartNotes Security"],
  authors: [{ name: "Mohamed Yassin Haddad" }],
  creator: "Mohamed Yassin Haddad",
  publisher: "3EE Organization",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://3ee-art.github.io/3ee.org.haddad/",
    siteName: "3EE Organization",
    title: "Mohamed Yassin Haddad - The Nexus of Security",
    description: "Explore the advanced security research and dossiers of Mohamed Yassin Haddad.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Yassin Haddad | Cybersecurity Expert",
    description: "Official Portal of 3EE Organization and Mohamed Yassin Haddad.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mohamed Yassin Haddad",
    "alternateName": "3ee-art",
    "url": "https://3ee-art.github.io/3ee.org.haddad/",
    "jobTitle": "Cybersecurity Expert & Software Architect",
    "worksFor": {
      "@type": "Organization",
      "name": "3EE Organization"
    },
    "description": "Mohamed Yassin Haddad is a specialized cybersecurity expert and software developer based in Fnideq, Morocco. Founder of the 3EE Organization.",
    "knowsAbout": ["Cybersecurity", "Penetration Testing", "Software Engineering", "Android Security"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Fnideq",
      "addressCountry": "Morocco"
    },
    "sameAs": [
      "https://github.com/3ee-art"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
