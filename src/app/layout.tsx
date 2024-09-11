import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niku Singh | Fullstack Developer",
  description:
    "Portfolio of Niku Singh, a Fullstack Developer specializing in web development, OSS contributions, and open-source projects.",
  keywords:
    "Niku Singh, Fullstack Developer, Web Developer, Open Source, GitLab, GitButler, Parade DB, Postgres, GSoC, Linux Foundation, MIT Bitcoin Expo",
//   author: "Niku Singh",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Niku Singh | Fullstack Developer",
    description:
      "Explore the portfolio of Niku Singh, showcasing expertise in web development, contributions to open source, and involvement in notable projects.",
    url: "https://your-website-url.com", // Replace with your actual URL
    siteName: "Niku Singh Portfolio",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "Niku Singh - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NikuSingh",
    title: "Niku Singh | Fullstack Developer",
    description:
      "Explore the portfolio of Niku Singh, showcasing expertise in web development, OSS contributions, and more.",
    // image: "https://your-website-url.com/twitter-image.jpg", // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-6 px-24">{children}</body>
    </html>
  );
}
