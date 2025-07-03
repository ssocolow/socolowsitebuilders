import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Socolow Website Builders | Professional Web Design & Maintenance",
  description: "Professional web design and maintenance services that grow your business online. Get your website today with our simple 4-step process.",
  keywords: "web design, website builder, web development, business website, professional web design",
  authors: [{ name: "Socolow Website Builders" }],
  openGraph: {
    title: "Socolow Website Builders | Professional Web Design & Maintenance",
    description: "Professional web design and maintenance services that grow your business online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
