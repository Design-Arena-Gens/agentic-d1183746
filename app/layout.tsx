import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iceem.tn | Engineering & IT Services",
  description:
    "Iceem.tn delivers innovative engineering, IT, and consulting services to accelerate digital transformation and operational excellence.",
  openGraph: {
    title: "Iceem.tn | Engineering & IT Services",
    description:
      "Iceem.tn delivers innovative engineering, IT, and consulting services to accelerate digital transformation and operational excellence.",
    url: "https://iceem.tn",
    siteName: "Iceem.tn",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
        width: 1200,
        height: 630,
        alt: "Iceem team collaborating",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iceem.tn | Engineering & IT Services",
    description:
      "Iceem.tn delivers innovative engineering, IT, and consulting services to accelerate digital transformation and operational excellence.",
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);

export default RootLayout;
