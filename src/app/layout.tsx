import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import { allSchemas } from "@/lib/seo-schemas";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  preload: true,
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-vicenzo.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vicenzo Prucoli | Desenvolvedor Full Stack - React, Next.js, Laravel",
    template: "%s | Vicenzo Prucoli",
  },
  description:
    "Portfólio profissional de Vicenzo de Almeida Prucoli - Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Laravel, PHP e tecnologias web modernas. Especialista em criar aplicações web escaláveis e performáticas.",
  keywords: [
    "Vicenzo Prucoli",
    "Vicenzo de Almeida Prucoli",
    "desenvolvedor full stack",
    "desenvolvedor React",
    "desenvolvedor Next.js",
    "desenvolvedor Laravel",
    "desenvolvedor PHP",
    "TypeScript",
    "JavaScript",
    "desenvolvedor frontend",
    "desenvolvedor backend",
    "portfolio desenvolvedor",
    "web developer",
    "engenheiro de software",
    "programador",
    "Cachoeiro de Itapemirim",
    "Espírito Santo",
    "Brasil",
    "IFES",
    "sistemas de informação",
    "React Three Fiber",
    "Framer Motion",
    "Tailwind CSS",
    "Node.js",
    "MariaDB",
    "PostgreSQL",
    "API REST",
    "desenvolvimento web",
    "UI/UX",
  ],
  authors: [
    {
      name: "Vicenzo de Almeida Prucoli",
      url: siteUrl,
    },
  ],
  creator: "Vicenzo de Almeida Prucoli",
  publisher: "Vicenzo de Almeida Prucoli",
  applicationName: "Vicenzo Prucoli Portfolio",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  classification: "Portfolio",
  
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Vicenzo Prucoli Portfolio",
    title: "Vicenzo Prucoli | Desenvolvedor Full Stack - React, Next.js, Laravel",
    description:
      "Desenvolvedor Full Stack com experiência em React, Next.js, TypeScript, Laravel e PHP. Confira meus projetos e entre em contato!",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Vicenzo Prucoli - Desenvolvedor Full Stack",
        type: "image/png",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Vicenzo Prucoli | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em React, Next.js, Laravel e tecnologias web modernas.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@vicenzolol",
    site: "@vicenzolol",
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  
  manifest: "/manifest.json",
  
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
      "en-US": `${siteUrl}/en`,
    },
  },
  
  verification: {
    google: "seu-codigo-google-search-console",
    yandex: "seu-codigo-yandex",
    // Adicione outros serviços de verificação conforme necessário
  },
  
  other: {
    "msapplication-TileColor": "#0a0a0a",
    "msapplication-config": "/favicon/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${jakarta.variable} ${grotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
