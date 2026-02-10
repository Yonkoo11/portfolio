import type { Metadata } from "next";
import { profile, contact } from "@/data";
import "./globals.css";

const description = "Full-stack Web3 engineer building across DeFi, prediction markets, zero-knowledge proofs, and blockchain gaming.";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.title}`,
  description,
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} - ${profile.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description: `${profile.title}. DeFi, prediction markets, ZK proofs, blockchain gaming.`,
    creator: contact.xHandle,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
