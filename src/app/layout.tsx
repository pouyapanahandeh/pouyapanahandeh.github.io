import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Outfit } from "next/font/google";
import "./globals.css";
import "./home.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const title = "Pooya Panahandeh | Senior Full-Stack Engineer";
const description =
  "Senior Full-Stack Engineer specializing in TypeScript, Next.js, and Salesforce ecosystem. Based in Budapest, Hungary.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pouyapanahandeh.github.io"),
  title,
  description,
  authors: [{ name: "Pooya Panahandeh" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Pooya Panahandeh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#e7e1d6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${display.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
